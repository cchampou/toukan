import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Header from '../components/header';
import { Column, Item, Row } from '../utils/flex';
import Card from '../atoms/card';
import PortfolioDetails from './portfolioDetails';

const Portfolio = () => {
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);

  const fetchData = async () => {
    try {
      const videos = await axios({
        method: 'get',
        url: 'https://cockpit.cchampou.me/api/collections/get/videos?token=573f5f5bdc3eb2fff9a26a57b4fb39',
      });
      if (videos.data && videos.data.entries) {
        setVideos(videos.data.entries);
      }
      const res = await axios({
        method: 'get',
        url: 'https://cockpit.cchampou.me/api/collections/get/creations?token=573f5f5bdc3eb2fff9a26a57b4fb39',
      });
      if (res.data && res.data.entries) {
        setPhotos(res.data.entries);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(photos,videos);
  return (
    <>
      <Header noWrap color="white" bgColor="pink" />
      <Route exact path="/portfolio/:id" render={(props) => <PortfolioDetails entries={[...photos, ...videos]} {...props} />} />
      <Row padded>
        <h1>Videos</h1>
      </Row>
      <Row padded>
        <Item>
          <Column>
            {videos.filter((entry, i) => i % 3 === 0).map(({ thumbnail: { path }, _id: id }) => (
                  <Card img={`https://cockpit.cchampou.me/storage/uploads${path}`} id={id} />
              ))}
          </Column>
        </Item>
        <Item>
          <Column>
            {videos.filter((entry, i) => i % 3 === 1).map(({ thumbnail: { path }, _id: id }) => (
                <Card img={`https://cockpit.cchampou.me/storage/uploads${path}`} id={id} />
            ))}
          </Column>
        </Item>
        <Item>
          <Column>
            {videos.filter((entry, i) => i % 3 === 2).map(({ thumbnail: { path }, _id: id }) => (
                <Card img={`https://cockpit.cchampou.me/storage/uploads${path}`} id={id} />
            ))}
          </Column>
        </Item>
      </Row>
      <Row padded>
        <h1>Photos</h1>
      </Row>
      <Row padded wrap justify="center">
        <Item>
          <Column>
            {photos
              .filter((entry, i) => i % 3 === 0).map(({ title, thumbnail: { path }, _id: id }) => (
                <Card img={`https://cockpit.cchampou.me${path}`} id={id}>
                  {title}
                </Card>
              ))}
          </Column>
        </Item>
        <Item>
          <Column>
            {photos
              .filter((entry, i) => i % 3 === 1).map(({ title, thumbnail: { path }, _id: id }) => (
                <Card img={`https://cockpit.cchampou.me${path}`} id={id}>
                  {title}
                </Card>
              ))}
          </Column>
        </Item>
        <Item>
          <Column>
            {photos
              .filter((entry, i) => i % 3 === 2).map(({ title, thumbnail: { path }, _id: id }) => (
                <Card img={`https://cockpit.cchampou.me${path}`} id={id}>
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
