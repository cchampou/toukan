import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Header from '../components/header';
import { Column, Item, Row } from '../utils/flex';
import Card from '../atoms/card';
import PortfolioDetails from './portfolioDetails';
import client from '../utils/contentful';

const VideoItem = ({ videos, row }) => videos
  .filter((entry, i) => i % 3 === row).map(({ thumbnail, id }) => (
    <Card img={thumbnail} id={id} key={id} />
  ));

const PhotoItem = ({ photos, row }) => photos
  .filter((entry, i) => i % 3 === row).map(({ title, file, id }) => (
    <Card img={file} id={id}>
      {title}
    </Card>
  ));

const Portfolio = () => {
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);

  const fetchData = async () => {
    try {
      const rawVideos = (await client.getEntries({ content_type: 'video' })).toPlainObject();
      const rawPhotos = (await client.getEntries({ content_type: 'photo' })).toPlainObject();
      const reducedVideo = rawVideos.items.reduce((acc, item) => [...acc, {
        id: item.sys.id,
        thumbnail: item.fields.thumbnail.fields.file.url,
        file: item.fields.asset.fields.file.url,
        title: item.fields.title,
      }], []);
      const reducedPhotos = rawPhotos.items.reduce((acc, item) => [...acc, {
        id: item.sys.id,
        title: item.fields.title,
        file: item.fields.image.fields.file.url,
      }], []);
      setVideos(reducedVideo);
      setPhotos(reducedPhotos);
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
      <Route exact path="/portfolio/:id" render={(props) => <PortfolioDetails entries={[...photos, ...videos]} {...props} />} />
      <Row padded>
        <h1>Videos</h1>
      </Row>
      <Row padded>
        {Array(3).fill('').map((_, index) => (
          <Item key={Math.random()}>
            <Column>
              <VideoItem videos={videos} row={index} />
            </Column>
          </Item>
        ))}
      </Row>
      <Row padded>
        <h1>Photos</h1>
      </Row>
      <Row padded wrap justify="center">
        {Array(3).fill('').map((_, index) => (
          <Item key={Math.random()}>
            <Column>
              <PhotoItem photos={photos} row={index} />
            </Column>
          </Item>
        ))}
      </Row>
    </>
  );
};

export default Portfolio;
