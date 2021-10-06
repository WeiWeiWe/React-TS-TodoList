import React from 'react';
import styled from 'styled-components';
import { Reader, AddCircleSharp } from 'react-ionicons';

const SearchStyle = styled.section`
  .search-fields {
    display: flex;
    input {
      flex: 1;
      font-size: 18px;
      border: none;
      outline: none;
    }
    i {
      flex: 0 0 25px;
      padding: 9px;

      .add-btn {
        cursor: pointer;
      }
    }
  }
`;

interface Iprops {
  inputValue: string;
  changeInputValue: (value: string) => void;
  addTodoList: () => void;
}

function Header({ inputValue, changeInputValue, addTodoList }: Iprops) {
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

export default Header;
