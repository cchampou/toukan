import styled from '@emotion/styled';

export const Row = styled('div', { shouldForwardProp: (prop) => prop !== 'wrap' && prop !== 'padded' && prop !== 'justify' })`
  display: flex;
  padding: ${({ padded }) => (padded ? '0 5vw' : null)}; 
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : null)}; 
  justify-content: ${({ justify }) => justify}; 
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

export const Spacer = styled('div')`
  height: 5rem;
`;

export const SpacedItem = styled(Item)`
  margin: 0 0.5rem;
  flex: 1 1 20rem;
`;
