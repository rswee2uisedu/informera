import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../components/Header';

configure({ adapter: new Adapter });

describe('Header tests.', () => {
    test('Can successfully mount component.', () => {
        mount(<Header />);
    });

    test('Header is not shown without isShown prop.', () => {
        const header = mount(<Header />);

        expect(header.exists('.header')).toEqual(false);
    });

    test('Header is shown with isShown prop.', () => {
        const header = mount(<Header isShown />);

        expect(header.exists('.header')).toEqual(true);
    });
});