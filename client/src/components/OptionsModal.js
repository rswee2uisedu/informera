/**
 * Options modal for less used options
 * Ability to manage subscriptions
 * (Requirements 2.c,d)
 */

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const OptionsModal = props => {
  const style = {
    display: 'grid',
    overflowY: 'auto',
  };

  return (
    <Modal show={props.show} centered size="lg" onHide={props.hide}>
      <Modal.Header closeButton onClick={props.hide}>
        <Modal.Title className="OptionsModalHeader">Options</Modal.Title>
      </Modal.Header>
      <Modal.Body className="OptionsModalOptions scrollbars" style={style}>
        <label className="optionToggle">
          <input type="checkbox" /> Some Sample Option
        </label>
        <label className="optionToggle">
          <input type="checkbox" /> Another Sample Option
        </label>
        <label className="optionToggle">
          <input type="checkbox" /> A Third Sample Option
        </label>
        <label className="optionToggle">
          <input type="checkbox" /> A Fourth Sample Option
        </label>
        <label className="optionToggle">
          <input type="checkbox" /> A Final Sample Option
        </label>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={props.hide}>
          Done
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OptionsModal;
