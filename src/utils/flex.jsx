import styled from '@emotion/styled';

export const Row = styled('div', { shouldForwardProp: (prop) => prop !== 'wrap' && prop !== 'padded' && prop !== 'justify' })`
  display: flex;
  padding: ${({ padded }) => (padded ? '0 5vw' : null)}; 
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : null)}; 
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
`;

export const Column = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => justify}; 
`;

export const Item = styled('div')`
  flex: ${({ flex }) => (flex || 1)};
  align-self: ${({ alignSelf }) => alignSelf};
  text-align:  ${({ textAlign }) => textAlign};
`;

export const Spacer = styled('div')`
  height: 5rem;
  
  @media(max-width: 1024px) {
    height: 1rem;  
  }
`;

export const SpacedItem = styled(Item)`
  margin: 0 0.5rem;
  flex: 1 1 20rem;
`;
