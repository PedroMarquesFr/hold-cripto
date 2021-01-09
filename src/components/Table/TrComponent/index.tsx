import React from "react";
import { Coin, CoinInfo } from "../../../services/global";

// import { Container } from './styles';
interface Props {
  coinInfo: CoinInfo;
  choosedCoin: Coin;
  index: number;
}

const TrComponent: React.FC<Props> = ({ coinInfo, choosedCoin, index }) => {
  const { symbol, name, amountBuyed, pricePerUnit } = coinInfo;
  return (
    <tr key={index}>
      <td>
        {name} {symbol}
      </td>
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
