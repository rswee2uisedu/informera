import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PanelsColumn from '../components/PanelsColumn';

configure({ adapter: new Adapter() });

describe('PanelsColumn tests.', () => {
  test('Can successfully mount component.', () => {
    mount(<PanelsColumn />);
  });
});
