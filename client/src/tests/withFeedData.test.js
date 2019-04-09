import React from 'react';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FeedDataContext from '../services/FeedDataContext';
import withFeedData from '../services/withFeedData';

configure({ adapter: new Adapter() });

const feedData = {
  userFeeds: [{ hello: 'world' }],
  feedData: [{ hello2: 'world2' }],
};

const ChildComponent = props => (
  <div>
    <span className="feed-data">{props.feedData.userFeeds[0].hello}</span>
    <span className="test-prop">{props.testProp}</span>
  </div>
);
const WrappedChildComponent = withFeedData(ChildComponent);
const RootComponent = () => (
  <FeedDataContext.Provider value={feedData}>
    <WrappedChildComponent testProp="a test string" />
  </FeedDataContext.Provider>
);

describe('withFeedData tests.', () => {
  test('Can render a component wrapped in withFeedData.', () => {
    renderer.create(<RootComponent />);
  });

  test('Can access feed data passed down through hoc.', () => {
    const component = mount(<RootComponent />);

    const renderedFeedData = component.find('.feed-data');
    expect(renderedFeedData.text()).toBe('world');
  });

  test('Can pass a regular prop through hoc.', () => {
    const component = mount(<RootComponent />);

    const renderedProp = component.find('.test-prop');
    expect(renderedProp.text()).toBe('a test string');
  });
});
