import React from 'react';
import OptionsContext from '../services/OptionsContext';

const Logo = () => {

    return (
        <OptionsContext.Consumer>
            {({options, set}) => (
                <div className="componentContainer header" 
                     style={{display: options.ui.showHeader ? "none" : "block"}}
                >
                    <h1 className='siteName'>Informera</h1>
                </div>
            )}            
        </OptionsContext.Consumer>
    );
}

export default Logo;