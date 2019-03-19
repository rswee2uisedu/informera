import React from 'react';

const FeedDataContext = React.createContext({
    feedData: [],
    feedLoadingStatus: {}
});

export default FeedDataContext;