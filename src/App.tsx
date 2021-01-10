import React, { useState } from "react";
import MyContext from "./ContextAPI/ContextProvider";
import { getList,setList } from "./services/getSetLocalStore";

import Home from "./pages/Home";

function App() {
  const [arrBuys, setArrBuys] = useState([...getList()])
  const [coinsCurrent, setCoinsCurrent] = useState<any>([]);

  window.onbeforeunload = function() {
    setList(arrBuys);
 }
  return (
    <MyContext.Provider value={{arrBuys, setArrBuys, coinsCurrent, setCoinsCurrent}}>
      <div className="App">
        <Home />
      </div>
    </MyContext.Provider>
  );
}

export default App;
