import React, { useState } from 'react';
import styled from '@emotion/styled';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled('nav')`
  position: fixed;
  height: 4rem;
  width: 100vw;
  background-color: ${({ theme, scrolled }) => (scrolled ? theme.colors.black : 'transparent')};
  box-shadow: 0 0 20px ${({ theme, scrolled }) => (scrolled ? theme.colors.black : 'transparent')};
  transition: all 0.5s ease-in-out;
`;

const RightNav = styled('ul')`
  margin: 0 3rem;
  color: ${({ theme, scrolled }) => (scrolled ? theme.colors.white : theme.colors.black)};
  list-style: none;
  transition: all 0.5s ease-in-out;
  display: flex;
  right: 0;
  position: absolute;
`;

const NavItems = styled('li')`
  margin: 1rem 2rem;
  line-height: 2rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: light;
  letter-spacing: 3px;
`;

const Header = ({ t }) => {
  const [scrolled, setSrolled] = useState(false);

  if (process.env.BUILD_TARGET === 'client') {
    window.addEventListener('scroll', () => {
      setSrolled(window.scrollY > 10);
    });
  }
  return (
    <>
      <HeaderWrapper scrolled={scrolled}>
        <RightNav scrolled={scrolled}>
          <Link to="/about"><NavItems>{t('portfolio')}</NavItems></Link>
          <Link to="/about"><NavItems>{t('about')}</NavItems></Link>
          <Link to="/about"><NavItems>{t('contact')}</NavItems></Link>
        </RightNav>
      </HeaderWrapper>
    </>
  );
};

export default withTranslation()(Header);
