import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding:14px 18px;
  background-color:#343A40;
  color:white;
  @media only screen and (max-width: 1200px) {
    justify-content: center;
  }
`;

export const ActialPrice = styled.div`
  display:flex;
  justify-content:space-between;
`;