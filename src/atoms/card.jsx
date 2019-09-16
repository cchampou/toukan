import styled from '@emotion/styled';
import React from 'react';
import { rgba } from 'polished';
import { Link } from 'react-router-dom';

const StyledCard = styled('div')`
  display: flex;
  position: relative;
  flex: 0 1 20rem;
  margin: 2rem 1rem;
  flex-direction: column;
  box-shadow: 0 0 20px ${({ theme }) => theme.colors.darkGrey};
`;

const Image = styled('img')`
  width: 100%;
`;

const Text = styled('p')`
  background-color: ${({ theme }) => theme.colors.black};
  font-family: serif;
  font-style: italic;
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  padding: 0.25rem 0.5rem;
  z-index: 10;
`;

const Cta = styled('div')`
  position: absolute;
  height: 100%;
  width: 100%;
  font-family: serif;
  font-style: italic;
  background-color: ${({ theme }) => rgba(theme.colors.black, 0.4)};
  color: ${({ theme }) => theme.colors.white};
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.25s;
  
  &:hover {
    opacity: 1;
  }
`;

const Card = ({ img, children }) => (
  <StyledCard>
    <Link to="/portfolio/test"><Cta>See more</Cta></Link>
    <Image src={img} alt="sample" />
    <Text>{children}</Text>
  </StyledCard>
);

export default Card;
