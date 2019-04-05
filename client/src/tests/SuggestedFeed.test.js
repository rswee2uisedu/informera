import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserFeedService from '../services/UserFeedService';
import SuggestedFeed from '../components/SuggestedFeed';

configure({ adapter: new Adapter });

describe('SuggestedFeed tests.', () => {
    beforeAll(() => {
        UserFeedService.addFeed('http://rss.cnn.com/rss/cnn_topstories.rss');
    });

    test('Can successfully mount component.', () => {
        mount(<SuggestedFeed />);
    });

    test('+ Is displayed when feed is not subscribed to.', () => {
        const suggestedFeed = mount(<SuggestedFeed url="http://www.google.com" name="google" />);

        const text = suggestedFeed.find('.suggestedFeedItem').hostNodes().text();

        expect(text).toEqual('+');
    });

    test('- Is displayed when feed is subscribed to.', () => {
        const suggestedFeed = mount(<SuggestedFeed url="http://rss.cnn.com/rss/cnn_topstories.rss" name="cnn" />);

        const text = suggestedFeed.find('.suggestedFeedItem').hostNodes().text();

        expect(text).toEqual('-');
    });

    test('Feed name is displayed', () => {
        const suggestedFeed = mount(<SuggestedFeed url="http://rss.cnn.com/rss/cnn_topstories.rss" name="cnn" />);

        const text = suggestedFeed.find('.suggestedFeedItemName').hostNodes().text();

        expect(text).toEqual('cnn');
    });
});