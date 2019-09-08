import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled('div')`
  height: 100vh;
  position: relative;
  overflow: hidden;
  margin-top: -5rem;
`;

const Base = styled('div')`
  height: 100%;
  width: 150%;
  position: absolute;
  box-shadow: 0 0 80px black;
  clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%);
`;

const Yellow = styled(Base)`
  background-color: ${({ theme }) => theme.colors.yellow};
  left: -100%;
`;

const Red = styled(Base)`
  background-color: ${({ theme }) => theme.colors.red};
  left: -40%;
`;

const Pink = styled(Base)`
  background-color: ${({ theme }) => theme.colors.pink};
  left: -20%;
`;

const Purple = styled(Base)`
  left: 0%;
  background-color: ${({ theme }) => theme.colors.purple};
`;

const DeepPurple = styled(Base)`
  left: 20%;
  background-color: ${({ theme }) => theme.colors.deepPurple};
`;

export default ({ children }) => (
  <Wrapper>
    {children}
    <Yellow />
    <Red />
    <Pink />
    <Purple />
    <DeepPurple />
  </Wrapper>
);
