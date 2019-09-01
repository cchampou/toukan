import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import logo from '../../assets/images/logo.webp';


const StyledLogo = styled('img')`
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || 'auto'};
`;

// eslint-disable-next-line react/jsx-props-no-spreading
const Logo = (props) => <Link to="/"><StyledLogo src={logo} alt="Logo Toukan" {...props} /></Link>;

export default Logo;
