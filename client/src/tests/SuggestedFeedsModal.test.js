import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SuggestedFeedsModal from '../components/SuggestedFeedsModal';
import { suggestedFeeds } from '../services/feedSources';

configure({ adapter: new Adapter() });

describe('SuggestedFeedsModal tests.', () => {
  test('Can successfully mount component.', () => {
    mount(<SuggestedFeedsModal />);
  });

  test('Modal not displayed if show prop is false.', () => {
    const modal = mount(<SuggestedFeedsModal show={false} />);

    expect(modal.exists('.suggestedFeedsModalContainer')).toEqual(false);
  });

  test('Modal is visible is show prop is true.', () => {
    const modal = mount(<SuggestedFeedsModal show />);

    expect(modal.exists('.suggestedFeedsModalContainer')).toEqual(true);
  });

  test('Clicking hide button calls onHide prop.', () => {
    const onHide = jest.fn();
    const modal = mount(<SuggestedFeedsModal show onHide={onHide} />);

    const hideButton = modal.find('.suggestedFeedsModalSkipButton').hostNodes();
    hideButton.simulate('click');

    expect(onHide).toHaveBeenCalled();
  });

  test('Correct number of suggested feed items are displayed.', () => {
    const modal = mount(<SuggestedFeedsModal show />);

    const suggestedItemCount = modal
      .find('.suggestedFeedsModalItem')
      .hostNodes().length;

    expect(suggestedItemCount).toEqual(Object.keys(suggestedFeeds).length);
  });

  test('Clicking a feed item selects it.', () => {
    const modal = mount(<SuggestedFeedsModal show />);

    const suggestedItems = modal.find('.suggestedFeedsModalItem').hostNodes();
    suggestedItems.first().simulate('click');

    const selectedItemCount = modal.find('.bg-secondary').hostNodes().length; //bg-secondary is the class bootstrap adds

    expect(selectedItemCount).toEqual(1);
  });

  test('Clicking save without selecting a feed item does not close the modal.', () => {
    const onHide = jest.fn();
    const modal = mount(<SuggestedFeedsModal show onHide={onHide} />);

    const saveButton = modal.find('.suggestedFeedsModalSaveButton').hostNodes();
    saveButton.simulate('click');

    expect(onHide).not.toHaveBeenCalled();
  });

  test('Modal is closed after clicking save with feed(s) selected.', () => {
    const onHide = jest.fn();
    const modal = mount(<SuggestedFeedsModal show onHide={onHide} />);

    const suggestedItems = modal.find('.suggestedFeedsModalItem').hostNodes();
    suggestedItems.first().simulate('click');

    const saveButton = modal.find('.suggestedFeedsModalSaveButton').hostNodes();
    saveButton.simulate('click');

    expect(onHide).toHaveBeenCalled();
  });
});
