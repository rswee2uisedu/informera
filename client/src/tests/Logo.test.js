import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Logo from '../components/Logo';
import OptionsContext from '../services/OptionsContext';

configure({ adapter: new Adapter });

describe('Logo tests.', () => {
    test('Can successfully mount component.', () => {
        mount(<Logo />);
    });

    test('Logo is not shown when showHeader prop is true.', () => {
        const contextValue = {
            options: {
                ui: {
                    showHeader: true
                }
            }
        };
        const WrappedLogo = <OptionsContext.Provider value={contextValue}>
            <Logo />
        </OptionsContext.Provider>

        const logo = mount(WrappedLogo);

        expect(logo.exists('.panelItem')).toEqual(false);
    });

    test('Logo is shown when showHeader prop is false.', () => {
        const contextValue = {
            options: {
                ui: {
                    showHeader: false
                }
            }
        };
        const WrappedLogo = <OptionsContext.Provider value={contextValue}>
            <Logo />
        </OptionsContext.Provider>

        const logo = mount(WrappedLogo);

        expect(logo.exists('.panelItem')).toEqual(true);
    });
});