import styled from "styled-components";

export const Form = styled.form`
  background-color: white;
  margin: 80px auto;
  padding: 64px;
  border-radius: 8px;
  max-width: 730px;

  fieldset {
    margin-top: 64px;
    border: 0;
  }

  legend h2 {
    display: flex;
    font-size: 24px;
  }

  .field {
    justify-content: center;
    display: flex;
    margin-bottom: 24px;
  }
`;
