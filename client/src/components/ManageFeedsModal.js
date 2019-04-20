/**
 * manage feeds modal
 * displays subscribed feeds and available feeds
 * (Requirements )
 */

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ManagedFeed from './ManagedFeed';
import { suggestedFeeds } from '../services/feedSources';
import UserFeedService from '../services/UserFeedService';

const ManagedFeedsModal = props => {
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

  return (
    <Modal show={props.show} centered size="lg" onHide={props.hide}>
      <Modal.Header>
        <Modal.Title className="managedFeedsModal">Manage Feeds</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={6} lg={6}>
            <h5>Suggested Feeds</h5>
            {available}
          </Col>

          <Col md={6} lg={6}>
            <h5>Subscribed Feeds</h5>
            {subscribed}
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.hide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ManagedFeedsModal;
