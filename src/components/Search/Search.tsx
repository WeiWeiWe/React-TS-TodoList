import React from 'react';
import { SearchStyle } from './SearchStyle';
import { Reader, AddCircleSharp } from 'react-ionicons';

interface Iprops {
  inputValue: string;
  changeInputValue: (value: string) => void;
  addTodoList: () => void;
  keyUpTodoList: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export function Search({ inputValue, changeInputValue, addTodoList, keyUpTodoList }: Iprops) {
  return (
    <SearchStyle className="section-fields">
      <div className="search-fields">
        <i>
          <Reader color={'rgb(50, 197, 250)'} width="35px" height="30px" />
        </i>
        <input
          type="text"
          placeholder="Enter your next task"
          value={inputValue}
          onKeyUp={keyUpTodoList}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeInputValue(e.target.value)}
        />
        <i>
          <AddCircleSharp
            cssClasses="add-btn"
            color={'rgba(50, 197, 250)'}
            width="30px"
            height="30px"
            onClick={addTodoList}
          />
        </i>
      </div>
    </SearchStyle>
  );
}
