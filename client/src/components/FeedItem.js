import React, { Fragment } from 'react';

const FeedItem = props => <Fragment>
    <h1>{props.feedData.title}</h1>
    <div>{props.feedData.content}</div>
</Fragment>

export default FeedItem;