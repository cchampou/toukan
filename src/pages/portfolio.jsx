import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import { Column, Item, Row } from '../utils/flex';
import Card from '../atoms/card';
import client, { toSimpleItem } from '../utils/contentful';
import { withAnalyticsPageView } from '../utils/analytics';
import Badge from '../atoms/badge';

const PhotoItem = ({ items, row, rows }) => items
  .filter((entry, i) => i % rows === row).map(({ title, file, id, thumbnail }) => (
    <Card img={thumbnail || file} id={id} key={id} isVideo={Boolean(thumbnail)}>
      {title}
    </Card>
  ));

const Portfolio = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cols, setCols] = useState(3);

  const fetchData = async () => {
    try {
      const queryString = categories.filter((entry) => entry.selected).map((entry) => entry.sys.id).join(',');
      const rawData = (await client.getEntries({ content_type: 'photo', 'fields.tags.sys.id[in]': queryString })).toPlainObject();
      const tmp = rawData.items.reduce((acc, item) => {
        const simpleItem = toSimpleItem(item);
        return simpleItem ? [...acc, toSimpleItem(item)] : acc;
      }, []);

      setItems(tmp);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchInitialData = async () => {
    try {
      const rawCategories = (await client.getEntries({ content_type: 'category' })).toPlainObject()
        .items.map((item) => ({ ...item, selected: true }));
      setCategories(rawCategories);
    } catch (e) {
      console.error(e);
    }
  };

  const toggleCategories = (id) => {
    setCategories(categories
      .map((item) => (item.sys.id === id ? {
        ...item,
        selected: !item.selected,
      } : item)));
  };

  const clearCategories = () => {
    setCategories(categories
      .map((item) => ({
        ...item,
        selected: false,
      })));
  };

  useEffect(() => {
    fetchInitialData().then(() => null);
    if (typeof window !== 'undefined') {
      setCols(Math.ceil(window.innerWidth / 400));
      window.onresize = () => {
        setCols(Math.ceil(window.innerWidth / 400));
      };
    }
    return () => {
      window.onresize = null;
    };
  }, []);

  useEffect(() => {
    fetchData(categories).then(() => null);
  }, [categories]);


  return (
    <>
      <Header noWrap color="white" bgColor="pink" />
      <Row>
        {categories.map(({ fields, sys, selected }) => (
          <Item key={sys.id}>
            <Badge
              onClick={() => toggleCategories(sys.id)}
              selected={selected}
            >
              {fields.name}
            </Badge>
          </Item>
        ))}
        <Item>
          <Badge
            onClick={() => clearCategories()}
            selected={false}
          >
            <strong>x</strong>&nbsp;
            supprimer les filtres
          </Badge>
        </Item>
      </Row>
      <Row padded wrap justify="center">
        {Array(cols).fill('').map((_, index) => (
          <Item key={Math.random()}>
            <Column>
              <PhotoItem items={items} row={index} rows={cols} />
            </Column>
          </Item>
        ))}
      </Row>
    </>
  );
};

export default withAnalyticsPageView(Portfolio);
