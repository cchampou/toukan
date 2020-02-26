import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const Wrapper = styled('div')`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  top: 0;
  left: 0;
  margin-top: -4rem;
`;

const Base = styled('div')`
  padding-top: 200vh;
  width: 100vw;
  top: -10vh;
  position: absolute;
  transform: rotateZ(30deg);
  box-shadow: 0 0 50px rgba(0,0,0,0.7);

  & a {
    position: absolute;
    color: black;
    left: 20%;
    top: 10%;
  }
`;

const Yellow = styled(Base)`
  background-color: ${({ theme }) => theme.colors.yellow};
  left: 0;
  transform: rotateZ(0deg);
`;

const revealRed = keyframes`
  from {
    transform: translateX(0%) rotate(30deg);
  }
  
  to {
    transform: translateX(-80%) rotate(30deg);
  }
`;

const revealRedMobile = keyframes`
  from {
    transform: translateX(0%) rotate(30deg);
  }
  
  to {
    transform: translateX(-110%) rotate(30deg);
  }
`;

const Red = styled(Base)`
  left: 115%;
  background-color: ${({ theme }) => theme.colors.red};
  animation: ${revealRed} 1.6s ease 1.25s forwards;
  @media(max-width: 1024px) {
    animation: ${revealRedMobile} 1.6s ease 1.25s forwards;
  }
`;

const revealPink = keyframes`
  from {
    transform: translateX(0%) rotate(30deg);
  }
  
  to {
    transform: translateX(-72%) rotate(30deg);
  }
`;

const revealPinkMobile = keyframes`
  from {
    transform: translateX(0%) rotate(30deg);
  }
  
  to {
    transform: translateX(-102%) rotate(30deg);
  }
`;

const Pink = styled(Base)`
  left: 115%;
  background-color: ${({ theme }) => theme.colors.pink};
  animation: ${revealPink} 1.4s ease 1.25s forwards;
  @media(max-width: 1024px) {
     animation: ${revealPinkMobile} 1.4s ease 1.25s forwards;
  }
`;

const revealPurple = keyframes`
  from {
    transform: translateX(0%) rotate(30deg);
  }
  
  to {
    transform: translateX(-64%) rotate(30deg);
  }
`;

const revealPurpleMobile = keyframes`
  from {
    transform: translateX(0%) rotate(30deg);
  }
  
  to {
    transform: translateX(-94%) rotate(30deg);
  }
`;

const Purple = styled(Base)`
  left: 115%;
  background-color: ${({ theme }) => theme.colors.purple};
  animation: ${revealPurple} 1.2s ease 1.25s forwards;
  @media(max-width: 1024px) {
    animation: ${revealPurpleMobile} 1.2s ease 1.25s forwards;
  }
`;

const revealDeepPurple = keyframes`
  from {
    transform: translateX(0%) rotate(30deg);
  }
  
  to {
    transform: translateX(-55%) rotate(30deg);
  }
`;

const revealDeepPurpleMobile = keyframes`
  from {
    transform: translateX(0%) rotate(30deg);
  }
  
  to {
    transform: translateX(-85%) rotate(30deg);
  }
`;


const DeepPurple = styled(Base)`
  left: 115%;
  background-color: ${({ theme }) => theme.colors.deepPurple};
  animation: ${revealDeepPurple} 1s ease 1.25s forwards;
  @media(max-width: 1024px) {
    animation: ${revealDeepPurpleMobile} 1s ease 1.25s forwards;
  }
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
