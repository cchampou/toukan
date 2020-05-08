import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import { Column, Item, Row } from '../utils/flex';
import Card from '../atoms/card';
import client, { getReadableContentType, toSimpleItem } from '../utils/contentful';
import { withAnalyticsPageView } from '../utils/analytics';

const PhotoItem = ({ items, row }) => items
  .filter((entry, i) => i % 3 === row).map(({ title, file, id, thumbnail }) => (
    <Card img={thumbnail || file} id={id} key={id} isVideo={Boolean(thumbnail)}>
      {title}
    </Card>
  ));

const Portfolio = () => {
  const [items, setItems] = useState([]);
  const [contentTypes, setContentTypes] = useState([]);

  const fetchData = async () => {
    try {
      const rawData = (await client.getEntries()).toPlainObject();
      const rawContentTypes = (await client.getContentTypes()).toPlainObject();
      const data = rawData.items.reduce((acc, item) => [...acc, toSimpleItem(item)], []);
      setContentTypes(rawContentTypes.items.map(getReadableContentType));
      setItems(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData().then(() => null);
  }, []);

  return (
    <>
      <Header noWrap color="white" bgColor="pink" />
      <Row padded wrap justify="center">
        {Array(3).fill('').map((_, index) => (
          <Item key={Math.random()}>
            <Column>
              <PhotoItem items={items} row={index} />
            </Column>
          </Item>
        ))}
      </Row>
    </>
  );
};

export default withAnalyticsPageView(Portfolio);
