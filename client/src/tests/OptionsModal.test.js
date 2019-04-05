import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OptionsModal from '../components/OptionsModal';

configure({ adapter: new Adapter });

describe('OptionsModal tests.', () => {
    test('Can successfully mount component.', () => {
        mount(<OptionsModal />);
    });
});