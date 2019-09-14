import styled from '@emotion/styled';

export const Row = styled('div', { shouldForwardProp: (prop) => prop !== 'wrap' && prop !== 'padded' })`
  display: flex;
  padding: ${({ padded }) => (padded ? '0 5vw' : null)}; 
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : null)}; 
`;

export const Column = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const Item = styled('div')`
  flex: ${({ flex }) => (flex || 1)};
  align-self: ${({ alignSelf }) => alignSelf};
  text-align:  ${({ textAlign }) => textAlign};
`;
