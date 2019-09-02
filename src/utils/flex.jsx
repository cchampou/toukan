import styled from '@emotion/styled';

export const Row = styled('div')`
  display: flex;
  padding: ${({ padded }) => (padded ? '0 5rem' : null)}; 
`;

export const Column = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const Item = styled('div')`
  flex: 1;
  align-self: ${({ alignSelf }) => alignSelf};
`;
