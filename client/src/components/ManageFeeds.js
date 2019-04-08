import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ManagedFeed from './ManagedFeed';
import { suggestedFeeds } from '../services/feedSources';
import UserFeedService from '../services/UserFeedService';
import FeedDataContext from '../services/FeedDataContext';

class ManageFeeds extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nameInput: '',
            urlInput: ''
        }
    }

    handleAddFeed = (event) => {
        event.preventDefault();

        const urlPattern = new RegExp(/[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi);
        const namePattern = new RegExp(/[-a-zA-Z0-9@:%_+.~#?&//=]{2,36}/gi);

        if (this.state.nameInput.match(namePattern)) {
            if (this.state.urlInput.match(urlPattern)) {
                UserFeedService.addFeed(this.state.urlInput, this.state.nameInput);
                this.context.refreshFeedData();
                this.setState({
                    nameInput: '',
                    urlInput: '',
                });                
            }
            else {
                // TODO: Notify user of improper url format
                console.log("ManageFeeds.js >> handleAddFeed >> Improper url format");
            }
        }
        else {
            // TODO: Notify user of improper name format
            console.log("ManageFeeds.js >> handleAddFeed >> Improper name format");
        }
    }
    
    render() {
        const subscribedFeedEntries = [];
        for (const [url, name] of Object.entries(UserFeedService.subscribedFeeds)) {
            subscribedFeedEntries.push(<ManagedFeed key={url} url={url} name={name} className="subscribedFeedItem" />);
        }
        
        const suggestedFeedEntries = [];
        for (const [url, name] of Object.entries(suggestedFeeds)) {
            if (!(url in UserFeedService.subscribedFeeds)) {
                suggestedFeedEntries.push(<ManagedFeed key={url} url={url} name={name} className="suggestedFeedItem"/>)
            }
        }
        
        return <Card className="panelItem">
            <Card.Body>
                <h4 className="text-truncate">Manage Feeds</h4>
                <hr />
                <h6>Suggested Feeds</h6>
                {suggestedFeedEntries}
                <hr />
                <Form className="addFeedForm" autoComplete="off" onSubmit={e => this.handleAddFeed(e)}>
                    <Form.Group>
                        <h6>Add your own Feeds</h6>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            value={this.state.nameInput}
                            onChange={e => this.setState({nameInput: e.target.value})}
                            className="feedNameInput"
                            name="name" 
                            type="text" 
                            size="sm" 
                            placeholder="Feed Name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            value={this.state.urlInput}
                            onChange={e => this.setState({urlInput: e.target.value})}
                            className="feedUrlInput"
                            name="url" 
                            type="text" 
                            size="sm" 
                            placeholder="Feed URL" />
                    </Form.Group>
                    <Button 
                        className='addFeedButton'
                        type='submit' 
                        variant="outline-primary" 
                        size="sm"
                        style={{display: "block", width: "100%"}}>
                        Add Feed
                    </Button>
                </Form>
                <hr />
                <h6>Remove Feeds</h6>
                {subscribedFeedEntries}
            </Card.Body>
        </Card>
    }
}
ManageFeeds.contextType = FeedDataContext;

export default ManageFeeds;