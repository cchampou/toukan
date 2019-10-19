import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/header';
import { Column, Item } from '../utils/flex';

const Wrapper = styled(Column)`
  height: calc(100vh - 4rem);
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  position: fixed;
  z-index: 20;
`;

const SidePanelWrapper = styled('div')`
  font-family: "Lato";
  font-weight: lighter;
  text-align: center;
  height: 8vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.darkGrey};
  z-index: 30; 
`;

const VideoWrapper = styled(Item)`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  align-self: center;
  text-align: center;
  
  & video {
    width: 100%;
  }
`;

const BackButton = styled(Link)`
  position: fixed;
  top: 5rem;
  left: 2rem;
  z-index: 40;
  text-shadow: 0 0 5px black;
`;

const Image = styled('img')`
  max-width: 100%;
  max-height: 86vh;
  position: absolute;
  top: 42vh;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// eslint-disable-next-line react/prop-types
const PortfolioDetails = ({ entries, match: { params: { id } } }) => {
  const { t } = useTranslation();
  // eslint-disable-next-line react/prop-types
  if (!entries || !entries.length) {
    return null;
  }
  const { title, thumbnail: { path } } = entries
  // eslint-disable-next-line react/prop-types,no-underscore-dangle
    .reduce((acc, entry) => (entry._id === id ? entry : acc), {});

  return (
    <>
      <Header noWrap color="white" bgColor="red" />
      <Wrapper>
        <VideoWrapper>
          <BackButton to="/portfolio">{t('portfolio.back')}</BackButton>
          <Image src={`https://cockpit.cchampou.me/${path}`} alt={title} />
        </VideoWrapper>
        <SidePanelWrapper>
          <h1>{title}</h1>
        </SidePanelWrapper>
      </Wrapper>
    </>
  );
};

export default PortfolioDetails;
