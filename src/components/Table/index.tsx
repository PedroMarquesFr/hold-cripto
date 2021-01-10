import React, { useContext } from "react";
import { Table as Tb } from "react-bootstrap";
import MyContext from "../../ContextAPI/ContextProvider";
import { Coin, CoinInfo } from "../../services/global";

import { Container} from "./styles";
import TrComponent from "./TrComponent";

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
            <th className="text-center">Price per Unit When Bought | Now ( $ )</th>
            <th className="text-center">Value When Bought | Now ( $ )</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          {arrBuys.map(({ symbol, name, amountBuyed, pricePerUnit }, index) => {
            let choosedCoin: Coin | any = coinsCurrent.find(
              (coin: Coin) => coin.symbol === symbol
            );
            return (
              <TrComponent
                coinInfo={{symbol,name,amountBuyed,pricePerUnit}}
                choosedCoin={choosedCoin}
                index={index}
                key={index}
              />
            );
          })}
        </tbody>
      </Tb>
    </Container>
  );
};

export default Table;
