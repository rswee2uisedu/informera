import React from 'react';
import OptionTogglePanelsAlignment from './OptionTogglePanelsAlignment';
import OptionToggleShowHeader from './OptionToggleShowHeader';

const Options = (props) => {

    return <div className="componentContainer panel">
        <h2>Options</h2>
        <OptionTogglePanelsAlignment />
        <OptionToggleShowHeader />
        <button className='moreOptions' onClick={() => undefined}>more options</button>
    </div>

} 

export default Options;