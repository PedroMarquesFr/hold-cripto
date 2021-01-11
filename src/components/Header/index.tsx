import React from "react";
import CoinStatus from "../CoinStatus";
import Logo from "../../assets/images/LogoHoldCripto.svg"

import { Container, ActialPrice } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="Hold Cripto" height="56"/>
      <ActialPrice>
        <CoinStatus coinSymbol="BTC"/>
        <CoinStatus coinSymbol="ETH"/>
        <CoinStatus coinSymbol="ADA"/>
        <CoinStatus coinSymbol="LTC"/>
        <CoinStatus coinSymbol="DOT"/>
        <CoinStatus coinSymbol="XRP"/>
      </ActialPrice>
    </Container>
  );
};

export default Header;
