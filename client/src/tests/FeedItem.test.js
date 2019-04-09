import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import moment from 'moment';
import FeedItem from '../components/FeedItem';

configure({ adapter: new Adapter() });

const feedData = {
  isoDate: moment(),
  contentSnippet: '',
};

describe('FeedItem tests.', () => {
  test('Can successfully mount component.', () => {
    mount(<FeedItem feedData={feedData} />);
  });

  test('Text that is dependent on certain properties being set are not visible.', () => {
    const feedItem = mount(<FeedItem feedData={feedData} />);

    expect(feedItem.exists('.feedItemPreview')).toEqual(false);
    expect(feedItem.exists('.feedImageContainer')).toEqual(false);
  });

  test('Having a content snippet value causes the content snippet section to be visible.', () => {
    feedData.contentSnippet = 'content snippet';
    const feedItem = mount(<FeedItem feedData={feedData} />);

    expect(feedItem.exists('.feedItemPreview')).toEqual(true);
  });

  test('Having an enclosure causes the image section to be visible.', () => {
    feedData.enclosure = {};
    const feedItem = mount(<FeedItem feedData={feedData} />);

    expect(feedItem.exists('.feedImageContainer')).toEqual(true);
  });
});
