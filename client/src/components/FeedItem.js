import React from 'react';
import moment from 'moment';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';

const getFeedText = text => text.length < 500 ? text : text.substring(0, 499) + '...';

const FeedItem = props => <Card className="feedItem">
	<Card.Title>
		<div className="float-left feeditemTitle"><h4><a target="_blank" rel="noopener noreferrer" href={props.feedData.link}>{props.feedData.title}</a></h4></div>
		<div className="float-right feedItemOptions"><FeedItemOptions /></div>
	</Card.Title>
	<div className="feedItemPreview"><p>{getFeedText(props.feedData.contentSnippet)}</p></div>
	{props.feedData.enclosure &&
		<div className="feedImageContainer">
			<img src={props.feedData.enclosure.url} alt={props.feedData.title} className="feedImage" />
		</div>
	}
	{props.feedData.isoDate &&
		<div>{moment(props.feedData.isoDate).format("dddd, MMMM Do YYYY, h:mm:ss a")}</div>
	}
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