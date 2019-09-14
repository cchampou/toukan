import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const baseStyle = css`
  font-family: "Lato";
  padding: 0.5rem 1.5rem;
  font-size: 1.1rem;
  font-weight: lighter;
  margin: 0.25rem;
`;

export const TextArea = styled('textarea')`
  ${baseStyle};
  border: solid 2px ${({ theme }) => theme.colors.lightGrey};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => (theme.rounded ? '3rem' : '0')};
  
  &:focus {
    border: solid 2px ${({ theme }) => theme.colors.purple};
  }
`;

const Input = styled('input')`
  ${baseStyle};
  border: solid 2px ${({ theme }) => theme.colors.lightGrey};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => (theme.rounded ? '3rem' : '0')};
  
  &:focus {
    border: solid 2px ${({ theme }) => theme.colors.purple};
  }
`;

export default Input;
