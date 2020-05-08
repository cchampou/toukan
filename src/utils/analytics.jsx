import React from 'react';
import Analytics from 'analytics';
import googleAnalytics from '@analytics/google-analytics';

const analytics = Analytics({
  app: 'Toukan',
  version: 100,
  plugins: [
    googleAnalytics({
      trackingId: 'UA-154639737-1',
    }),
  ],
});

export const withAnalyticsPageView = (Component) => (props) => {
  if (process.env.NODE_ENV === 'production') {
    analytics.page().then(null);
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...props} />;
};

export default analytics;
