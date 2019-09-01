import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import Logo from '../atoms/logo';

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

const ExtendLogo = styled(Logo)`
  position: absolute;
  height: 4rem;
  left: ${({ scrolled }) => (scrolled ? '3rem' : 0)};
  top: ${({ scrolled }) => (scrolled ? '1rem' : 0)};
  opacity: ${({ scrolled }) => (scrolled ? 1 : 0)};
  transition: all 0.5s ease-in-out;
`;

const Header = ({ noWrap }) => {
  const [scrolled, setScrolled] = useState(noWrap);
  const { t } = useTranslation();

  const toggle = () => setScrolled(window.scrollY > 10 || noWrap);

  useEffect(() => {
    window.addEventListener('scroll', toggle);
    return () => {
      window.removeEventListener('scroll', toggle);
    };
  }, []);

  return (
    <>
      <HeaderWrapper scrolled={scrolled}>
        <ExtendLogo scrolled={scrolled} />
        <RightNav scrolled={scrolled}>
          <Link to="/portfolio"><NavItems>{t('portfolio')}</NavItems></Link>
          <Link to="/about"><NavItems>{t('about')}</NavItems></Link>
          <Link to="/contact"><NavItems>{t('contact')}</NavItems></Link>
        </RightNav>
      </HeaderWrapper>
    </>
  );
};

Header.defaultProps = {
  noWrap: false,
};

Header.propTypes = {
  noWrap: PropTypes.bool,
};

export default Header;
