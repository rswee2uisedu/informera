/**
 * Creates a list of suggested feeds for the user and allows them
 * to add the feed by clicking on its name.
 */
import React from 'react';
import ManagedFeed from './ManagedFeed';
import UserFeedService from '../services/UserFeedService';
import { suggestedFeeds } from '../services/feedSources';

const SuggestedFeedsList = props => {
  // Create a list of suggested feeds for the user
  const suggestedFeedEntries = [];
  for (const [url, name] of Object.entries(suggestedFeeds)) {
    if (props.maxLength && suggestedFeedEntries.length >= props.maxLength) {
      break;
    }
    if (!(url in UserFeedService.subscribedFeeds)) {
      suggestedFeedEntries.push(
        <ManagedFeed
          key={url}
          url={url}
          name={name}
          className="suggestedFeedItem"
        />
      );
    }
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
      {suggestedFeedEntries}
      <hr />
    </div>
  );
};

export default SuggestedFeedsList;
