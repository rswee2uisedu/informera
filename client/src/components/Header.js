import React from 'react';

const Header = (props) => {

    return (
        <div className="header componentContainer" 
             style={{display: props.isShown ? "block" : "none"}}
        >
            <h1 className='siteName'>Informera</h1>
        </div>
    )

}

export default Header;