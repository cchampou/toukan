import React from 'react';
import Header from '../components/header';
import { withAnalyticsPageView } from '../utils/analytics';

const Legal = () => <Header noWrap />;

export default withAnalyticsPageView(Legal);
