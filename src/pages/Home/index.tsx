import React from "react";
import Form from "../../components/Form";
import Table from "../../components/Table";

import { Header, ActialPrice } from "./styles";

const Home: React.FC = () => {
  return (
    <div>
      <Header>
        Coin Wallet
        <ActialPrice>
          <p>btc</p> <p>eth</p> <p>ada</p>
        </ActialPrice>
      </Header>
      <Form />
      <Table />
    </div>
  );
};

export default Home;
