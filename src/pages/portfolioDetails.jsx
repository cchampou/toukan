import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/header';
import { Row } from '../utils/flex';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Wrapper = styled(Row)`
  height: calc(100vh - 10rem);
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
`;

const SidePanelWrapper = styled('div')`
  font-family: sans-serif;
  height: 100%;
  width: 30%;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
`;

const VideoWrapper = styled('div')`
  width: 70%;
  color: ${({ theme }) => theme.colors.white};
  align-self: center;
  
  & video {
    width: 100%;
  }
`;

const BackButton = styled(Link)`
  position: fixed;
  top: 5rem;
  left: 2rem;
`;

const PortfolioDetails = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header noWrap color="white" bgColor="red" />
      <Wrapper>
        <VideoWrapper>
          <BackButton to="/portfolio">{t('portfolio.back')}</BackButton>
          {/*<video src={disco} controls>*/}
          {/*  <source src={disco} />*/}
          {/*</video>*/}
        </VideoWrapper>
        <SidePanelWrapper>
          <h1>Test</h1>
        </SidePanelWrapper>
      </Wrapper>
    </>
  );
}

export default PortfolioDetails;
