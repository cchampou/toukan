import styled from '@emotion/styled';
import React from 'react';
import { rgba } from 'polished';
import { Link } from 'react-router-dom';
import playButton from '../../assets/images/play.png';

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
  font-family: Lato;
  font-weight: lighter;
  font-size: 0.8rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  padding: 0.3rem 0.6rem;
  z-index: 10;
`;

const Cta = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 100%;
  max-height: 100%;
  font-family: serif;
  font-style: italic;
  vertical-align: middle;
  text-align: center;
  display: block;
  transition: opacity 0.25s;
  z-index: 5;
  transform: translate(-50%, -50%);
`;

const Card = ({ img, children, id, isVideo }) => (
  <StyledCard to={`/portfolio/${id}`}>
    <Cta>{isVideo ? <img src={playButton} alt="Lire" /> : <img src={playButton} alt="Lire" />}</Cta>
    <Image src={img} alt="sample" />
    <Text>{children}</Text>
  </StyledCard>
);

export default Card;
