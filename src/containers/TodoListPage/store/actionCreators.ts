import * as constants from './constants';
import { ItemTypes } from '../../../types';

interface ChangeInputValueAction {
  type: typeof constants.CHANGE_INPUT_VALUE;
  value: string;
}

interface AddTodoListAction {
  type: typeof constants.ADD_TODO_LIST;
  item: ItemTypes;
}

export type TodoListActionTypes = ChangeInputValueAction | AddTodoListAction;

export const changeInputValueActionCreator = (value: string): ChangeInputValueAction => {
  return {
    type: constants.CHANGE_INPUT_VALUE,
    value,
  };
};

export const addTodoListActionCreator = (item: ItemTypes): AddTodoListAction => {
  return {
    type: constants.ADD_TODO_LIST,
    item,
  };
};
