import React, { useState } from "react";
import MyContext from "./ContextAPI/ContextProvider";
import { getList,setList } from "./services/GetSetLocalStore";

import "./App.css";
import Home from "./pages/Home";

function App() {
  const [form, setForm] = useState({ value: 0, coin: "BTC", cambio: 0 });
  const [arrBuys, setArrBuys] = useState([...getList()])
  const [coinsCurrent, setCoinsCurrent] = useState<any>([]);

//   window.onbeforeunload = function() {
//     setList(arrBuys);
//  }
  return (
    <MyContext.Provider value={{ form, setForm, arrBuys, setArrBuys, coinsCurrent, setCoinsCurrent}}>
      <div className="App">
        <Home />
      </div>
    </MyContext.Provider>
  );
}

export default App;
