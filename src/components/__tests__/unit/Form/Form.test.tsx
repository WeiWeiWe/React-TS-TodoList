import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import store from '../../../../store/createStore';
import { Form, FormIprops } from '../../../../components/Form/Form';

const testProps: FormIprops = {
  inputValue: '',
  changeInputValue: jest.fn(),
  addTodoList: jest.fn(),
  keyUpTodoList: jest.fn(),
};

const renderComponentWithRedux = () => {
  return (
    <Provider store={store}>
      <Form {...testProps} />
    </Provider>
  );
};

describe('Test Form Component', () => {
  test('should render the component to match the snapshot', () => {
    const wrapper = render(renderComponentWithRedux());
    expect(wrapper).toMatchSnapshot();
  });

  test('render the component should contains input element and add button', () => {
    const { getByTestId } = render(renderComponentWithRedux());
    const inputElem = getByTestId(/form-input/) as HTMLInputElement;
    const addButton = getByTestId(/add-btn/) as HTMLButtonElement;
    expect(inputElem).toBeInTheDocument;
    expect(addButton).toBeInTheDocument;
  });

  test('should input element value is empty initially', () => {
    const { getByTestId } = render(renderComponentWithRedux());
    const inputElem = getByTestId(/form-input/) as HTMLInputElement;
    expect(inputElem.value).toBe('');
  });

  test('When user input, should trigger the changeInputValue function', () => {
    const { getByTestId } = render(renderComponentWithRedux());
    const inputElem = getByTestId(/form-input/) as HTMLInputElement;
    const userInput = 'Buy pencil';

    fireEvent.change(inputElem, { target: { value: userInput } });

    expect(testProps.changeInputValue).toHaveBeenCalled();
  });

  test('When user key up the enter keyboard, should trigger the keyUpTodoList function', () => {
    const { getByTestId } = render(renderComponentWithRedux());
    const inputElem = getByTestId(/form-input/) as HTMLInputElement;

    fireEvent.keyUp(inputElem, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(testProps.keyUpTodoList).toHaveBeenCalled();
  });

  test('When user click the add button, should trigger the addTodoList function', () => {
    const { getByTestId } = render(renderComponentWithRedux());
    const addButton = getByTestId(/add-btn/) as HTMLButtonElement;

    fireEvent.click(addButton);

    expect(testProps.addTodoList).toHaveBeenCalled();
  });
});
