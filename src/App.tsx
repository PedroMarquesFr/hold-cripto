import React, { useState } from "react";
import MyContext from "./ContextAPI/ContextProvider";

import "./App.css";
import Home from "./pages/Home";

function App() {
  const [form, setForm] = useState({ value: 0, coin: "btc", cambio: 0 });
  return (
    <MyContext.Provider value={{ form, setForm}}>
      <div className="App">
        <Home />
      </div>
    </MyContext.Provider>
  );
}

export default App;
