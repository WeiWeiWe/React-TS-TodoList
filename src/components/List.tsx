import React from 'react';
import styled from 'styled-components';
import { Checkmark, PencilOutline, CloseOutline } from 'react-ionicons';

const ListStyle = styled.section`
  border-bottom: 1px solid #bbb;
  .list-fields {
    .list-item {
      display: flex;
      padding-top: 7px;
      .check-box {
        flex: 0 0 25px;
        height: 25px;
        margin: 2px 0 0 10px;
        border: 1px solid #bbb;

        .check-btn {
          display: none;
          cursor: pointer;
        }
        &:hover {
          .check-btn {
            display: block;
            color: rgba(50, 197, 250, 0.5);
          }
        }
      }
      input {
        flex: 1;
        margin-left: 15px;
        font-size: 18px;
        border: none;
        outline: none;
      }
      i {
        flex: 0 0 25px;
        cursor: pointer;
        .modify-btn {
          &:hover {
            color: rgba(50, 197, 250);
          }
        }
        .delete-btn {
          &:hover {
            color: rgba(255, 0, 0);
          }
        }
      }
    }
  }

  button {
    margin-left: 5px;
  }
`;

function List() {
  return (
    <ListStyle className="section-fields">
      <ul className="list-fields">
        <li className="list-item">
          <span className="check-box">
            <Checkmark cssClasses="check-btn" color={'rgba(50, 197, 250)'} />
          </span>
          <input type="text" />
          <i>
            <PencilOutline cssClasses="modify-btn" color={'rgba(50, 197, 250, 0.5)'} width="35px" height="30px" />
          </i>
          <i>
            <CloseOutline cssClasses="delete-btn" color={'rgba(255, 0, 0, 0.5)'} width="35px" height="30px" />
          </i>
        </li>
      </ul>
    </ListStyle>
  );
}

export default List;
