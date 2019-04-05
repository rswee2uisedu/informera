import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RefreshFeedButton from '../components/RefreshFeedButton';

configure({ adapter: new Adapter });

describe('RefreshFeedButton tests.', () => {
    test('Can successfully mount component.', () => {
        mount(<RefreshFeedButton />);
    });

    test('Clicking button calls refresh feed list.', () => {
        const feedData = {
            refreshFeedData: jest.fn()
        };

        const refreshFeedButton = mount(<RefreshFeedButton feedData={feedData} />);
        const button = refreshFeedButton.find('button').hostNodes();
        button.simulate('click');

        expect(feedData.refreshFeedData).toHaveBeenCalled();
    });
});