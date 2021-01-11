import styled from "styled-components";

export const Container = styled.span`
  background-color: #49525b;
  padding: 3px;
  margin: 0 3px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  color: #d7d7d7;
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;
export const Spacer = styled.div`
  width: 2px;
  border-radius: 30px;
  height: 16px;
  background-color: #5a636b;
  margin: 5px;
`;
