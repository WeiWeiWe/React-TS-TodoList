import styled from 'styled-components';

export const ListStyle = styled.section`
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

        .check-btn.done {
          display: block;
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
      .line-through {
        text-decoration: line-through;
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
