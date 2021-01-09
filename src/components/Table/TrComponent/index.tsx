import React, { useState } from "react";
import { Coin, CoinInfo } from "../../../services/global";

// import { Container } from './styles';
interface Props {
  coinInfo: CoinInfo;
  choosedCoin: Coin;
  index: number;
}

const TrComponent: React.FC<Props> = ({ coinInfo, choosedCoin, index }) => {
  const { symbol, name, amountBuyed, pricePerUnit } = coinInfo;
  const [loading, setLoading] = useState(true);
  const [icon, setIcon] = useState('');

  const getIcon = async (symbol: string) => {
    try {
      
    const { default: Icon } = await import(
      `../../../assets/color/${symbol.toLowerCase()}.svg`
    );

    setLoading(false);
    setIcon(Icon);
  } catch (error) {
    const { default: Icon } = await import(
      `../../../assets/color/.noicon.svg`
    );
    setLoading(false);
    setIcon(Icon);
  }
  };
  getIcon(symbol)
  return (
    <tr key={index}>
      {loading ? (
        <td>LAL...</td>
      ) : (
        <td>
          <img src={icon} alt="icon" width="27"/>{" "}
          {name} {symbol}
        </td>
      )}
      <td>{amountBuyed}</td>
      {choosedCoin === undefined ? (
        <td>Loading...</td>
      ) : (
        <td>
          {Math.round((pricePerUnit + Number.EPSILON) * 100) / 100} /{" "}
          {Math.round((choosedCoin.quote.USD.price + Number.EPSILON) * 100) /
            100}
        </td>
      )}
      {choosedCoin === undefined ? (
        <td>Loading...</td>
      ) : (
        <td>
          {Math.round((amountBuyed * pricePerUnit + Number.EPSILON) * 100) /
            100}{" "}
          /{" "}
          {Math.round(
            (amountBuyed * choosedCoin.quote.USD.price + Number.EPSILON) * 100
          ) / 100}
        </td>
      )}
      {choosedCoin === undefined ? (
        <td>Loading...</td>
      ) : (
        <td>
          {Math.round(
            (amountBuyed * choosedCoin.quote.USD.price -
              amountBuyed * pricePerUnit +
              Number.EPSILON) *
              100
          ) / 100}
        </td>
      )}
    </tr>
  );
};

export default TrComponent;
