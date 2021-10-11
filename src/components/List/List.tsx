import React from 'react';
import { ListStyle } from './ListStyle';
import { Checkmark, PencilOutline, CloseOutline } from 'react-ionicons';
import { ItemTypes, InputArrayRefType, EnumItemProcessTypes } from '../../types';

export interface ListIprops {
  list: ItemTypes[];
  deleteTodoList: (item: ItemTypes) => void;
  switchModifyStatus: (item: ItemTypes) => void;
  InputBlur: (item: ItemTypes) => void;
  changeTitleInputValue: (e: React.ChangeEvent<HTMLInputElement>, item: ItemTypes) => void;
  keyUpTitleInputValueDone: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputArrayRef: { current: InputArrayRefType[] };
  changeProcessStatus: (item: ItemTypes) => void;
  tabStatus: EnumItemProcessTypes;
}

export function List({
  list,
  deleteTodoList,
  switchModifyStatus,
  InputBlur,
  changeTitleInputValue,
  inputArrayRef,
  keyUpTitleInputValueDone,
  changeProcessStatus,
  tabStatus,
}: ListIprops) {
  const filterTabList =
    list?.length > 0
      ? list.filter((item) => {
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
              <li className="global-block-fields list-item" key={item.id} data-testid="list-item">
                <span
                  className="list-item-check-box"
                  onClick={() => changeProcessStatus(item)}
                  data-testid="list-item-check-box"
                >
                  <Checkmark
                    cssClasses={item.process === EnumItemProcessTypes.DONE ? 'check-box-btn done' : 'check-box-btn'}
                    color={'rgb(50, 197, 250)'}
                  />
                </span>
                <input
                  className={item.process === EnumItemProcessTypes.DONE ? 'list-item-input done' : 'list-item-input'}
                  data-testid="list-item-input"
                  disabled
                  type="text"
                  value={item.title}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeTitleInputValue(e, item)}
                  onKeyUp={keyUpTitleInputValueDone}
                  onBlur={() => InputBlur(item)}
                  ref={(element) => {
                    if (element) {
                      inputArrayRef.current[index] = {
                        id: item.id,
                        element,
                      };
                    }
                  }}
                />
                <i className="list-item-modify-icon" onClick={() => switchModifyStatus(item)} data-testid="modify-btn">
                  <PencilOutline
                    cssClasses={item.isModify ? 'modify-btn isClick' : 'modify-btn'}
                    color={'rgb(50, 197, 250)'}
                    width="35px"
                    height="30px"
                  />
                </i>
                <i className="list-item-delete-icon" onClick={() => deleteTodoList(item)} data-testid="delete-btn">
                  <CloseOutline cssClasses="delete-btn" color={'rgba(255, 0, 0, 0.9)'} width="35px" height="30px" />
                </i>
              </li>
            );
          })
        ) : (
          <li className="global-block-fields list-item prompt-tag" data-testid="prompt-tag">
            {promptTag()}
          </li>
        )}
      </ul>
    </ListStyle>
  );
}
