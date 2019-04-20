/**
 * Creates a list of subscribed feeds for the user and allows them
 * to remove the feed by clicking on its name.
 */
import React from 'react';
import ManagedFeed from './ManagedFeed';
import UserFeedService from '../services/UserFeedService';

const RemoveFeedsList = props => {
  // Create a list of the users subscribed feeds
  const subscribedFeedEntries = [];
  for (const [url, name] of Object.entries(UserFeedService.subscribedFeeds)) {
    if (props.maxLength && subscribedFeedEntries.length >= props.maxLength) {
      break;
    }
    subscribedFeedEntries.push(
      <ManagedFeed
        key={url}
        url={url}
        name={name}
        className="subscribedFeedItem"
      />
    );
  }

  // Define a label if one is provided
  let label = '';
  if (props.label) {
    label = <h6>{props.label}</h6>;
  }

  // Define components css styling
  const style = {
    display: props.shown ? 'block' : 'none',
  };

  return (
    <div style={style}>
      {label}
      {subscribedFeedEntries}
      <hr />
    </div>
  );
};

export default RemoveFeedsList;
