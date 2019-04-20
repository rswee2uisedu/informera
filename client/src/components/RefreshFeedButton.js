/**
 * Button to refresh feed data on demand
 * (Requirement 6.a)
 */

import React from 'react';
import Button from 'react-bootstrap/Button';
import withFeedData from '../services/withFeedData';
import RefreshIcon from './RefreshIcon';

const RefreshFeedButton = props => (
  <Button
    onClick={props.feedData.refreshFeedData}
    variant="link"
    style={{ padding: '0' }}
  >
    <RefreshIcon />
  </Button>
);

export default withFeedData(RefreshFeedButton);
