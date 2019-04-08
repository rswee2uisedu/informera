import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HeaderSide from '../components/HeaderSide';
import OptionsContext from '../services/OptionsContext';

configure({ adapter: new Adapter });

describe('HeaderSide tests.', () => {
    test('Can successfully mount component.', () => {
        mount(<HeaderSide />);
    });

    test('Side Header is not shown when showHeader prop is true.', () => {
        const contextValue = {
            options: {
                ui: {
                    showHeader: true
                }
            }
        };
        const WrappedHeaderSide = <OptionsContext.Provider value={contextValue}>
            <HeaderSide />
        </OptionsContext.Provider>

        const headerSide = mount(WrappedHeaderSide);

        expect(headerSide.exists('.panelItem')).toEqual(false);
    });

    test('HeaderSide is shown when showHeader prop is false.', () => {
        const contextValue = {
            options: {
                ui: {
                    showHeader: false
                }
            }
        };
        const WrappedHeaderSide = <OptionsContext.Provider value={contextValue}>
            <HeaderSide />
        </OptionsContext.Provider>

        const headerSide = mount(WrappedHeaderSide);

        expect(headerSide.exists('.panelItem')).toEqual(true);
    });
});