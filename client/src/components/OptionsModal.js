/** 
 * Options modal for less used options
 * Ability to manage subscriptions
 * (Requirements 2.c,d)                         
 */

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { suggestedFeeds } from '../services/feedSources';
import UserFeedService from '../services/UserFeedService';
import SuggestedFeed from './SuggestedFeed';

const OptionsModal = props => {

	var subscribed = [];
	var available = [];
	Object.keys(UserFeedService.subscribedFeeds).forEach((feed, idx) => {
        subscribed.push(<SuggestedFeed key={idx} url={feed} name={suggestedFeeds[feed]} />)
    });

    Object.keys(suggestedFeeds).forEach((feed, idx) => {
        available.push(<SuggestedFeed key={idx} url={feed} name={suggestedFeeds[feed]} />)
    });

  
    return (
	    <Modal show={props.show} onHide={props.hide}>
	    	<Modal.Header closeButton onClick={props.hide}>
			    <Modal.Title className="OptionsModalHeader">Options</Modal.Title>
			  </Modal.Header>
			  <Modal.Body className="OptionsModalOptions">
			  <label className='optionToggle'>
			    	<input type='checkbox'/>
                    	Some Option
                </label>
                <label className='optionToggle'>
			    	<input type='checkbox'/>
                    	Another Option
                </label>
                <label className='optionToggle'>
			    	<input type='checkbox'/>
                    	A Third Option
                </label>
                <label className='optionToggle'>
			    	<input type='checkbox'/>
                    	A Fourth Option 
                </label>
                <label className='optionToggle'>
			    	<input type='checkbox'/>
                    	A Final Option 
				</label>
				<h5>Manage Feeds</h5>
			  	<h6>Subscribed</h6>
			    {subscribed}

			    <h6>Available</h6>
			    {available}
			  </Modal.Body>

			  <Modal.Footer>
			    <Button variant="secondary" onClick={props.hide}>Done</Button>
			  </Modal.Footer>
	     </Modal>
	)
}

export default OptionsModal;