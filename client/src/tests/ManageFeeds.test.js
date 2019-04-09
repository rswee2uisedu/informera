import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ManageFeeds from '../components/ManageFeeds';
import { suggestedFeeds } from '../services/feedSources';
import UserFeedService from '../services/UserFeedService';

configure({ adapter: new Adapter() });

describe('ManageFeeds tests.', () => {
  beforeAll(() => {
    UserFeedService.addFeed('http://rss.cnn.com/rss/cnn_topstories.rss', 'cnn');
  });

  test('Can successfully mount component.', () => {
    mount(<ManageFeeds />);
  });

  test('Correct number of feeds listed under Remove Feeds', () => {
    const manageFeeds = mount(<ManageFeeds />);
    const subscribedFeedsCount = Object.keys(UserFeedService.subscribedFeeds)
      .length;
    const removeFeedsItemCount = manageFeeds
      .find('.subscribedFeedItem')
      .hostNodes().length;

    expect(subscribedFeedsCount).toEqual(removeFeedsItemCount);
  });

  test('Correct number of feeds listed under Suggested Feeds', () => {
    const manageFeeds = mount(<ManageFeeds />);
    const suggestionsDisplayedCount = manageFeeds
      .find('.suggestedFeedItem')
      .hostNodes().length;
    let suggestedFeedsCount = Object.keys(suggestedFeeds).length;
    for (var key in suggestedFeeds) {
      if (key in UserFeedService.subscribedFeeds) {
        suggestedFeedsCount--;
      }
    }

    expect(suggestionsDisplayedCount).toEqual(suggestedFeedsCount);
  });

  test('Add custom feed form functioning properly', () => {
    const manageFeeds = mount(<ManageFeeds />);
    const rssURL = 'https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss';
    const rssName = 'NASA IotD';

    manageFeeds
      .find('.feedNameInput')
      .hostNodes()
      .simulate('change', { target: { value: rssName } });
    manageFeeds
      .find('.feedUrlInput')
      .hostNodes()
      .simulate('change', { target: { value: rssURL } });

    expect(manageFeeds.state().nameInput).toEqual(rssName);
    expect(manageFeeds.state().urlInput).toEqual(rssURL);

    manageFeeds
      .find('.addFeedButton')
      .hostNodes()
      .simulate('submit');

    expect(manageFeeds.state().nameInput).toEqual('');
    expect(manageFeeds.state().urlInput).toEqual('');
  });
});
