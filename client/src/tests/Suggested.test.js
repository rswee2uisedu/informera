import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Suggested from '../components/Suggested';
import { suggestedFeeds } from '../services/feedSources';

configure({ adapter: new Adapter });

describe('Suggested tests.', () => {
    test('Can successfully mount component.', () => {
        mount(<Suggested />);
    });

    test('Correct number of feed items are written out.', () => {
        const suggested = mount(<Suggested />);

        const suggestedFeedItemCount = suggested.find('.suggestedFeedItem').hostNodes().length;

        expect(suggestedFeedItemCount).toEqual(Object.keys(suggestedFeeds).length);
    });
});