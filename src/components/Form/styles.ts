import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background-color: #49525b;
  color: #d7d7d7;
  @media only screen and (max-width: 1300px) {
    & {
      padding: 20px 10vw;
    }
  }
`;

export const Label = styled.label`
  color: #d7d7d7;
`;
