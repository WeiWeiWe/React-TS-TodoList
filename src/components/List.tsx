import React from 'react';
import styled from 'styled-components';
import { Checkmark, PencilOutline, CloseOutline } from 'react-ionicons';
import { ItemTypes } from '../types';

const ListStyle = styled.section`
  height: 500px;
  background: rgba(50, 197, 250);
  .list-fields {
    max-height: 500px;
    overflow: auto;
    .list-item {
      display: flex;
      align-items: center;
      padding-top: 7px;
      background: #fff;
      border-bottom: 1px solid #bbb;
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
    .list-item.no-item {
      align-items: center;
      justify-content: center;
      h3 {
        color: rgba(50, 197, 250, 0.7);
        font-size: 24px;
      }
    }
  }
`;

interface Iprops {
  list: ItemTypes[];
}

function List({ list }: Iprops) {
  return (
    <ListStyle>
      <ul className="list-fields">
        {list?.length > 0 ? (
          list.map((item) => {
            return (
              <li className="section-fields list-item" key={item.id}>
                <span className="check-box">
                  <Checkmark cssClasses="check-btn" color={'rgba(50, 197, 250)'} />
                </span>
                <input type="text" value={item.title} />
                <i>
                  <PencilOutline cssClasses="modify-btn" color={'rgba(50, 197, 250, 0.5)'} width="35px" height="30px" />
                </i>
                <i>
                  <CloseOutline cssClasses="delete-btn" color={'rgba(255, 0, 0, 0.5)'} width="35px" height="30px" />
                </i>
              </li>
            );
          })
        ) : (
          <li className="section-fields list-item no-item">
            <h3>No Items</h3>
          </li>
        )}
      </ul>
    </ListStyle>
  );
}

export default List;
