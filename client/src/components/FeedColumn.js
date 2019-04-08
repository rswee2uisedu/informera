/** 
 * Feed column for feed list. Displays loading bar while feed data loads
 * (Requirements 3.a,b,c)
 */ 

import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Col from 'react-bootstrap/Col';
import { FeedStatus } from '../services/constants';
import FeedList from './FeedList';
import withFeedData from '../services/withFeedData';                 

const FeedColumn = props => <Col xs="9">
    {props.feedData.feedLoadingStatus.status === FeedStatus.Loading &&
        <div className="progressBar">
            <ProgressBar animated now={props.feedData.feedLoadingStatus.feedCompletionPercentage} />
        </div>
    }
    <FeedList />
</Col>

export default withFeedData(FeedColumn);