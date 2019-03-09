import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import OptionsContext from '../services/OptionsContext';

const Options = () => {
    return <OptionsContext.Consumer>
        {({ options, set }) =>
            <Card className="panelItem">
                <Card.Body>
                    <h4 className="text-truncate">Options</h4>
                    <Form>
                        <Form.Group controlId="chkAlign">
                            <Form.Check
                                type="checkbox"
                                label="Left Align Panels"
                                onChange={set.leftPanel}
                                checked={options.ui.leftPanel}
                            />
                        </Form.Group>
                        <Form.Group controlId="chkHeader">
                            <Form.Check
                                type="checkbox"
                                label="Show Header"
                                onChange={set.showHeader}
                                checked={options.ui.showHeader}
                            />
                        </Form.Group>
                    </Form>
                    <Button className="panelButton" size="sm" onClick={() => undefined}>More Options</Button>
                </Card.Body>
            </Card>
        }
    </OptionsContext.Consumer>
}

export default Options;