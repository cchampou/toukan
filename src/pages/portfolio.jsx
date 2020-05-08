import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import { Column, Item, Row } from '../utils/flex';
import Card from '../atoms/card';
import client, { getReadableContentType, toSimpleItem } from '../utils/contentful';
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
  const [contentTypes, setContentTypes] = useState([]);
  const [cols, setCols] = useState(3);

  const fetchData = async (types = []) => {
    try {
      let tmp = [];
      await Promise.all(types.map(async ({ selected, sys }) => {
        if (!selected) {
          return null;
        }
        const rawData = (await client.getEntries({ content_type: sys.id })).toPlainObject();
        tmp = [...tmp, ...rawData.items.reduce((acc, item) => [...acc, toSimpleItem(item)], [])];
        return null;
      }));

      setItems(tmp);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchInitialData = async () => {
    try {
      const rawContentTypes = (await client.getContentTypes()).toPlainObject()
        .items.map((item) => ({ ...item, selected: true }));
      setContentTypes(rawContentTypes);
    } catch (e) {
      console.error(e);
    }
  };

  const toggleContentType = (id) => {
    setContentTypes(contentTypes
      .map((item) => (item.sys.id === id ? {
        ...item,
        selected: !item.selected,
      } : item)));
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
    fetchData(contentTypes).then(() => null);
  }, [contentTypes]);


  return (
    <>
      <Header noWrap color="white" bgColor="pink" />
      <Row>
        {contentTypes.map(({ name, sys, selected }) => (
          <Item key={sys.id}>
            <Badge
              onClick={() => toggleContentType(sys.id)}
              selected={selected}
            >
              {name}
            </Badge>
          </Item>
        ))}
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
