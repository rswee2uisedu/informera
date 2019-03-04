import React from 'react';

const OptionToggle = (props) => {

    return <div className='componentContainer'>
        <label className='optionToggle'>
            {props.label}  <input type='checkbox' onChange={() => undefined} />
        </label>
    </div>

}

export default OptionToggle;