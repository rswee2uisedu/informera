import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Col from 'react-bootstrap/Col';
import { FeedStatus } from '../services/constants';
import FeedList from './FeedList';
import withFeedData from '../services/withFeedData';

const FeedColumn = props => <Col xs="9">
    {props.feedData.feedLoadingStatus.status === FeedStatus.Loading &&
        <ProgressBar animated now={props.feedData.feedLoadingStatus.feedCompletionPercentage} />
    }
    <FeedList />
</Col>

export default withFeedData(FeedColumn);