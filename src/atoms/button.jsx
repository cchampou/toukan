import React from 'react';
import styled from '@emotion/styled';

const Button = styled('button')`
  border: none;
  background-color: ${({ theme, color }) => color ? theme.colors[color] : theme.colors.black};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 1.5rem;
  font-size: 1.1rem;
  font-weight: light;
  border-radius: ${({ theme }) => (theme.rounded ? '3rem' : '0')};
  margin: 0.25rem;
  width: auto;
`;

export default Button;
