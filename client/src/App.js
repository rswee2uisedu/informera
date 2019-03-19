import React, { Component } from 'react';
import OptionsContext, { DefaultOptions } from './services/OptionsContext';
import FeedDataContext from './services/FeedDataContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './App.css';
import FeedColumn from './components/FeedColumn';
import PanelsColumn from './components/PanelsColumn';
import Header from './components/Header';
import SuggestedFeedsModal from './components/SuggestedFeedsModal';
import LocalStorage from 'local-storage';
import FeedDataService from './services/FeedDataService';

class App extends Component {
  constructor(props) {
    super(props);

    // Get users stored options
    const storedOptions = LocalStorage.get('storedOptions');
    let userOptions = DefaultOptions;
    Object.keys(userOptions).map((key) => {
      if (storedOptions[key]) userOptions[key] = storedOptions[key];
    });

    this.state = {
      options: userOptions,
      suggestedFeedsModalVisible: true,
      feedData: [],
      feedLoadingStatus: {}
    }
  }

  componentDidMount() {
    const feedDataService = new FeedDataService(() => {
      this.setState({
        feedData: feedDataService.feedData,
        feedLoadingStatus: feedDataService.loadingStatus
      })
    });
    feedDataService.loadFeedData();
  }

  toggleBooleanOption = (option) => {
    const { options } = this.state;
    let newOptions = Object.assign({}, options);
    newOptions.ui[option] = options.ui[option] ? false : true;


    this.setState({
      options: newOptions
    });
    LocalStorage.set('storedOptions', newOptions);
  }

  render() {
    const { options, suggestedFeedsModalVisible, feedData, feedLoadingStatus } = this.state;

    const optionsContextValue = {
      options: this.state.options,
      set: {
        leftPanel: () => this.toggleBooleanOption('leftPanel'),
        showHeader: () => this.toggleBooleanOption('showHeader'),
      },
    }

    return <OptionsContext.Provider value={optionsContextValue} >
      <FeedDataContext.Provider value={{ feedData: feedData, feedLoadingStatus: feedLoadingStatus }}>
        <Header isShown={options.ui.showHeader} />
        <Container fluid className="appContainer">
          <Row>
            {options.ui.leftPanel ? <PanelsColumn /> : <FeedColumn />}
            {options.ui.leftPanel ? <FeedColumn /> : <PanelsColumn />}
          </Row>
        </Container>
        <SuggestedFeedsModal show={suggestedFeedsModalVisible} onHide={() => this.setState({ suggestedFeedsModalVisible: false })} />
      </FeedDataContext.Provider>
    </OptionsContext.Provider>
  }

}

export default App;
