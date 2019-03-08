import React from 'react';
import OptionsContext from '../services/OptionsContext';

const OptionTogglePanelsAlignment = (props) => {
    
    return (
        <OptionsContext.Consumer>
            {({options, set}) => (
                <div className='componentContainer'>
                    <label className='optionToggle'>
                        Show Header <nbsp />
                        <input type='checkbox'
                               onChange={set.showHeader} 
                               checked={options.ui.showHeader} 
                        />
                    </label>
                </div>
            )}
        </OptionsContext.Consumer>
    );
}

export default OptionTogglePanelsAlignment;