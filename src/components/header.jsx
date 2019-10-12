import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { rgba } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

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

const RightNav = styled('div')`
  @media (max-width: 1024px) {
    display: none;
  }
  margin: 0;
  list-style: none;
  transition: all 0.5s ease-in-out;
  color: ${({ theme, scrolled, color }) => (scrolled ? theme.colors[color] || theme.colors.black : theme.colors.white)};
  display: flex;
  right: 15vw;
  position: absolute;
`;

const MobileNav = styled('div')`
  margin: 0;
  list-style: none;
  transition: all 0.5s ease-in-out;
  color: ${({ theme, scrolled, color }) => (scrolled ? theme.colors[color] || theme.colors.black : theme.colors.white)};
  display: flex;
  right: 0;
  position: absolute;
  
  @media (min-width: 1024px) {
    display: none;
  }
`;

const NavItems = styled('div')`
  margin: 0;
  padding-top: 1rem;
  line-height: 2rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: light;
  letter-spacing: 3px;
  right: 2rem;
  position: relative;
  width: 8vw;
  text-align: center;
  cursor: pointer;
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

const MobileLinkWrapper = styled('div')`
  position: fixed;
  width: ${({ opened }) => (opened ? '100%' : '0')};
  transition: width 0.25s;
  overflow: hidden;
  top: 4rem;
  right: 0;
  background-color: ${({ theme, bgColor }) => rgba(theme.colors[bgColor], 0.9)};
  color: ${({ color }) => color};
`;

const MobileLink = styled('div')`
  width: 100%;
  padding: 1rem;
  text-align: center;
`;

const Header = ({
  noWrap, color, bgColor, textLogo,
}) => {
  const [scrolled, setScrolled] = useState(noWrap);
  const [opened, setOpened] = useState(false);
  const { t } = useTranslation();

  const toggle = () => setScrolled(window.scrollY > 10 || noWrap);

  useEffect(() => {
    window.addEventListener('scroll', toggle);
    return () => {
      window.removeEventListener('scroll', toggle);
    };
  }, []);

  if (opened && !scrolled) {
    setScrolled(true);
  }
  return (
    <>
      <HeaderWrapper scrolled={scrolled} color={color} bgColor={bgColor}>
        {textLogo ? <Link to="/"><Title scrolled={scrolled} color={color}>{t('title')}</Title></Link> : <ExtendLogo scrolled={scrolled} />}
        <RightNav scrolled={scrolled} color={color}>
          <Link to="/portfolio"><NavItems>{t('portfolio.title')}</NavItems></Link>
          <Link to="/contact"><NavItems>{t('contact.title')}</NavItems></Link>
        </RightNav>
        <MobileNav scrolled={scrolled} color={color}>
          <NavItems onClick={() => setOpened(!opened)}><FontAwesomeIcon icon={opened ? faTimes : faBars} size="2x" /></NavItems>
          <MobileLinkWrapper bgColor={bgColor} color={color} opened={opened}>
            <Link to="/portfolio"><MobileLink>{t('portfolio.title')}</MobileLink></Link>
            <Link to="/contact"><MobileLink>{t('contact.title')}</MobileLink></Link>
          </MobileLinkWrapper>
        </MobileNav>
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
