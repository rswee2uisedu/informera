import React from 'react';
import faker from 'faker';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';

const FeedItem = props => <Card className="feedItem">
	<Card.Title>
		<div className="float-left feeditemTitle"><h4><a target="_blank" rel="noopener noreferrer" href={props.feedData.link}>{props.feedData.title}</a></h4></div>
		<div className="float-right feedItemOptions"><FeedItemOptions /></div>
	</Card.Title>
	<div className="feedItemPreview"><p>{props.feedData.contentSnippet}</p></div>
	<div><img src={faker.image.image()} alt="Faked" height="100px" /></div>
</Card>

const FeedItemOptions = () => <Dropdown>
	<Dropdown.Toggle variant="secondary" id="dropdown-basic">
		<span className="hamburger"></span>
	</Dropdown.Toggle>

	<Dropdown.Menu>
		<Dropdown.Item href="#/action-1">Option </Dropdown.Item>
		<Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
		<Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
	</Dropdown.Menu>
</Dropdown>

export default FeedItem;