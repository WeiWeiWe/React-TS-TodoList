import React from 'react';
import styled from 'styled-components';
import { Checkmark, PencilOutline, CloseOutline } from 'react-ionicons';
import { ItemTypes, InputArrayRefType } from '../types';

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
        color: #000;
        font-size: 18px;
        background: #fff;
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
  deleteTodoList: (index: number, id: string) => void;
  switchModifyStatus: (id: string) => void;
  changeTitleInputValue: (value: string, id: string) => void;
  inputArrayRef: { current: InputArrayRefType[] };
  InputBlur: () => void;
}

function List({ list, deleteTodoList, switchModifyStatus, changeTitleInputValue, inputArrayRef, InputBlur }: Iprops) {
  return (
    <ListStyle>
      <ul className="list-fields">
        {list?.length > 0 ? (
          list.map((item, index) => {
            return (
              <li className="section-fields list-item" key={item.id}>
                <span className="check-box">
                  <Checkmark cssClasses="check-btn" color={'rgba(50, 197, 250)'} />
                </span>
                <input
                  type="text"
                  value={item.title}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeTitleInputValue(e.target.value, item.id)}
                  onBlur={InputBlur}
                  ref={(element) => {
                    if (element) {
                      inputArrayRef.current[index] = {
                        id: item.id,
                        element,
                      };
                    }
                  }}
                />
                <i>
                  <PencilOutline
                    cssClasses="modify-btn"
                    color={'rgba(50, 197, 250, 0.5)'}
                    width="35px"
                    height="30px"
                    onClick={() => switchModifyStatus(item.id)}
                  />
                </i>
                <i>
                  <CloseOutline
                    cssClasses="delete-btn"
                    color={'rgba(255, 0, 0, 0.5)'}
                    width="35px"
                    height="30px"
                    onClick={() => deleteTodoList(index, item.id)}
                  />
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
