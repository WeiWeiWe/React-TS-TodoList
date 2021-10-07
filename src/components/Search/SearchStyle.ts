import styled from 'styled-components';

export const SearchStyle = styled.section`
  .search-fields {
    display: flex;
    input {
      flex: 1;
      font-size: 18px;
      border: none;
      outline: none;
    }
    i {
      flex: 0 0 25px;
      padding: 9px;

      .add-btn {
        cursor: pointer;
      }
    }
  }
`;
