import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Wrapper = styled('p')`
  margin: 2rem;
  padding: 0.5rem 1rem;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ selected }) => (selected ? '#F2F2F2' : 'transparent')};
  box-shadow: ${({ selected }) => (selected ? '2px 2px 5px silver' : 'none')};
  transform: ${({ selected }) => (selected ? 'translateY(0)' : 'translateY(3px)')};
  display: inline-block;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
`;

const Badge = ({ children, selected, ...props }) => {

  return <Wrapper {...props} selected={selected}>{children}</Wrapper>;
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default Badge;
