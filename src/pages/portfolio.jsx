import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/header';
import { Column, Item, Row } from '../utils/flex';
import Card from '../atoms/card';

const Portfolio = () => {
  const [entries, setEntries] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: 'https://cockpit.cchampou.me/api/collections/get/creations?token=573f5f5bdc3eb2fff9a26a57b4fb39',
      });
      if (res.data && res.data.entries) {
        setEntries(res.data.entries);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header noWrap color="white" bgColor="pink" />
      <Row padded wrap justify="center">
        <Item>
          <Column>
            {entries.filter((entry, i) => i % 3 === 0).map(({ title, thumbnail: { path } }) => (
              <Card img={`https://cockpit.cchampou.me/${path}`}>
                {title}
              </Card>
            ))}
          </Column>
        </Item>
        <Item>
          <Column>
            {entries.filter((entry, i) => i % 3 === 1).map(({ title, thumbnail: { path } }) => (
              <Card img={`https://cockpit.cchampou.me/${path}`}>
                {title}
              </Card>
            ))}
          </Column>
        </Item>
        <Item>
          <Column>
            {entries.filter((entry, i) => i % 3 === 2).map(({ title, thumbnail: { path } }) => (
              <Card img={`https://cockpit.cchampou.me/${path}`}>
                {title}
              </Card>
            ))}
          </Column>
        </Item>
      </Row>
    </>
  );
};

export default Portfolio;
