import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import reducer, { defaultStateTypes } from '../../store/reducer';
import { TodoListPage } from '../../../TodoListPage/TodoListPage';
import { EnumItemProcessTypes } from '../../../../types';

const rootReducer = combineReducers({
  todo: reducer,
});

const renderComponentWithRedux = (initalState?: defaultStateTypes) => {
  const store = createStore(rootReducer, { todo: initalState });
  return (
    <Provider store={store}>
      <TodoListPage />
    </Provider>
  );
};

describe('Test TodoListPage Component', () => {
  describe('test form fields', () => {
    test('When user input value and click the add button, should push an item into list', () => {
      const { getByTestId, getAllByTestId } = render(renderComponentWithRedux());
      const inputElem = getByTestId(/form-input/) as HTMLInputElement;
      const inputValue = 'Buy pencil';
      fireEvent.change(inputElem, { target: { value: inputValue } });
      expect(inputElem.value).toBe(inputValue);

      const addButton = getByTestId(/add-btn/) as HTMLButtonElement;
      fireEvent.click(addButton);
      expect(inputElem.value).toBe('');

      const listItems = getAllByTestId('list-item');
      expect(listItems).toHaveLength(1);
    });

    test('When user input value and key up the enter keyboard, should push an item into list', () => {
      const { getByTestId, getAllByTestId } = render(renderComponentWithRedux());
      const inputElem = getByTestId(/form-input/) as HTMLInputElement;
      const inputValue = 'Buy pencil';
      fireEvent.change(inputElem, { target: { value: inputValue } });
      expect(inputElem.value).toBe(inputValue);

      fireEvent.keyUp(inputElem, { key: 'Enter', code: 'Enter', charCode: 13 });
      expect(inputElem.value).toBe('');

      const listItems = getAllByTestId('list-item');
      expect(listItems).toHaveLength(1);
    });
  });

  describe('test tabs fields', () => {
    test('When list have items, should click the All tabs button default', () => {
      const initalState = {
        inputValue: '',
        list: [{ id: '0', title: 'Buy pencil', process: EnumItemProcessTypes.ACTIVE, isModify: false }],
        tabStatus: EnumItemProcessTypes.All,
      };
      const { getByTestId } = render(renderComponentWithRedux(initalState));
      const allButton = getByTestId(/all-btn/);
      expect(allButton).toHaveClass('tabs-button isClick');
    });

    test('When list no items, should not click any tabs button', () => {
      const { getByTestId } = render(renderComponentWithRedux());

      const tabsAllButton = getByTestId(/tabs-all-btn/);
      fireEvent.click(tabsAllButton);
      expect(tabsAllButton).toHaveClass('tabs-button');

      const tabsActiveButton = getByTestId(/tabs-active-btn/);
      fireEvent.click(tabsActiveButton);
      expect(tabsActiveButton).toHaveClass('tabs-button');

      const tabsDoneButton = getByTestId(/tabs-done-btn/);
      fireEvent.click(tabsDoneButton);
      expect(tabsDoneButton).toHaveClass('tabs-button');
    });

    test('When user click other tabs button, should switch the tabs status', () => {
      const initalState = {
        inputValue: '',
        list: [{ id: '0', title: 'Buy pencil', process: EnumItemProcessTypes.ACTIVE, isModify: false }],
        tabStatus: EnumItemProcessTypes.All,
      };
      const { getByTestId } = render(renderComponentWithRedux(initalState));

      const tabsActiveButton = getByTestId(/tabs-active-btn/);
      fireEvent.click(tabsActiveButton);
      expect(tabsActiveButton).toHaveClass('tabs-button isClick');

      const tabsDoneButton = getByTestId(/tabs-done-btn/);
      fireEvent.click(tabsDoneButton);
      expect(tabsDoneButton).toHaveClass('tabs-button isClick');
    });
  });

  describe('test list item fields', () => {
    test('When user click the delete button, the current item should be deleted', () => {
      const initalState = {
        inputValue: '',
        list: [
          { id: '0', title: 'Buy pencil', process: EnumItemProcessTypes.ACTIVE, isModify: false },
          { id: '1', title: 'Buy apple', process: EnumItemProcessTypes.ACTIVE, isModify: false },
        ],
        tabStatus: EnumItemProcessTypes.All,
      };
      const { getAllByTestId } = render(renderComponentWithRedux(initalState));
      const deleteButtons = getAllByTestId('delete-btn');
      const listItems = getAllByTestId('list-item');
      expect(listItems.length).toBe(2);

      fireEvent.click(deleteButtons[0]);
      const newlistItems = getAllByTestId('list-item');
      expect(newlistItems.length).toBe(1);
    });

    test('When user click the modify button, the current item input element should not be disabled and user can input value', () => {
      const initalState = {
        inputValue: '',
        list: [{ id: '0', title: 'Buy pencil', process: EnumItemProcessTypes.ACTIVE, isModify: false }],
        tabStatus: EnumItemProcessTypes.All,
      };
      const { getAllByTestId } = render(renderComponentWithRedux(initalState));
      const modifyButtons = getAllByTestId('modify-btn');
      const listItems = getAllByTestId('list-item');
      const itemInputElem = listItems[0].children[1] as HTMLInputElement;

      fireEvent.click(modifyButtons[0]);
      expect(itemInputElem).not.toBeDisabled();

      const modifyInputValue = 'Buy apple';
      fireEvent.change(itemInputElem, { target: { value: modifyInputValue } });
      expect(itemInputElem.value).toBe(modifyInputValue);

      fireEvent.keyUp(itemInputElem, { key: 'Enter', code: 'Enter', charCode: 13 });
      expect(itemInputElem).toBeDisabled();
    });

    test('When user blur the input element, the current item input element should be disabled and user can not input value', () => {
      const initalState = {
        inputValue: '',
        list: [{ id: '0', title: 'Buy pencil', process: EnumItemProcessTypes.ACTIVE, isModify: false }],
        tabStatus: EnumItemProcessTypes.All,
      };
      const { getAllByTestId } = render(renderComponentWithRedux(initalState));
      const modifyButtons = getAllByTestId('modify-btn');
      const listItems = getAllByTestId('list-item');
      const itemInputElem = listItems[0].children[1] as HTMLInputElement;

      fireEvent.click(modifyButtons[0]);
      expect(itemInputElem).not.toBeDisabled();

      const modifyInputValue = 'Buy apple';
      fireEvent.change(itemInputElem, { target: { value: modifyInputValue } });
      expect(itemInputElem.value).toBe(modifyInputValue);

      fireEvent.blur(itemInputElem);
      expect(itemInputElem).toBeDisabled();
    });

    test('When user click the check box, the current item should switch the process status', () => {
      const initalState = {
        inputValue: '',
        list: [{ id: '0', title: 'Buy pencil', process: EnumItemProcessTypes.ACTIVE, isModify: false }],
        tabStatus: EnumItemProcessTypes.All,
      };
      const { getAllByTestId, container } = render(renderComponentWithRedux(initalState));
      const checkBoxElem = getAllByTestId('list-item-check-box');
      const checkBoxBtn = container.querySelectorAll('.check-box-btn');

      fireEvent.click(checkBoxElem[0]);
      expect(checkBoxBtn[0]).toHaveClass('check-box-btn done');

      fireEvent.click(checkBoxElem[0]);
      expect(checkBoxBtn[0]).toHaveClass('check-box-btn');
    });
  });
});
