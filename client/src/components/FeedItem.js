/**
 * Feed item component to display feed data - title, date source, preview, and image
 * (Requirements 8.a,b,c)
 */

import React from 'react';
import moment from 'moment';
import Card from 'react-bootstrap/Card';

//Trim content to max of 500 characters
const getFeedText = text =>
  text.length < 500 ? text : text.substring(0, 499) + '...';

const FeedItem = props => {
  const feedDate = moment(props.feedData.isoDate);

  return (
    <Card className="feedItem">
      <Card.Title>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={props.feedData.link}
          >
            {props.feedData.title}
          </a>
        </div>
        <div>
          {feedDate && (
            <small className="feedItemDate">{`${feedDate.format(
              'MMM D, YYYY'
            )} (${feedDate.fromNow()})`}</small>
          )}
          <small>
            {' '}
            from{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.feedData.sourceUrl}
            >
              {props.feedData.sourceTitle}
            </a>
          </small>
        </div>
      </Card.Title>
      <Card.Body>
        {props.feedData.contentSnippet.length > 0 && (
          <div className="feedItemPreview">
            {getFeedText(props.feedData.contentSnippet)}
          </div>
        )}
        {props.feedData.enclosure && (
          <div className="feedImageContainer">
            <img
              src={props.feedData.enclosure.url}
              alt={props.feedData.title}
              className="feedImage"
            />
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default FeedItem;
