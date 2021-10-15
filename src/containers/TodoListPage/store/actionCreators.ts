import * as constants from './constants';
import { ItemTypes, EnumItemProcessTypes } from '../../../types';

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
  id: string;
}

interface SwitchModifyStatusAction {
  type: typeof constants.SWITCH_MODIFY_STATUS;
  status: boolean;
  id: string;
}

interface ChangeListItemTitleValueAction {
  type: typeof constants.CHANGE_LIST_ITEM_TITLE_VALUE;
  value: string;
  id: string;
}

interface ChangeProcessStatusAction {
  type: typeof constants.CHANGE_PROCESS_STATUS;
  process: string;
  id: string;
}

interface ChangeTabStatusAction {
  type: typeof constants.CHANGE_TAB_STATUS;
  status: EnumItemProcessTypes;
}

export type TodoListActionTypes =
  | ChangeInputValueAction
  | AddTodoListAction
  | DeleteTodoListAction
  | SwitchModifyStatusAction
  | ChangeListItemTitleValueAction
  | ChangeProcessStatusAction
  | ChangeTabStatusAction;

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

export const deleteTodoListActionCreator = (id: string): DeleteTodoListAction => {
  return {
    type: constants.DELETE_TODO_LIST,
    id,
  };
};

export const switchModifyStatusActionCreator = (status: boolean, id: string): SwitchModifyStatusAction => {
  return {
    type: constants.SWITCH_MODIFY_STATUS,
    status,
    id,
  };
};

export const ChangeListItemTitleValueActionCreator = (value: string, id: string): ChangeListItemTitleValueAction => {
  return {
    type: constants.CHANGE_LIST_ITEM_TITLE_VALUE,
    value,
    id,
  };
};

export const ChangeProcessStatusActionCreator = (process: string, id: string): ChangeProcessStatusAction => {
  return {
    type: constants.CHANGE_PROCESS_STATUS,
    process,
    id,
  };
};

export const ChangeTabStatusActionCreator = (status: EnumItemProcessTypes): ChangeTabStatusAction => {
  return {
    type: constants.CHANGE_TAB_STATUS,
    status,
  };
};
