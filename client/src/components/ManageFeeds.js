/**
 * Side panel component that allows user to subscribe to suggested
 * feeds or unsubscribe from feeds as well as add feeds from other
 * sources.
 * (Requirements 4, 4a)
 */
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SuggestedFeedList from './SuggestedFeedsList';
import RemoveFeedsList from './RemoveFeedsList';
import UserFeedService from '../services/UserFeedService';
import FeedDataContext from '../services/FeedDataContext';
import ManageFeedsModal from './ManageFeedsModal';
import OptionsContext from '../services/OptionsContext';
import Config from '../config';

// Constants that define max number of feeds to show in panel subsections.
const MAX_REMOVE_FEEDS = Config.MaxRemovePanelFeeds || 5;
const MAX_SUGGESTED_FEEDS = Config.MaxSuggestedPanelFeeds || 5;

class ManageFeeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: '',
      urlInput: '',
      manageFeedsModalVisible: false,
    };
  }

  // Add feed handler for adding non suggested feeds.
  handleAddFeed = event => {
    // Prevent default form submission event
    event.preventDefault();

    // Text patterns for RSS feed url and feed name.
    const urlPattern = new RegExp(
      /[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi
    );
    const namePattern = new RegExp(/[-a-zA-Z0-9@:%_+.~#?&//=]{2,36}/gi);

    // Ensure user inputs match defined patterns
    if (this.state.nameInput.match(namePattern)) {
      if (this.state.urlInput.match(urlPattern)) {
        // If inputs match patterns, add the feed to users subscribed feeds
        // and reset forms
        UserFeedService.addFeed(this.state.urlInput, this.state.nameInput);
        this.context.refreshFeedData();
        this.setState({
          nameInput: '',
          urlInput: '',
        });
      } else {
        // TODO: Notify user of improper url format
        console.log('ManageFeeds.js >> handleAddFeed >> Improper url format');
      }
    } else {
      // TODO: Notify user of improper name format
      console.log('ManageFeeds.js >> handleAddFeed >> Improper name format');
    }
  };

  render() {
    return (
      <Card className="panelItem">
        <Card.Body>
          <h4 className="text-truncate">News Feeds</h4>
          <hr />
          <OptionsContext.Consumer>
            {({ options, set }) => (
              <div>
                <SuggestedFeedList
                  maxLength={MAX_SUGGESTED_FEEDS}
                  label="Suggested Feeds"
                  shown={options.ui.showSuggestedFeeds}
                />
                <RemoveFeedsList
                  maxLength={MAX_REMOVE_FEEDS}
                  label="Remove Feeds"
                  shown={options.ui.showRemoveFeeds}
                />
              </div>
            )}
          </OptionsContext.Consumer>

          <Form
            className="addFeedForm"
            autoComplete="off"
            onSubmit={e => this.handleAddFeed(e)}
          >
            <Form.Group>
              <h6>Add Your Own Feed</h6>
            </Form.Group>
            <Form.Group>
              <Form.Control
                value={this.state.nameInput}
                onChange={e => this.setState({ nameInput: e.target.value })}
                className="feedNameInput"
                name="name"
                type="text"
                size="sm"
                placeholder="Feed Name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                value={this.state.urlInput}
                onChange={e => this.setState({ urlInput: e.target.value })}
                className="feedUrlInput"
                name="url"
                type="text"
                size="sm"
                placeholder="Feed URL"
              />
            </Form.Group>
            <Form.Group>
              <Button
                className="addFeedButton"
                type="submit"
                variant="primary"
                size="sm"
                style={{ display: 'block', width: '100%' }}
              >
                Add Feed
              </Button>
            </Form.Group>
          </Form>
          <Button
            className="manageFeedsButton"
            variant="primary"
            size="sm"
            style={{ display: 'block', width: '100%' }}
            onClick={() => this.setState({ manageFeedsModalVisible: true })}
          >
            Manage Feeds
          </Button>
          <ManageFeedsModal
            show={this.state.manageFeedsModalVisible}
            hide={() => this.setState({ manageFeedsModalVisible: false })}
          />
        </Card.Body>
      </Card>
    );
  }
}
ManageFeeds.contextType = FeedDataContext;

export default ManageFeeds;
