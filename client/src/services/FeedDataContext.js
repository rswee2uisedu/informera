import React from 'react';

const FeedDataContext = React.createContext({
    feedData: [],
    feedLoadingStatus: {},
    refreshFeedData: () => { }
});

export default FeedDataContext;