import styled from '@emotion/styled';
import React from 'react';
import { rgba } from 'polished';
import { Link } from 'react-router-dom';
import playButton from '../../assets/images/play.png';
import fullScreenButton from '../../assets/images/fullscreen.png';

const StyledCard = styled(Link)`
  display: flex;
  position: relative;
  flex: 0 1 10rem;
  margin: 0.5rem 0.5rem;
  flex-direction: column;
  cursor: pointer;
  
  &:hover > p {
    opacity: 1;
  }
`;

const Image = styled('img')`
  width: 100%;
`;

const Text = styled('p')`
  position: absolute;
  font-family: Lato;
  font-weight: lighter;
  font-size: 0.8rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0;
  bottom: 0;
  padding: 0.3rem 0.6rem;
  z-index: 10;
`;

const Cta = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  display: block;
  transition: opacity 0.25s;
  z-index: 1;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    position: absolute;
    height: 5rem;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
  }
  
  &:hover {
    opacity: 0.8;
  }
`;

const Card = ({ img, children, id, isVideo }) => (
  <StyledCard to={`/portfolio/${id}`}>
    <Cta>{isVideo ? <img src={playButton} alt="Lire" /> : <img src={fullScreenButton} alt="Afficher" />}</Cta>
    <Image src={img} alt="sample" />
    <Text>{children}</Text>
  </StyledCard>
);

export default Card;
