/** 
 * Options panel for common options, button for more options
 * (Requirements 2.a, 2.b)                         
 */

import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import OptionsModal from './OptionsModal';
import OptionsContext from '../services/OptionsContext';


const Options = () => {
    const [OptionsModalVisible, setOptionsModalVisible] = useState(false);

    return <OptionsContext.Consumer>
        {({ options, set }) =>
            <Card className="panelItem">
                <Card.Body>
                    <h4 className="text-truncate">Options</h4>
                    <Form>
                        <Form.Group controlId="chkAlign">
                            <Form.Check
                                id="chkAlign"
                                type="checkbox"
                                label="Left Align Panels"
                                onChange={() => set.leftPanel()}
                                checked={options.ui.leftPanel}
                            />
                        </Form.Group>
                        <Form.Group controlId="chkHeader">
                            <Form.Check
                                id="chkHeader"
                                type="checkbox"
                                label="Show Header"
                                onChange={() => set.showHeader()}
                                checked={options.ui.showHeader}
                            />
                        </Form.Group>
                        <Form.Group controlId="chkSuggestions">
                            <Form.Check
                                id="chkSuggestions"
                                type="checkbox"
                                label="Always Show Suggestions Modal"
                                onChange={() => set.alwaysShowSuggestionsModal()}
                                checked={options.ui.alwaysShowSuggestionsModal}
                            />
                        </Form.Group>
                    </Form>
                    <Button className="panelButton" size="sm" onClick={() => setOptionsModalVisible(true)}>More Options</Button>
                    <OptionsModal show={OptionsModalVisible} hide={() => setOptionsModalVisible(false)} />
                </Card.Body>
            </Card>
        }
    </OptionsContext.Consumer>
}

export default Options;