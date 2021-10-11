import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../../../../store/createStore';
import { Logo } from '../../../../components/Logo/Logo';

const renderComponentWithRedux = () => {
  return (
    <Provider store={store}>
      <Logo />
    </Provider>
  );
};

describe('Test Logo Component', () => {
  test('should render the component to match the snapshot', () => {
    const wrapper = render(renderComponentWithRedux());
    expect(wrapper).toMatchSnapshot();
  });
});
