import React, { useState } from "react";
import { Coin, CoinInfo } from "../../../services/global";
import getIcon from "../../../services/getIcon";

// import { Container } from './styles';
interface Props {
  coinInfo: CoinInfo;
  choosedCoin: Coin;
  index: number;
}

const TrComponent: React.FC<Props> = ({ coinInfo, choosedCoin, index }) => {
  const { symbol, name, amountBuyed, pricePerUnit } = coinInfo;
  const [loading, setLoading] = useState(true);
  const [icon, setIcon] = useState("");

  const Icon = async (symbol: string) => {
    const icon = await getIcon(symbol);
    setLoading(false);
    setIcon(icon);
  };

  Icon(symbol);
  return (
    <tr key={index}>
      {loading ? (
        <td>LAL...</td>
      ) : (
        <td>
          <img src={icon} alt="icon" width="27" /> {name} {symbol}
        </td>
      )}
      <td>{amountBuyed}</td>
      {choosedCoin === undefined ? (
        <td className="text-center">Loading...</td>
      ) : (
        <td className="text-center">
          {Math.round((pricePerUnit + Number.EPSILON) * 100) / 100} |{" "}
          {Math.round((choosedCoin.quote.USD.price + Number.EPSILON) * 100) /
            100}
        </td>
      )}
      {choosedCoin === undefined ? (
        <td className="text-center">Loading...</td>
      ) : (
        <td className="text-center">
          {Math.round((amountBuyed * pricePerUnit + Number.EPSILON) * 100) /
            100}{" "}
          |{" "}
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
