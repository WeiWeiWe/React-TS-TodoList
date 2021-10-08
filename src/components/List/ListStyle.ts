import styled from 'styled-components';

export const ListStyle = styled.section`
  height: 300px;
  background: rgba(50, 197, 250);

  .list-fields {
    max-height: 290px;
    overflow: auto;

    .list-item {
      display: flex;
      align-items: center;
      padding-top: 7px;
      background: #fff;
      border-bottom: 1px solid #bbb;

      .list-item-check-box {
        flex: 0 0 25px;
        height: 25px;
        margin: 2px 0 0 10px;
        border: 1px solid #bbb;
        cursor: pointer;

        .check-box-btn {
          z-index: 1;
          display: none;
          cursor: pointer;
        }
        .check-box-btn.done {
          display: block;
        }
      }

      .list-item-input {
        flex: 1;
        margin-left: 15px;
        color: #000;
        font-size: 18px;
        background: #fff;
        border: none;
        outline: none;
      }
      .list-item-input.done {
        color: rgba(255, 0, 0, 0.9);
        text-decoration: line-through;
      }

      .list-item-modify-icon {
        flex: 0 0 25px;
        cursor: pointer;

        &:hover {
          .modify-btn {
            color: rgba(50, 197, 250, 0.5);
          }
        }

        .modify-btn.isClick {
          color: rgba(50, 197, 250, 0.5);
        }
      }

      .list-item-delete-icon {
        flex: 0 0 25px;
        cursor: pointer;

        &:hover {
          .delete-btn {
            color: rgba(255, 0, 0, 0.5);
          }
        }
      }
    }
    .list-item.prompt-tag {
      align-items: center;
      justify-content: center;

      h3 {
        color: rgba(50, 197, 250, 0.7);
        font-size: 24px;
      }
    }
  }
`;
