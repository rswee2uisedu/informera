import React, { Component } from 'react';
import OptionsContext, { DefaultOptions } from './services/OptionsContext';
import FeedDataContext from './services/FeedDataContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './bootstrap.css';
import './App.css';
import FeedColumn from './components/FeedColumn';
import PanelsColumn from './components/PanelsColumn';
import Header from './components/Header';
import SuggestedFeedsModal from './components/SuggestedFeedsModal';
import LocalStorage from 'local-storage';
import FeedDataService from './services/FeedDataService';
import UserFeedService from './services/UserFeedService';

class App extends Component {
  feedDataService;

  constructor(props) {
    super(props);

    // Get users stored options
    const storedOptions = LocalStorage.get('storedOptions');
    let userOptions = DefaultOptions;
    if (storedOptions) {
      Object.keys(userOptions).forEach(key => {
        if (storedOptions[key]) userOptions[key] = storedOptions[key];
      });
    }

    //Set initial application state
    //Options loaded from local storage, feed data not yet loaded
    this.state = {
      options: userOptions,
      suggestedFeedsModalVisible:
        Object.keys(UserFeedService.subscribedFeeds).length < 1 ||
        userOptions.ui.alwaysShowSuggestionsModal,
      feedData: [],
      feedLoadingStatus: {},
    };
  }

  //Set up feed loading service, sending in callback that will update application state whenever feed data changes
  componentDidMount() {
    this.feedDataService = new FeedDataService(() => {
      this.setState({
        feedData: this.feedDataService.feedData,
        feedLoadingStatus: this.feedDataService.loadingStatus,
      });
    });
    this.feedDataService.loadFeedData();
  }

  //Handle user changing a checkbox option, sets value on option object
  //and updates application state and local storage
  toggleBooleanOption = option => {
    const { options } = this.state;
    let newOptions = Object.assign({}, options);
    newOptions.ui[option] = options.ui[option] ? false : true;

    this.setState({
      options: newOptions,
    });
    LocalStorage.set('storedOptions', newOptions);
  };

  render() {
    //Deconstruct state for use
    const {
      options,
      suggestedFeedsModalVisible,
      feedData,
      feedLoadingStatus,
    } = this.state;

    //Set up options context to be passed down component tree
    const optionsContextValue = {
      options: this.state.options,
      set: {
        leftPanel: () => this.toggleBooleanOption('leftPanel'),
        showHeader: () => this.toggleBooleanOption('showHeader'),
        alwaysShowSuggestionsModal: () =>
          this.toggleBooleanOption('alwaysShowSuggestionsModal'),
        showSuggestedFeeds: () =>
          this.toggleBooleanOption('showSuggestedFeeds'),
        showRemoveFeeds: () => this.toggleBooleanOption('showRemoveFeeds'),
      },
    };

    //Set up feed data context to be passed down component tree
    const feedDataContextValue = {
      feedData: feedData,
      feedLoadingStatus: feedLoadingStatus,
      refreshFeedData: this.feedDataService
        ? this.feedDataService.loadFeedData
        : null,
    };

    // Gets height for PanelsColumn
    // FeedColumn calculates height using autosizer
    const contentHeight = options.ui.showHeader ? '91vh' : '100vh';

    // Get width for logo
    const logoWidth = options.ui.showHeader ? '100vw' : '100%';

    return (
      <OptionsContext.Provider value={optionsContextValue}>
        <FeedDataContext.Provider value={feedDataContextValue}>
          <Container fluid className="appContainer">
            <Row>
              <Header width={logoWidth} isShown={options.ui.showHeader} />
            </Row>
            <Row>
              {options.ui.leftPanel ? (
                <PanelsColumn height={contentHeight} />
              ) : (
                <FeedColumn />
              )}
              {options.ui.leftPanel ? (
                <FeedColumn />
              ) : (
                <PanelsColumn height={contentHeight} />
              )}
            </Row>
          </Container>
          <SuggestedFeedsModal
            show={suggestedFeedsModalVisible}
            onHide={() => this.setState({ suggestedFeedsModalVisible: false })}
          />
        </FeedDataContext.Provider>
      </OptionsContext.Provider>
    );
  }
}

export default App;
