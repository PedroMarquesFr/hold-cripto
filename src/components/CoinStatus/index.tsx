import React, { useState, useContext, memo } from "react";
import MyContext from "../../ContextAPI/ContextProvider";
import getIcon from "../../services/getIcon";
import { Coin } from "../../services/global";
import noImg from '../../assets/color/.noicon.svg';

import { Container, Spacer } from "./styles";

const CoinStatus: React.FC<{ coinSymbol: string }> = ({ coinSymbol }) => {
  const [icon, seticon] = useState(noImg);
  const { coinsCurrent } = useContext(MyContext);
  let choosedCoin: Coin ;
  async function loadCoinAndIcon() {
    const resp = await getIcon(coinSymbol);
    seticon(resp);
  }

  choosedCoin = coinsCurrent.find((coin: Coin) => coin.symbol === coinSymbol);
  console.log("sadsada: ",choosedCoin);
  loadCoinAndIcon();

  return (
    <Container>
      {choosedCoin && <img src={icon} alt="icon" width="25"/>}
      <span className="ml-2">{choosedCoin && choosedCoin.quote.USD.price.toFixed(2)}</span>
      <Spacer/>
      <span className="mr-2">{choosedCoin && choosedCoin.quote.USD.percent_change_7d.toFixed(2)}%</span>
    </Container>
  );
};

export default memo(CoinStatus);
