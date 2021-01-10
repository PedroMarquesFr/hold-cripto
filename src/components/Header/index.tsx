import React from "react";
import CoinStatus from "../CoinStatus";

import { Container, ActialPrice } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      Coin Wallet
      <ActialPrice>
        <CoinStatus coinSymbol="BTC"/>
        <CoinStatus coinSymbol="ETH"/>
        <CoinStatus coinSymbol="ADA"/>
        <CoinStatus coinSymbol="LTC "/>
        <CoinStatus coinSymbol="DOT"/>
        <CoinStatus coinSymbol="XRP"/>
      </ActialPrice>
    </Container>
  );
};

export default Header;
