import React from 'react';
import withFeedData from './withFeedData';

const SampleConsumer = props => {
  const { feedData } = props;

  return (
    <div>
      {`There are: ${feedData.userFeeds.length} feeds in the sample data set.`}
    </div>
  );
};

export default withFeedData(SampleConsumer);
