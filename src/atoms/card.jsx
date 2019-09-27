import styled from '@emotion/styled';
import React from 'react';
import { rgba } from 'polished';
import { Link } from 'react-router-dom';

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

const Cta = styled('p')`
  position: absolute;
  height: 1rem;
  bottom: 0.65rem;
  padding: 0.25rem 0;
  width: 100%;
  font-family: serif;
  font-style: italic;
  background-color: ${({ theme }) => rgba(theme.colors.black, 0.4)};
  box-shadow: 0 0 5px ${({ theme }) => rgba(theme.colors.black, 0.4)};
  color: ${({ theme }) => theme.colors.white};
  vertical-align: middle;
  text-align: center;
  display: block;
  opacity: 0;
  transition: opacity 0.25s;
`;

const Card = ({ img, children }) => (
  <StyledCard to="/portfolio/test">
    <Cta>Agrandir</Cta>
    <Image src={img} alt="sample" />
    <Text>{children}</Text>
  </StyledCard>
);

export default Card;
