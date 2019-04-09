/**
 * feed data list and status, data used by many app components, accessible throughout app
 */

import React from 'react';

const FeedDataContext = React.createContext({
  feedData: [],
  feedLoadingStatus: {},
  refreshFeedData: () => {},
});

export default FeedDataContext;
