import React from 'react';

const SwitchOption = (props) => {
    return <div className="custom-control custom-switch">
        <input type="checkbox" 
               className="custom-control-input" 
               id={props.id}
               onChange={props.onChange}
               checked={props.checked} /> 
        <label className="custom-control-label" htmlFor={props.id}>{props.label}</label>
    </div>
}

export default SwitchOption;