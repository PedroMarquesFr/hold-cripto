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
            <th>Symbol</th>
            <th>Name</th>
            <th>Amount Buyed</th>
            <th>Price</th>
            <th>Price When Bought</th>
            <th>Price Now</th>
          </tr>
        </thead>
        <tbody>
          {arrBuys.map(({ symbol, name, amountBuyed, pricePerUnit }, index) => {
            let choosedCoin: Coin | any = coinsCurrent.find(
              (coin: Coin) => coin.symbol === symbol
            );
            return (
              <tr key={index}>
                <td>{symbol}</td>
                <td>{name}</td>
                <td>{amountBuyed}</td>
                <td>{pricePerUnit}</td>
                <td>{amountBuyed * pricePerUnit}</td>
                {choosedCoin === undefined ? (
                  <td>Loading...</td>
                ) : (
                  <td>{amountBuyed * choosedCoin.quote.USD.price}</td>
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
