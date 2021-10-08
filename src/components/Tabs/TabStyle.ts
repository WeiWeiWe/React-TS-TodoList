import styled from 'styled-components';

export const TabsStyle = styled.section`
  border-bottom: 1px solid #bbb;

  .tabs-fields {
    display: flex;
    justify-content: flex-end;

    .tabs-button {
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

    .tabs-button.isClick {
      background: rgba(50, 197, 250, 0.5);

      h2 {
        color: #fff;
      }
    }
  }

  @media screen and (max-width: 576px) {
    .tabs-fields {
      justify-content: space-around;
    }
  }
`;
