import styled from 'styled-components';

export const TabsStyle = styled.section`
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
