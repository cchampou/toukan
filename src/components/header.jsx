import React, { useState } from 'react';
import styled from '@emotion/styled';

const HeaderWrapper = styled('nav')`
  position: fixed;
  height: 5rem;
  width: 100vw;
  background-color: ${({ theme, scrolled }) => (scrolled ? theme.colors.black : 'transparent')};
  box-shadow: 0 0 20px ${({ theme, scrolled }) => (scrolled ? theme.colors.black : 'transparent')};
  transition: all 0.5s ease-in-out;
`;

const Header = () => {
  const [scrolled, setSrolled] = useState(false);

  if (process.env.BUILD_TARGET === 'client') {
    window.addEventListener('scroll', (e) => {
      setSrolled(window.scrollY > 10);
    });
  }
  return (
    <>
      <HeaderWrapper scrolled={scrolled} />
    </>
  );
};

export default Header;
