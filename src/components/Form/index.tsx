import React, { useEffect, useContext,useState } from "react";
import { Form as Fr, Col, Button } from "react-bootstrap";
import MyContext from "../../ContextAPI/ContextProvider";
import handleFetchAPI from "../../services/api";
import { Coin } from "../../services/global";
// import { setList } from "../../services/GetSetLocalStore";

import { Container, Label } from "./styles";

const Form: React.FC = () => {
  const {
    arrBuys,
    setArrBuys,
    coinsCurrent,
    setCoinsCurrent,
  } = useContext(MyContext);
  const [localForm, setLocalForm] = useState({ value: 0, coin: "BTC", cambio: 0 })

  useEffect(() => {
    async function FetchAPI() {
      console.log("antes");
      const resp = await handleFetchAPI();
      console.log("dps");
      setCoinsCurrent(resp);
    }
    FetchAPI();
  }, [setCoinsCurrent]);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const choosedCoin = coinsCurrent.find(
      (coin: Coin) => coin.symbol === localForm.coin
    );
    console.log(choosedCoin.symbol, choosedCoin.name);
    setArrBuys([
      {
        symbol: choosedCoin.symbol,
        name: choosedCoin.name,
        amountBuyed: localForm.value,
        pricePerUnit:
          localForm.cambio === 0 || isNaN(localForm.cambio)
            ? choosedCoin.quote.USD.price
            : localForm.cambio,
      },
      ...arrBuys,
    ]);
  };

  return (
    <Container>
      <Fr>
        <Fr.Row className="d-flex align-items-center">
          <Label htmlFor="disp" className="mr-2">
            Value
            <Fr.Control
              min="0"
              name="value"
              type="number"
              data-testid="value-input"
              id="disp"
              value={localForm.value}
              onChange={({ target }) =>
              setLocalForm({ ...localForm, value: parseFloat(target.value) })
              }
            />
          </Label>

          <Label htmlFor="p" className="mr-2">
            Coin ( Type to search )
            <Fr.Control
              as="select"
              value={localForm.coin}
              onChange={({ target }) =>
              setLocalForm({ ...localForm, coin: target.value })
              }
            >
              {coinsCurrent.map((coin: Coin, index: number) => (
                <option value={coin.symbol} key={coin.id}>
                  {coin.name} ({coin.symbol}) {index + 1}
                </option>
              ))}
            </Fr.Control>
          </Label>

          <Label htmlFor="a">
            Date Quote
            <Fr.Control
              min="0"
              name="value"
              placeholder="optional"
              type="number"
              data-testid="value-input"
              id="a"
              // value={form.cambio}
              onChange={({ target }) =>
              setLocalForm({ ...localForm, cambio: parseFloat(target.value) })
              }
            />
          </Label>
          <Col>
            <Button type="submit" onClick={handleSubmit} className="mt-3">
              Add Buy
            </Button>
          </Col>
        </Fr.Row>
      </Fr>
      <span>
        You Bought {localForm.value} of {localForm.coin} when it costs{" "}
        {localForm.cambio ? localForm.cambio : "current coute"} dolars
      </span>
    </Container>
  );
};

export default Form;
