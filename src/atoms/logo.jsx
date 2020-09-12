import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import logo from '../../assets/images/logo.webp';
import logoPng from '../../assets/images/logo.png';
import logoLight from '../../assets/images/logo-light.png';


const StyledLogo = styled('picture')`
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || 'auto'};
`;

// eslint-disable-next-line react/jsx-props-no-spreading
const Logo = ({ light, ...props }) => <Link to="/">
  <StyledLogo>
    <source srcSet={logo} type="image/webp" />
    <img src={light ? logoLight : logoPng} alt="Logo Toukan" {...props} />
  </StyledLogo>
</Link>;

export default Logo;
