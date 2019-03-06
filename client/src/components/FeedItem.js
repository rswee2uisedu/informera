import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';


const FeedItemOptions = props => {
	return (
		<Dropdown>
			<Dropdown.Toggle variant="secondary" id="dropdown-basic">
		    	<span className="hamburger"></span>
			</Dropdown.Toggle>

			<Dropdown.Menu>
		    	<Dropdown.Item href="#/action-1">Option </Dropdown.Item>
		    	<Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
		    	<Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	)
}


const FeedItem = props => <div className="componentContainer">
    <div className="feedItemHeading">
    	<div className="feeditemTitle"><h3><a target="_blank" href={props.feedData.link}>{props.feedData.title}</a></h3></div>
    	<div className="feedItemOptions"><FeedItemOptions /></div>
    </div>
    <div className="feedItemPreview"><p>{props.feedData.contentSnippet}</p></div>
    <div className="feedItemImage">photo would be here<img src='' alt="image"/></div>
</div>

export default FeedItem;