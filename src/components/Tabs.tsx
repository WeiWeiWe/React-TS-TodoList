import React from 'react';
import styled from 'styled-components';

const TabsStyle = styled.section`
  border-bottom: 1px solid #bbb;
  .tab-fields {
    display: flex;
    justify-content: flex-end;
    height: 100%;
    ul {
      display: flex;
      align-items: center;

      li {
        display: flex;
        align-items: center;
        margin: 10px;
        padding: 10px;
        cursor: pointer;

        h2 {
          color: rgb(50, 197, 250);
          font-weight: bold;
        }
      }
    }
  }
`;

function Tabs() {
  return (
    <TabsStyle className="section-fields">
      <nav className="tab-fields">
        <ul>
          <li>
            <h2>ACTIVE</h2>
          </li>
          <li>
            <h2>DONE</h2>
          </li>
          <li>
            <h2>ALL</h2>
          </li>
        </ul>
      </nav>
    </TabsStyle>
  );
}

export default Tabs;
