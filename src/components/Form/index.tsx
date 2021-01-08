import React, { useState, useEffect, useContext } from "react";
import MyContext from "../../ContextAPI/ContextProvider";
import handleFetchAPI from "../../services/api";
import Coin from "../../services/global";

import { Container } from "./styles";

const Form: React.FC = () => {
  const {form, setForm} = useContext(MyContext);
  const [coinsArray, setCoinsArray] = useState<any>([]);

  useEffect(() => {
    async function FetchAPI() {
      console.log("antes");
      const resp = await handleFetchAPI();
      console.log("dps");
      setCoinsArray(resp);
    }
    FetchAPI();
  }, []);

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label htmlFor="disp">
          Value
          <input
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
            {coinsArray.map((coin: Coin) => (
              <option value={coin.symbol}>
                {coin.name} ({coin.symbol})
              </option>
            ))}
            <option>dafadsfdasf</option>
          </select>
        </label>

        <label htmlFor="a">
          Cambio
          <input
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
      </form>
      {form.value}
      {form.coin}
      {form.cambio}
    </Container>
  );
};

export default Form;
