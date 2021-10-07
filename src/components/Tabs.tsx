import React from 'react';
import styled from 'styled-components';
import { EnumItemProcessTypes, ItemTypes } from '../types';

const TabsStyle = styled.section`
  border-bottom: 1px solid #bbb;
  .tab-fields {
    display: flex;
    justify-content: flex-end;
    height: 100%;
    button {
      display: flex;
      align-items: center;
      margin: 10px;
      padding: 10px;
      background: #fff;
      border: none;
      cursor: pointer;

      &:hover {
        background: rgba(50, 197, 250, 0.2);
      }
      h2 {
        color: rgb(50, 197, 250);
        font-weight: bold;
        font-size: 18px;
      }
    }
    .isClick {
      background: rgb(50, 197, 250, 0.5);

      h2 {
        color: #fff;
      }
    }
  }
`;

interface Iprops {
  changeTabStatus: (e: React.MouseEvent<HTMLButtonElement>) => void;
  list: ItemTypes[];
  tabStatus: EnumItemProcessTypes;
}

function Tabs({ changeTabStatus, list, tabStatus }: Iprops) {
  return (
    <TabsStyle className="section-fields">
      <nav className="tab-fields">
        <button
          className={list?.length > 0 ? (tabStatus === EnumItemProcessTypes.ACTIVE ? 'isClick' : '') : ''}
          value={EnumItemProcessTypes.ACTIVE}
          onClick={changeTabStatus}
        >
          <h2>ACTIVE</h2>
        </button>
        <button
          className={list?.length > 0 ? (tabStatus === EnumItemProcessTypes.DONE ? 'isClick' : '') : ''}
          value={EnumItemProcessTypes.DONE}
          onClick={changeTabStatus}
        >
          <h2>DONE</h2>
        </button>
        <button
          className={list?.length > 0 ? (tabStatus === EnumItemProcessTypes.All ? 'isClick' : '') : ''}
          value={EnumItemProcessTypes.All}
          onClick={changeTabStatus}
        >
          <h2>ALL</h2>
        </button>
      </nav>
    </TabsStyle>
  );
}

export default Tabs;
