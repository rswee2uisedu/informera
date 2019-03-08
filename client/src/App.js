import React, { useState } from 'react';
import OptionsContext, { DefaultOptions } from './services/OptionsContext';
import './App.css';
import FeedColumn from './components/FeedColumn';
import PanelsColumn from './components/PanelsColumn';

const App = (props) => {

  const [options, setOptions] = useState(DefaultOptions);

  const setPanelsAlignment = () => {
    let newOptions = Object.assign({}, options);
    newOptions.ui.leftPanel = options.ui.leftPanel ? false : true;
    setOptions(newOptions);
  }

  const OptionsContextValue = {
    options: options,
    set: {
      leftPanel: setPanelsAlignment,
    },
  }

  return (
    <OptionsContext.Provider value={OptionsContextValue}>
      <div className="app componentContainer">
        {options.ui.leftPanel ? <PanelsColumn /> : <FeedColumn />}
        {options.ui.leftPanel ? <FeedColumn /> : <PanelsColumn />}
      </div>
    </OptionsContext.Provider>
  );
}

export default App;
