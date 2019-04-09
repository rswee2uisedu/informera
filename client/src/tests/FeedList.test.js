import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FeedList from '../components/FeedList';

configure({ adapter: new Adapter() });

describe('FeedList tests.', () => {
  test('Can successfully mount component.', () => {
    mount(<FeedList />);
  });
});
