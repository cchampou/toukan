import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { rgba } from 'polished';

import Logo from '../atoms/logo';

const HeaderWrapper = styled('nav')`
  position: fixed;
  top: 0;
  z-index: 100;
  height: 4rem;
  width: 100vw;
  color: ${({ theme, scrolled }) => (scrolled ? theme.colors.black : theme.colors.white)};
  background-color: ${({ theme, scrolled, bgColor }) => (scrolled ? rgba(theme.colors[bgColor], 0.9) : 'transparent')};
  box-shadow: 0 0 20px ${({ theme, scrolled }) => (scrolled && theme.darkMode ? theme.colors.black : 'transparent')};
  transition: background-color 0.5s ease-in-out;
`;

const RightNav = styled('ul')`
  margin: 0;
  list-style: none;
  transition: all 0.5s ease-in-out;
  color: ${({ theme, scrolled, color }) => (scrolled ? theme.colors[color] || theme.colors.black :  theme.colors.white)};
  display: flex;
  right: 0;
  position: absolute;
`;

const NavItems = styled('li')`
  margin: 0;
  padding-top: 1rem;
  line-height: 2rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: light;
  letter-spacing: 3px;
  right: 2rem;
  position: relative;
  width: 10vw;
  text-align: center;
`;

const Title = styled('h1')`
  margin: 1rem 2rem;
  line-height: 2rem;
  text-transform: uppercase;
  position: absolute;
  font-size: 0.8rem;
  font-weight: light;
  letter-spacing: 3px;
  overflow: hidden;
  white-space: nowrap;
  color: ${({ theme, scrolled, color }) => (scrolled ? theme.colors[color] || theme.colors.black : theme.colors[color] || theme.colors.white)};
  width: ${({ scrolled }) => (scrolled ? '20rem' : 0)};
  transition: all 0.5s ease-in-out;
`;

const ExtendLogo = styled(Logo)`
  position: absolute;
  height: 4rem;
  left: ${({ scrolled }) => (scrolled ? '3rem' : 0)};
  top: ${({ scrolled }) => (scrolled ? '1rem' : 0)};
  opacity: ${({ scrolled }) => (scrolled ? 1 : 0)};
  transition: all 0.5s ease-in-out;
`;

const Header = ({
  noWrap, color, bgColor, textLogo,
}) => {
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
      <HeaderWrapper scrolled={scrolled} color={color} bgColor={bgColor}>
        {textLogo ? <Link to="/"><Title scrolled={scrolled} color={color}>{t('title')}</Title></Link> : <ExtendLogo scrolled={scrolled} />}
        <RightNav scrolled={scrolled} color={color}>
           <Link to="/portfolio"><NavItems>{t('portfolio.title')}</NavItems></Link>
          {/* <Link to="/about"><NavItems>{t('about')}</NavItems></Link> */}
          <Link to="/contact"><NavItems>{t('contact.title')}</NavItems></Link>
        </RightNav>
      </HeaderWrapper>
    </>
  );
};

Header.defaultProps = {
  noWrap: false,
  color: 'black',
  bgColor: 'white',
  textLogo: true,
};

Header.propTypes = {
  noWrap: PropTypes.bool,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  textLogo: PropTypes.bool,
};

export default Header;
