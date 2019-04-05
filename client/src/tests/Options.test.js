import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OptionsContext from '../services/OptionsContext';
import Options from '../components/Options';

configure({ adapter: new Adapter });

let optionsContextValue = {};
let wrappedOptions = {};

describe('Options tests.', () => {
    beforeEach(() => {
        optionsContextValue = {
            options: { ui: {} },
            set: {
                leftPanel: jest.fn(),
                showHeader: jest.fn(),
                alwaysShowSuggestionsModal: jest.fn(),
            }
        };

        wrappedOptions = <OptionsContext.Provider value={optionsContextValue}>
            <Options />
        </OptionsContext.Provider>;
    });

    test('Can successfully mount component.', () => {
        mount(<Options />);
    });

    test('All checkboxes should be unchecked by default.', () => {
        const options = mount(wrappedOptions);

        const chkAlign = options.find('#chkAlign').hostNodes();
        expect(chkAlign.props().checked).not.toEqual(true);

        const chkHeader = options.find('#chkHeader').hostNodes();
        expect(chkHeader.props().checked).not.toEqual(true);

        const chkSuggestions = options.find('#chkSuggestions').hostNodes();
        expect(chkSuggestions.props().checked).not.toEqual(true);
    });

    test('Setting ui options flags should make checkboxes be checked.', () => {
        optionsContextValue.options.ui.leftPanel = true;
        optionsContextValue.options.ui.showHeader = true;
        optionsContextValue.options.ui.alwaysShowSuggestionsModal = true;

        const wrappedCheckedOptions = <OptionsContext.Provider value={optionsContextValue}>
            <Options />
        </OptionsContext.Provider>;
        const options = mount(wrappedCheckedOptions);

        const chkAlign = options.find('#chkAlign').hostNodes();
        expect(chkAlign.props().checked).toEqual(true);

        const chkHeader = options.find('#chkHeader').hostNodes();
        expect(chkHeader.props().checked).toEqual(true);

        const chkSuggestions = options.find('#chkSuggestions').hostNodes();
        expect(chkSuggestions.props().checked).toEqual(true);
    });

    test('Checking align checkbox calls appropriate set method.', () => {
        const options = mount(wrappedOptions);

        const chkAlign = options.find('#chkAlign').hostNodes();
        chkAlign.simulate('change', { target: { checked: true } });

        expect(optionsContextValue.set.leftPanel).toHaveBeenCalled();
    });

    test('Checking header checkbox calls appropriate set method.', () => {
        const options = mount(wrappedOptions);

        const chkHeader = options.find('#chkHeader').hostNodes();
        chkHeader.simulate('change', { target: { checked: true } });

        expect(optionsContextValue.set.showHeader).toHaveBeenCalled();
    });

    test('Checking suggestion checkbox calls appropriate set method.', () => {
        const options = mount(wrappedOptions);

        const chkSuggestions = options.find('#chkSuggestions').hostNodes();
        chkSuggestions.simulate('change', { target: { checked: true } });

        expect(optionsContextValue.set.alwaysShowSuggestionsModal).toHaveBeenCalled();
    });

    test('Options modal is not displayed by default', () => {
        const options = mount(wrappedOptions);

        expect(options.exists('.OptionsModalHeader')).toEqual(false);
    });

    test('Options modal should be displayed after clicking more options button.', () => {
        const options = mount(wrappedOptions);

        const moreOptionsButton = options.find('.panelButton').hostNodes();
        moreOptionsButton.simulate('click');

        expect(options.exists('.OptionsModalHeader')).toEqual(true);
    });
});