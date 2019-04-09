import React, { Fragment } from 'react';
import OptionsContext from '../services/OptionsContext';
import Logo from './Logo.js';

const HeaderSide = () => {
    return (
        <OptionsContext.Consumer>
            {({ options, set }) => <Fragment> {
                !options.ui.showHeader &&
                <Logo />
            }
            </Fragment>
            }

        </OptionsContext.Consumer>
    );
}

export default HeaderSide;
