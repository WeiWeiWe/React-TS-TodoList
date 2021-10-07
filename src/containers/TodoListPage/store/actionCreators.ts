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

interface DeleteTodoListAction {
  type: typeof constants.DELETE_TODO_LIST;
  index: number;
}

interface ChangeListItemTitleValueAction {
  type: typeof constants.CHANGE_LIST_ITEM_TITLE_VALUE;
  value: string;
  id: string;
}

export type TodoListActionTypes =
  | ChangeInputValueAction
  | AddTodoListAction
  | DeleteTodoListAction
  | ChangeListItemTitleValueAction;

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

export const deleteTodoListActionCreator = (index: number): DeleteTodoListAction => {
  return {
    type: constants.DELETE_TODO_LIST,
    index,
  };
};

export const ChangeListItemTitleValueActionCreator = (value: string, id: string): ChangeListItemTitleValueAction => {
  return {
    type: constants.CHANGE_LIST_ITEM_TITLE_VALUE,
    value,
    id,
  };
};
