import React from "react";

import { Container, ActialPrice } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      Coin Wallet
      <ActialPrice>
        <span>btc</span> <span>eth</span> <span>ada</span>
      </ActialPrice>
    </Container>
  );
};

export default Header;
