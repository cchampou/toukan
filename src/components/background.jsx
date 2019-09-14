import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const Wrapper = styled('div')`
  height: 100vh;
  width: 100vw;
  position: relative;
  // position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  margin-top: -5rem;
`;

const Base = styled('div')`
  padding-top: 100vh;
  width: 100vw;
  position: absolute;
  clip-path: polygon(90% 0%, 100% 0%, 100% 100%, 20% 100%);

  & a {
    position: absolute;
    color: black;
    left: 20%;
    top: 10%;
  }
`;

const Yellow = styled(Base)`
  background-color: ${({ theme }) => theme.colors.yellow};
  left: 0%;
  clip-path: none;
`;

const revealRed = keyframes`
  from {
    left: 100;
  }
  
  to {
    left: -20%;
  }
`;

const Red = styled(Base)`
  left: 100%;
  background-color: ${({ theme }) => theme.colors.red};
  animation: ${revealRed} 1.6s ease 1s forwards;
`;

const revealPink = keyframes`
  from {
    left: 100%;
  }
  
  to {
    left: -10%;
  }
`;

const Pink = styled(Base)`
  left: 100%;
  background-color: ${({ theme }) => theme.colors.pink};
  animation: ${revealPink} 1.4s ease 1s forwards;
`;

const revealPurple = keyframes`
  from {
    left: 100%;
  }
  
  to {
    left: 0%;
  }
`;

const Purple = styled(Base)`
  left: 100%;
  background-color: ${({ theme }) => theme.colors.purple};
  animation: ${revealPurple} 1.2s ease 1s forwards;
`;

const revealDeepPurple = keyframes`
  from {
    left: 100%;
  }
  
  to {
    left: 10%;
  }
`;


const DeepPurple = styled(Base)`
  left: 100%;
  background-color: ${({ theme }) => theme.colors.deepPurple};
  animation: ${revealDeepPurple} 1s ease 1s forwards;
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
