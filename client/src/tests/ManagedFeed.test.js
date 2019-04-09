import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserFeedService from '../services/UserFeedService';
import ManagedFeed from '../components/ManagedFeed';

configure({ adapter: new Adapter() });

describe('ManagedFeed tests.', () => {
  beforeAll(() => {
    UserFeedService.addFeed('http://rss.cnn.com/rss/cnn_topstories.rss', 'cnn');
  });

  test('Can successfully mount component.', () => {
    mount(<ManagedFeed />);
  });

  test('Feed name is displayed', () => {
    const managedFeed = mount(
      <ManagedFeed url="http://rss.cnn.com/rss/cnn_topstories.rss" name="cnn" />
    );

    const text = managedFeed
      .find('.managedFeed')
      .hostNodes()
      .text();

    expect(text).toEqual('cnn');
  });
});
