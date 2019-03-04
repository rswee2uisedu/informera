import React from 'react';
import OptionToggle from './OptionToggle';

const Options = (props) => {

    return <div className="componentContainer">
        <div className='optionsPanel'>
            <h2>Options</h2>
            <OptionToggle label='Sample Option 1' />
            <OptionToggle label='Sample Option 2' />
            <OptionToggle label='Sample Option 3' />
            <OptionToggle label='Sample Option 4' />
            <button className='moreOptions' onClick={() => undefined}>more options</button>
        </div>
    </div>

} 

export default Options;