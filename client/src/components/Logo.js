import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import OptionsContext from '../services/OptionsContext';

const Logo = () => {
    return (
        <OptionsContext.Consumer>
            {({ options, set }) => <Fragment> {
                !options.ui.showHeader &&
                <Card className="panelItem">
                    <Card.Body>
                        <h2 className='text-truncate siteName'>Informera</h2>
                    </Card.Body>
                </Card>
            }
            </Fragment>
            }

        </OptionsContext.Consumer>
    );
}

export default Logo;