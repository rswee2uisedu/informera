import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';

const Header = props => {
    return <Fragment>
        {props.isShown &&
            <Card className="header">
                <Card.Body>
                    <h1 className='siteName'>Informera</h1>
                </Card.Body>
            </Card>
        }
    </Fragment>
}

export default Header;