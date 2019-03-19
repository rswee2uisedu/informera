import React, { useState } from 'react';
import OptionsContext, { DefaultOptions } from './services/OptionsContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './App.css';
import FeedColumn from './components/FeedColumn';
import PanelsColumn from './components/PanelsColumn';
import Header from './components/Header';
import SuggestedFeedsModal from './components/SuggestedFeedsModal';
import LocalStorage from 'local-storage';

const App = () => {
  const [suggestedFeedsModalVisible, setSuggestedFeedsModalVisible] = useState(true);

  // Get users stored options
  const storedOptions = LocalStorage.get('storedOptions');
  let userOptions = DefaultOptions;
  Object.keys(userOptions).map((key) => {
    if (storedOptions[key]) userOptions[key] = storedOptions[key];
  });
  const [options, setOptions] = useState(userOptions);

  const toggleBooleanOption = (option) => {
    let newOptions = Object.assign({}, options);
    newOptions.ui[option] = options.ui[option] ? false : true;
    setOptions(newOptions);
    LocalStorage.set('storedOptions', newOptions);
  }

  const OptionsContextValue = {
    options: options,
    set: {
      leftPanel: () => toggleBooleanOption('leftPanel'),
      showHeader: () => toggleBooleanOption('showHeader'),
    },
  }

  return (
    <OptionsContext.Provider value={OptionsContextValue}>
      <Header isShown={options.ui.showHeader} />
      <Container fluid className="appContainer">
        <Row>
          {options.ui.leftPanel ? <PanelsColumn /> : <FeedColumn />}
          {options.ui.leftPanel ? <FeedColumn /> : <PanelsColumn />}
        </Row>
      </Container>
      <SuggestedFeedsModal show={suggestedFeedsModalVisible} onHide={() => setSuggestedFeedsModalVisible(false)} />
    </OptionsContext.Provider>
  );
}

export default App;
