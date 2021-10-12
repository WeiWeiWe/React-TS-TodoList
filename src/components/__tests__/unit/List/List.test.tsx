import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import store from '../../../../store/createStore';
import { List, ListIprops } from '../../../../components/List/List';
import { EnumItemProcessTypes } from '../../../../types';

const testProps: ListIprops = {
  list: [{ id: '0', title: 'Buy pencil', process: EnumItemProcessTypes.ACTIVE, isModify: false }],
  deleteTodoList: jest.fn(),
  switchModifyStatus: jest.fn(),
  InputBlur: jest.fn(),
  changeTitleInputValue: jest.fn(),
  keyUpTitleInputValueDone: jest.fn(),
  inputArrayRef: { current: [{ id: '0', element: document.createElement('input') }] },
  changeProcessStatus: jest.fn(),
  tabStatus: EnumItemProcessTypes.All,
};

const renderComponentWithRedux = (testProps: ListIprops) => {
  return (
    <Provider store={store}>
      <List {...testProps} />
    </Provider>
  );
};

describe('Test List Component', () => {
  test('should render the component to match the snapshot', () => {
    const wrapper = render(renderComponentWithRedux(testProps));
    expect(wrapper).toMatchSnapshot();
  });

  test('should dispaly the prompt tag, if there is no list items', () => {
    const { getByTestId } = render(renderComponentWithRedux({ ...testProps, list: [] }));
    const promptTag = getByTestId(/prompt-tag/) as HTMLLIElement;

    expect(promptTag.innerHTML).toBe('<h3>No Items</h3>');
  });

  test('should dispaly the prompt tag, if there is no active list items', () => {
    const { getByTestId } = render(
      renderComponentWithRedux({
        ...testProps,
        list: [{ id: '0', title: 'Buy pencil', process: EnumItemProcessTypes.DONE, isModify: false }],
        tabStatus: EnumItemProcessTypes.ACTIVE,
      }),
    );
    const promptTag = getByTestId(/prompt-tag/) as HTMLLIElement;

    expect(promptTag.innerHTML).toBe('<h3>No Active Items</h3>');
  });

  test('should dispaly the prompt tag, if there is no done list items', () => {
    const { getByTestId } = render(
      renderComponentWithRedux({
        ...testProps,
        list: [{ id: '0', title: 'Buy pencil', process: EnumItemProcessTypes.ACTIVE, isModify: false }],
        tabStatus: EnumItemProcessTypes.DONE,
      }),
    );
    const promptTag = getByTestId(/prompt-tag/) as HTMLLIElement;

    expect(promptTag.innerHTML).toBe('<h3>No Done Items</h3>');
  });

  test('When user click the delete button, should trigger the deleteTodoList function', () => {
    const { getByTestId } = render(renderComponentWithRedux(testProps));
    const deleteButton = getByTestId(/delete-btn/) as HTMLElement;

    fireEvent.click(deleteButton);
    expect(testProps.deleteTodoList).toHaveBeenCalled();
  });

  test('When user click the modify button, should trigger the switchModifyStatus function', () => {
    const { getByTestId } = render(renderComponentWithRedux(testProps));
    const modifyButton = getByTestId(/modify-btn/) as HTMLElement;

    fireEvent.click(modifyButton);
    expect(testProps.switchModifyStatus).toHaveBeenCalled();
  });

  test('When user modify the input value, should trigger the changeTitleInputValue function', () => {
    const { getByTestId } = render(renderComponentWithRedux(testProps));
    const inputElem = getByTestId(/list-item-input/) as HTMLInputElement;
    const inputValue = 'Buy Pencil';

    fireEvent.change(inputElem, { target: { value: inputValue } });
    expect(testProps.changeTitleInputValue).toHaveBeenCalled();
  });

  test('When user key up the enter keyboard, should trigger the keyUpTitleInputValueDone function', () => {
    const { getByTestId } = render(renderComponentWithRedux(testProps));
    const inputElem = getByTestId(/list-item-input/) as HTMLInputElement;

    fireEvent.keyUp(inputElem, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(testProps.keyUpTitleInputValueDone).toHaveBeenCalled();
  });

  test('When user blur the input element, should trigger the InputBlur function', () => {
    const { getByTestId } = render(renderComponentWithRedux(testProps));
    const inputElem = getByTestId(/list-item-input/) as HTMLInputElement;

    fireEvent.blur(inputElem);

    expect(testProps.InputBlur).toHaveBeenCalled();
  });

  test('When user click the check box, should trigger the changeProcessStatus function', () => {
    const { getByTestId } = render(renderComponentWithRedux(testProps));
    const checkBox = getByTestId(/list-item-check-box/) as HTMLSpanElement;

    fireEvent.click(checkBox);

    expect(testProps.changeProcessStatus).toHaveBeenCalled();
  });
});
