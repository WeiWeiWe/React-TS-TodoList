import React from 'react';
import { ListStyle } from './ListStyle';
import { Checkmark, PencilOutline, CloseOutline } from 'react-ionicons';
import { ItemTypes, InputArrayRefType, EnumItemProcessTypes } from '../../types';

interface Iprops {
  list: ItemTypes[];
  deleteTodoList: (index: number, id: string) => void;
  switchModifyStatus: (id: string) => void;
  changeTitleInputValue: (value: string, id: string) => void;
  keyUpTitleInputValueDone: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputArrayRef: { current: InputArrayRefType[] };
  InputBlur: () => void;
  changeProcessStatus: (item: ItemTypes) => void;
  tabStatus: EnumItemProcessTypes;
}

export function List({
  list,
  deleteTodoList,
  switchModifyStatus,
  changeTitleInputValue,
  inputArrayRef,
  keyUpTitleInputValueDone,
  InputBlur,
  changeProcessStatus,
  tabStatus,
}: Iprops) {
  const filterTabList =
    list?.length > 0
      ? list.filter((item) => {
          console.log(item);
          if (tabStatus === EnumItemProcessTypes.All) {
            return item;
          } else {
            return item.process === tabStatus;
          }
        })
      : [];

  const promptTag = () => {
    if (list?.length > 0) {
      if (tabStatus === EnumItemProcessTypes.DONE) {
        return <h3>No Done Items</h3>;
      } else if (tabStatus === EnumItemProcessTypes.ACTIVE) {
        return <h3>No Active Items</h3>;
      } else {
        return <h3>No Items</h3>;
      }
    } else {
      return <h3>No Items</h3>;
    }
  };

  return (
    <ListStyle>
      <ul className="list-fields">
        {filterTabList?.length > 0 ? (
          filterTabList.map((item, index) => {
            return (
              <li className="section-fields list-item" key={item.id}>
                <span className="check-box">
                  <Checkmark
                    cssClasses={item.process === EnumItemProcessTypes.DONE ? 'check-btn done' : 'check-btn'}
                    color={'rgba(50, 197, 250)'}
                    onClick={() => changeProcessStatus(item)}
                  />
                </span>
                <input
                  className={item.process === EnumItemProcessTypes.DONE ? 'line-through' : ''}
                  disabled
                  type="text"
                  value={item.title}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeTitleInputValue(e.target.value, item.id)}
                  onKeyUp={keyUpTitleInputValueDone}
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
          <li className="section-fields list-item no-item">{promptTag()}</li>
        )}
      </ul>
    </ListStyle>
  );
}
