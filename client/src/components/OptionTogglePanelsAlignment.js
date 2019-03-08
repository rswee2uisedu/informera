import React from 'react';
import OptionsContext from '../services/OptionsContext';

const OptionTogglePanelsAlignment = (props) => {
    
    return (
        <OptionsContext.Consumer>
            {({options, set}) => (
                <div className='componentContainer'>
                    <label className='optionToggle'>
                        Left Align Panels <nbsp />
                        <input type='checkbox'
                               onChange={set.leftPanel} 
                               checked={options.ui.leftPanel} 
                        />
                    </label>
                </div>
            )}
        </OptionsContext.Consumer>
    );
}

export default OptionTogglePanelsAlignment;