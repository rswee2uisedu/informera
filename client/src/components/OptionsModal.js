import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const OptionsModal = props => {
  
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
			  </Modal.Body>

			  <Modal.Footer>
			    <Button variant="secondary" onClick={props.hide}>Close</Button>
			    <Button variant="primary" onClick={props.hide}>Save changes</Button>
			  </Modal.Footer>
	     </Modal>
	)
}

export default OptionsModal;