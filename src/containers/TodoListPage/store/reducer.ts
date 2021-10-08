import * as constants from './constants';
import * as actionCreators from './actionCreators';
import { ItemTypes, EnumItemProcessTypes } from '../../../types';

export interface defaultStateTypes {
  inputValue: string;
  list: ItemTypes[];
  tabStatus: EnumItemProcessTypes;
}

const defaultState: defaultStateTypes = {
  inputValue: '',
  list: [],
  tabStatus: EnumItemProcessTypes.All,
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
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.id),
      };
    case constants.SWITCH_MODIFY_STATUS:
      return {
        ...state,
        list: state.list.map((item) => (item.id === action.id ? { ...item, isModify: action.status } : item)),
      };
    case constants.CHANGE_LIST_ITEM_TITLE_VALUE:
      return {
        ...state,
        list: state.list.map((item) => (item.id === action.id ? { ...item, title: action.value } : item)),
      };
    case constants.CHANGE_PROCESS_STATUS:
      return {
        ...state,
        list: state.list.map((item) => (item.id === action.id ? { ...item, process: action.process } : item)),
      };
    case constants.CHANGE_TAB_STATUS:
      return {
        ...state,
        tabStatus: action.status,
      };
    default:
      return state;
  }
};
