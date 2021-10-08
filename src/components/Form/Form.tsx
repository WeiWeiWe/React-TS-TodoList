import React from 'react';
import { FormStyle } from './FormStyle';
import { Reader, AddCircleSharp } from 'react-ionicons';

interface Iprops {
  inputValue: string;
  changeInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addTodoList: () => void;
  keyUpTodoList: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export function Form({ inputValue, changeInputValue, addTodoList, keyUpTodoList }: Iprops) {
  return (
    <FormStyle>
      <div className="global-block-fields form-fields">
        <i className="from-todo-icon">
          <Reader color={'rgb(50, 197, 250)'} width="35px" height="30px" />
        </i>
        <input
          type="text"
          className="from-input"
          placeholder="Enter your next task"
          value={inputValue}
          onChange={changeInputValue}
          onKeyUp={keyUpTodoList}
        />
        <i className="from-add-icon" onClick={addTodoList}>
          <AddCircleSharp cssClasses="add-btn" color={'rgba(50, 197, 250)'} width="30px" height="30px" />
        </i>
      </div>
    </FormStyle>
  );
}
