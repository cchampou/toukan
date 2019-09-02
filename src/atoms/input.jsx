import React from 'react';
import styled from '@emotion/styled';

const Input = styled('input')`
  border: solid 2px ${({ theme }) => theme.colors.lightGrey};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 0.5rem 1.5rem;
  font-size: 1.1rem;
  font-weight: lighter;
  border-radius: ${({ theme }) => (theme.rounded ? '3rem' : '0')};
  margin: 0.25rem;
  
  &:focus {
    border: solid 2px ${({ theme }) => theme.colors.purple};
  }
`;

export default Input;
