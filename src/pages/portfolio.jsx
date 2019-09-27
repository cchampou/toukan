import React from 'react';
import mavic from '../../assets/images/mavic.jpg';
import Header from '../components/header';
import { Row } from '../utils/flex';
import Card from '../atoms/card';

const Portfolio = () => (
  <>
    <Header noWrap color="white" bgColor="pink" />
    <Row padded wrap justify="center">
      <Card img={mavic}>
       Sample test
      </Card>
      <Card img={mavic}>
        Sample test
      </Card>
      <Card img={mavic}>
      Sample test
      </Card>
      <Card img={mavic}>
      Sample test
      </Card>
      <Card img={mavic}>
      Sample test
      </Card>
      <Card img={mavic}>
      Sample test
      </Card>
      <Card img={mavic}>
      Sample test
      </Card>
      <Card img={mavic}>
      Sample test
      </Card>
      <Card img={mavic}>
      Sample test
      </Card>
      <Card img={mavic}>
      Sample test
      </Card>
    </Row>
  </>
);

export default Portfolio;
