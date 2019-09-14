import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

const Wrapper = styled('p')`
  background-color: ${({ theme, color }) => theme.colors[color]};
  color: white;
  padding: 0.5rem 1rem;
`;


const Alert = ({ children, level }) => {
  const theme = useTheme();
  const color = theme.alerts[level];

  if (!children) {
    return null;
  }

  return (
    <Wrapper color={color}>
      {children}
    </Wrapper>
  );
};

Alert.defaultProps = {
  children: null,
};

Alert.propTypes = {
  children: PropTypes.node,
  level: PropTypes.string.isRequired,
};

export default Alert;
