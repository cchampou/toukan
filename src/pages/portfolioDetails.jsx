import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Header from '../components/header';
import { Column, Item } from '../utils/flex';
import client, { getContentType, toPhotoItem, toVideoItem } from '../utils/contentful';

const Wrapper = styled(Column)`
  height: calc(100vh - 4rem);
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  position: fixed;
  z-index: 20;
`;

const Content = styled('div')`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 42vh;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  background-color: black;
  
  video {
    max-height: 100%;
    max-width: 100%;
  }
`;

// eslint-disable-next-line react/prop-types
const PortfolioDetails = ({ match: { params: { id } } }) => {
  const [data, setData] = useState(null);

  const fetch = async () => {
    try {
      const rawContent = (await client.getEntry(id)).toPlainObject();
      setData(getContentType(rawContent) === 'video' ? toVideoItem(rawContent) : toPhotoItem(rawContent));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetch().then(() => null);
  }, []);

  if (!data) {
    return null;
  }

  const { file, thumbnail, title } = data;

  return (
    <>
      <Header noWrap color="white" bgColor="black" autoHide />
      <Wrapper>
        <Content>
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          {file && thumbnail ? <video src={file} autoPlay /> : <img src={file} alt={title} />}
        </Content>
      </Wrapper>
    </>
  );
};

export default PortfolioDetails;
