import React, { useEffect, useContext } from "react";
import MyContext from "../../ContextAPI/ContextProvider";
import handleFetchAPI from "../../services/api";
import { Coin } from "../../services/global";
// import { setList } from "../../services/GetSetLocalStore";

import { Container } from "./styles";

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
      <form>
        <label htmlFor="disp">
          Value
          <input
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
        </label>

        <label htmlFor="p">
          Coin
          <select
            value={form.coin}
            onChange={({ target }) => setForm({ ...form, coin: target.value })}
          >
            {coinsCurrent.map((coin: Coin) => (
              <option value={coin.symbol} key={coin.id}>
                {coin.name} ({coin.symbol})
              </option>
            ))}
            <option>dafadsfdasf</option>
          </select>
        </label>

        <label htmlFor="a">
          Date Quote
          <input
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
        </label>
        <button onClick={handleSubmit}>Adicionar investimento</button>
      </form>
      {form.value}
      {form.coin}
      {form.cambio}
    </Container>
  );
};

export default Form;
