import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FeedStatus } from '../services/constants';
import FeedColumn from '../components/FeedColumn';

configure({ adapter: new Adapter() });

describe('FeedColumn tests.', () => {
  test('Can successfully mount component.', () => {
    mount(<FeedColumn />);
  });

  test('Progress bar is displayed when feed status is loading', () => {
    const feedData = {
      feedLoadingStatus: {
        status: FeedStatus.Loading,
      },
    };
    const feedColumn = mount(<FeedColumn feedData={feedData} />);

    expect(feedColumn.exists('.progressBar')).toEqual(true);
  });

  test('Progress bar is not displayed when feed status is complete', () => {
    const feedData = {
      feedLoadingStatus: {
        status: FeedStatus.Complete,
      },
    };
    const feedColumn = mount(<FeedColumn feedData={feedData} />);

    expect(feedColumn.exists('.progressBar')).toEqual(false);
  });
});
