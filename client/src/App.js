import React, { useState } from 'react';
import OptionsContext, { DefaultOptions } from './services/OptionsContext';
import './App.css';
import FeedColumn from './components/FeedColumn';
import PanelsColumn from './components/PanelsColumn';
import Header from './components/Header';
import SuggestedFeedsModal from './components/SuggestedFeedsModal';
import LocalStorage from 'local-storage';

const App = () => {
  const [options, setOptions] = useState(LocalStorage.get('storedOptions') || DefaultOptions);
  const [suggestedFeedsModalVisible, setSuggestedFeedsModalVisible] = useState(true);

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
      <div className="app componentContainer">
        {options.ui.leftPanel ? <PanelsColumn /> : <FeedColumn />}
        {options.ui.leftPanel ? <FeedColumn /> : <PanelsColumn />}
      </div>
      <SuggestedFeedsModal show={suggestedFeedsModalVisible} onHide={() => setSuggestedFeedsModalVisible(false)} />
    </OptionsContext.Provider>
  );
}

export default App;
