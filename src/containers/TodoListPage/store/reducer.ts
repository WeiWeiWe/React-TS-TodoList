import * as constants from './constants';
import * as actionCreators from './actionCreators';
import { ItemTypes } from '../../../types';

export interface defaultStateTypes {
  inputValue: string;
  list: ItemTypes[];
}

const defaultState: defaultStateTypes = {
  inputValue: '',
  list: [],
};

export default (state = defaultState, action: actionCreators.TodoListActionTypes) => {
  switch (action.type) {
    case constants.CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.value,
      };
    case constants.ADD_TODO_LIST:
      return {
        ...state,
        inputValue: '',
        list: [...state.list, action.item],
      };
    case constants.DELETE_TODO_LIST:
      const newList = state.list.filter((item, index) => index !== action.index);
      return {
        ...state,
        list: newList,
      };
    default:
      return state;
  }
};
