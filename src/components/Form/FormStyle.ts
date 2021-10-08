import styled from 'styled-components';

export const FormStyle = styled.section`
  .form-fields {
    display: flex;

    .from-input {
      flex: 1;
      font-size: 18px;
      border: none;
      outline: none;
    }

    .from-todo-icon {
      flex: 0 0 25px;
      padding: 9px;
    }

    .from-add-icon {
      flex: 0 0 25px;
      padding: 9px;
      cursor: pointer;
    }
  }
`;
