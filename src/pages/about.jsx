import React from 'react';
import Header from '../components/header';
import { withAnalyticsPageView } from '../utils/analytics';

const About = () => <Header noWrap color="pink" />;

export default withAnalyticsPageView(About);
