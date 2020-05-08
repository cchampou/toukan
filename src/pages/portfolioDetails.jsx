import React, { useEffect, useState, useRef, useCallback } from 'react';
import styled from '@emotion/styled';
import Header from '../components/header';
import client, { getContentType, toPhotoItem, toVideoItem } from '../utils/contentful';
import play from '../../assets/images/play.png';

const Content = styled('div')`
  position: fixed;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.black};
  padding-top: 4rem;
  padding-bottom: 4rem;
  width: 100vw;
  height: calc(100vh - 8rem);
  position: absolute;
  top: 42vh;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  top: 0;
  left: 0;
  
  video, img {
    max-height: 100%;
    max-width: 100%;
    height: 100%;
  }
`;

const PlayButton = styled('div')`
  background-image: url('${play}');
  background-repeat: no-repeat;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  cursor: pointer;
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: opacity 0.25s ease-in-out;
`;

const usePlayer = () => {
  const ref = useRef(null);
  const [canPlay, setCanPlay] = useState(false);
  const setRef = useCallback((node) => {
    if (node) {
      node.addEventListener('canplay', () => {
        setCanPlay(true);
      });
      node.addEventListener('playing', () => {
        setCanPlay(false);
      });
      node.addEventListener('pause', () => {
        setCanPlay(true);
      });
    }

    ref.current = node;
  }, []);

  return [ref, setRef, canPlay];
};

// eslint-disable-next-line react/prop-types
const PortfolioDetails = ({ match: { params: { id } } }) => {
  const [data, setData] = useState(null);
  const [player, setPlayer, canPlay] = usePlayer();

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


  return (
    <>
      <Header noWrap color="black" bgColor="white" autoHide />
      <Content>
        <PlayButton
          onClick={() => (canPlay ? player.current.play() : player.current.pause())}
          show={canPlay}
        />
        {/* eslint-disable-next-line no-nested-ternary */}
        {data ? data.file && data.thumbnail
          // eslint-disable-next-line jsx-a11y/media-has-caption
          ? <video src={data.file} autoPlay ref={setPlayer} />
          : <img src={data.file} alt={data.title} /> : null}
      </Content>
    </>
  );
};

export default PortfolioDetails;
