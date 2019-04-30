/**
 * Suggested feed modal for first visit and managing subscriptions
 * displays subscribed feeds and available feeds
 * (Requirements 1,1.a,b,c)
 */

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ManagedFeed from './ManagedFeed';
import { suggestedFeeds } from '../services/feedSources';
import UserFeedService from '../services/UserFeedService';

const ManageFeedsModal = props => {
  // get all available feeds as ManagedFeed
  const allFeeds = [];

  Object.keys(suggestedFeeds).forEach((feed, id) => {
    allFeeds.push(
      <ManagedFeed key={id} url={feed} name={suggestedFeeds[feed]} />
    );
  });

  // filter subscribed feeds
  const subscribed = allFeeds.filter((value, index, array) => {
    return UserFeedService.isSubscribed(value) === true;
  });

  // filter unsubscribed feeds
  const available = allFeeds.filter((value, index, array) => {
    return UserFeedService.isSubscribed(value) === false;
  });

  const style = {
    height: '33vh',
    'overflow-y': 'auto',
  };

  return (
    <Modal show={props.show} centered size="lg" onHide={props.onHide}>
      <Modal.Header>
        <Modal.Title>Manage Feeds</Modal.Title>
      </Modal.Header>
      <Row className="manageFeedsContainer">
        <Col md={6} lg={6}>
          <Modal.Body style={style} className="scrollbars">
            <h5>Suggested Feeds</h5>
            {available}
          </Modal.Body>
        </Col>
        <Col md={6} lg={6}>
          <Modal.Body style={style} className="scrollbars">
            <h5>Subscribed Feeds</h5>
            {subscribed}
          </Modal.Body>
        </Col>
      </Row>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.hide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ManageFeedsModal;
