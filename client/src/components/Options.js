import React from 'react';
import OptionTogglePanelsAlignment from './OptionTogglePanelsAlignment';

const Options = (props) => {

    return <div className="componentContainer">
        <div className='optionsPanel'>
            <h2>Options</h2>
            <OptionTogglePanelsAlignment />
            <button className='moreOptions' onClick={() => undefined}>more options</button>
        </div>
    </div>

} 

export default Options;