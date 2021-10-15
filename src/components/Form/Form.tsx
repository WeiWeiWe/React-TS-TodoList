import React from 'react';
import { Reader, AddCircleSharp } from 'react-ionicons';
import { FormStyle } from './FormStyle';

export interface FormIprops {
  inputValue: string;
  changeInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addTodoList: () => void;
  keyUpTodoList: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export function Form({ inputValue, changeInputValue, addTodoList, keyUpTodoList }: FormIprops) {
  return (
    <FormStyle>
      <div className="global-block-fields form-fields">
        <i className="from-todo-icon">
          <Reader color="rgb(50, 197, 250)" width="35px" height="30px" />
        </i>
        <input
          type="text"
          className="from-input"
          placeholder="Enter your next task"
          value={inputValue}
          onChange={changeInputValue}
          onKeyUp={keyUpTodoList}
          data-testid="form-input"
        />
        <i className="from-add-icon" onClick={addTodoList} data-testid="add-btn">
          <AddCircleSharp cssClasses="add-btn" color="rgba(50, 197, 250)" width="30px" height="30px" />
        </i>
      </div>
    </FormStyle>
  );
}
