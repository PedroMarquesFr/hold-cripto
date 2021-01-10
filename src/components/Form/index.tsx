import React, { useEffect, useContext } from "react";
import { Form as Fr, Col, Button } from "react-bootstrap";
import MyContext from "../../ContextAPI/ContextProvider";
import handleFetchAPI from "../../services/api";
import { Coin } from "../../services/global";
// import { setList } from "../../services/GetSetLocalStore";

import { Container, Label } from "./styles";

const Form: React.FC = () => {
  const {
    form,
    setForm,
    arrBuys,
    setArrBuys,
    coinsCurrent,
    setCoinsCurrent,
  } = useContext(MyContext);

  useEffect(() => {
    async function FetchAPI() {
      console.log("antes");
      const resp = await handleFetchAPI();
      console.log("dps");
      setCoinsCurrent(resp);
    }
    FetchAPI();
  }, []);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const choosedCoin = coinsCurrent.find(
      (coin: Coin) => coin.symbol === form.coin
    );
    console.log(choosedCoin.symbol, choosedCoin.name);
    setArrBuys([
      {
        symbol: choosedCoin.symbol,
        name: choosedCoin.name,
        amountBuyed: form.value,
        pricePerUnit:
          form.cambio === 0 || isNaN(form.cambio)
            ? choosedCoin.quote.USD.price
            : form.cambio,
      },
      ...arrBuys,
    ]);
  };

  return (
    <Container>
      <Fr>
        <Fr.Row className="d-flex align-items-center">
          <Label htmlFor="disp" className="mr-2 ml-4">
            Value
            <Fr.Control
              min="0"
              name="value"
              type="number"
              data-testid="value-input"
              id="disp"
              value={form.value}
              onChange={({ target }) =>
                setForm({ ...form, value: parseFloat(target.value) })
              }
            />
          </Label>

          <Label htmlFor="p" className="mr-2">
            Coin
            <Fr.Control
              as="select"
              value={form.coin}
              onChange={({ target }) =>
                setForm({ ...form, coin: target.value })
              }
            >
              {coinsCurrent.map((coin: Coin, index: number) => (
                <option value={coin.symbol} key={coin.id}>
                  {index + 1}. {coin.name} ({coin.symbol})
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
                setForm({ ...form, cambio: parseFloat(target.value) })
              }
            />
          </Label>
          <Col>
            <Button type="submit" onClick={handleSubmit} className="mt-3">
              Adicionar investimento
            </Button>
          </Col>
        </Fr.Row>
      </Fr>
      <p className="ml-4">
        You Bought {form.value} of {form.coin} when it costs {form.cambio?form.cambio:"current coute"}{" "}
        dolars
      </p>
    </Container>
  );
};

export default Form;
