import React from 'react';
import FeedDataContext from './FeedDataContext';

const withFeedData = WrappedComponent => props => <FeedDataContext.Consumer>
    {feedData => <WrappedComponent feedData={feedData} {...props} />}
</FeedDataContext.Consumer>

export default withFeedData;