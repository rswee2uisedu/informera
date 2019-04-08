/** 
 * Header for app, displays site name
 * (Requirements 9)                         
 */

import React, { Fragment } from 'react';
import Logo from "./Logo";

const Header = props => {
    return <Fragment>
        {props.isShown &&
            <div className="header">
                <Logo />
            </div>
        }
    </Fragment>
}

export default Header;