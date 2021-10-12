import React from 'react';
import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import store from '../../../../store/createStore';
import { Tabs, TabsIprops } from '../../../../components/Tabs/Tabs';
import { EnumItemProcessTypes } from '../../../../types';

const testProps: TabsIprops = {
  changeTabStatus: jest.fn(),
  list: [{ id: '0', title: 'Buy pencil', process: EnumItemProcessTypes.ACTIVE, isModify: false }],
  tabStatus: EnumItemProcessTypes.All,
};

const renderComponentWithRedux = (testProps: TabsIprops) => {
  return (
    <Provider store={store}>
      <Tabs {...testProps} />
    </Provider>
  );
};

describe('Test Tabs Component', () => {
  test('should render the component to match the snapshot', () => {
    const wrapper = render(renderComponentWithRedux(testProps));
    expect(wrapper).toMatchSnapshot();
  });

  test('When user click the all button, should add isClick class name', () => {
    const { getByTestId } = render(renderComponentWithRedux({ ...testProps, tabStatus: EnumItemProcessTypes.All }));
    const allButton = getByTestId(/tabs-all-btn/);

    fireEvent.click(allButton);
    expect(testProps.changeTabStatus).toHaveBeenCalled();
    expect(allButton).toHaveClass('tabs-button isClick');
  });

  test('When user click the active button, should add isClick class name', () => {
    const { getByTestId } = render(renderComponentWithRedux({ ...testProps, tabStatus: EnumItemProcessTypes.ACTIVE }));
    const activeButton = getByTestId(/tabs-active-btn/);

    fireEvent.click(activeButton);
    expect(testProps.changeTabStatus).toHaveBeenCalled();
    expect(activeButton).toHaveClass('tabs-button isClick');
  });

  test('When user click the done button, should add isClick class name', () => {
    const { getByTestId } = render(renderComponentWithRedux({ ...testProps, tabStatus: EnumItemProcessTypes.DONE }));
    const doneButton = getByTestId(/tabs-done-btn/);

    fireEvent.click(doneButton);
    expect(testProps.changeTabStatus).toHaveBeenCalled();
    expect(doneButton).toHaveClass('tabs-button isClick');
  });
});
