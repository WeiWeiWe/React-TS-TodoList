import React from 'react';
import { TabsStyle } from './TabStyle';
import { EnumItemProcessTypes, ItemTypes } from '../../types';

interface Iprops {
  changeTabStatus: (e: React.MouseEvent<HTMLButtonElement>) => void;
  list: ItemTypes[];
  tabStatus: EnumItemProcessTypes;
}

export function Tabs({ changeTabStatus, list, tabStatus }: Iprops) {
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
