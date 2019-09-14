import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { Item, Row } from '../utils/flex';
import blackMagic from '../../assets/images/blackmagic.jpg';
import mavic from '../../assets/images/mavic.jpg';
import ronin from '../../assets/images/ronin.jpg';
import adobe from '../../assets/images/adobe.jpg';

const Card = styled(Item)`
  margin: 1rem;
  border: solid 1px ${({ theme }) => theme.colors.lightGrey};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.lightGrey};
  
  & p {
    padding: 1rem;
  }
`;


const Materiel = () => {
  const { t } = useTranslation();

  return (
    <Row padded wrap>
      <Card textAlign="center" flex="1 0 15rem" alignSelf="align-start">
        <img src={blackMagic} alt="blackmagic" width="100%" />
        <p dangerouslySetInnerHTML={{ __html: t('powerredByMagic') }} />
      </Card>
      <Card textAlign="center" flex="1 0 15rem" alignSelf="align-start">
        <img src={mavic} alt="Mavic" width="100%" />
        <p dangerouslySetInnerHTML={{ __html: t('powerredByMavic') }} />
      </Card>
      <Card textAlign="center" flex="1 0 15rem" alignSelf="align-start">
        <img src={ronin} alt="Ronin" width="100%" />
        <p dangerouslySetInnerHTML={{ __html: t('powerredByRonin') }} />
      </Card>
      <Card textAlign="center" flex="1 0 15rem" alignSelf="align-start">
        <img src={adobe} alt="Adobe" width="100%" />
        <p dangerouslySetInnerHTML={{ __html: t('powerredByAdobe') }} />
      </Card>
    </Row>
  );
};

export default Materiel;
