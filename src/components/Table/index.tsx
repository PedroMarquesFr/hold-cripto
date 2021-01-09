import React, { useContext } from "react";
import { Table as Tb } from "react-bootstrap";
import MyContext from "../../ContextAPI/ContextProvider";
import { Coin, CoinInfo } from "../../services/global";

import { Container } from "./styles";

const Table: React.FC = () => {
  const {
    arrBuys,
    coinsCurrent,
  }: { arrBuys: CoinInfo[]; coinsCurrent: Coin[] } = useContext(MyContext);
  return (
    <Container>
      <Tb striped bordered hover>
        <thead className="thead-dark">
          <tr>
            <th>Coin</th>
            <th>Amount Bought</th>
            <th>Price per Unit When Bought / Now ($)</th>
            <th>Value When Bought / Now ($)</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          {arrBuys.map(({ symbol, name, amountBuyed, pricePerUnit }, index) => {
            let choosedCoin: Coin | any = coinsCurrent.find(
              (coin: Coin) => coin.symbol === symbol
            );
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
                    {Math.round(
                      (choosedCoin.quote.USD.price + Number.EPSILON) * 100
                    ) / 100}
                  </td>
                )}
                {choosedCoin === undefined ? (
                  <td>Loading...</td>
                ) : (
                  <td>
                    {Math.round(
                      (amountBuyed * pricePerUnit + Number.EPSILON) * 100
                    ) / 100}{" "}
                    /{" "}
                    {Math.round(
                      (amountBuyed * choosedCoin.quote.USD.price +
                        Number.EPSILON) *
                        100
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
          })}
        </tbody>
      </Tb>
    </Container>
  );
};

export default Table;
