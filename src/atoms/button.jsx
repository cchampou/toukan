import React from 'react';
import styled from '@emotion/styled';

const Button = styled('button')`
  border: none;
  background-color: ${({ theme }) => theme.colors.red};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 1.5rem;
  font-size: 1.1rem;
  font-weight: light;
  border-radius: 3rem;
`;

export default Button;