import React from 'react';
import FeedItem from './FeedItem';
import withFeedData from '../services/withFeedData';

const FeedList = props => {
    const { feedData } = props;

    return <div className="componentContainer">

        feed list
    {feedData.feedData.map((fd, i) => <FeedItem key={i} feedData={fd} />)}
    </div>
}

export default withFeedData(FeedList);