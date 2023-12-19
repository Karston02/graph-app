import React, { useEffect, useState } from "react";
import "./appStyles.css";
import axios from "axios";
import { Menu, Graph } from "./components";

function App() {
  const [exchangeNames, setExchangeNames] = useState([]);

  const getExchanges = async () => {
    try {
      const res = await axios.get(
        `https://rest.coinapi.io/v1/exchanges?apikey=${process.env.REACT_APP_API_KEY}`
      );
      const names = res.data.map((item: any) => item.name);
      console.log(exchangeNames);
      setExchangeNames(names);
      console.log(exchangeNames);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getExchanges();
  }, []);

  return (
    <div className="App">
      <Menu />
      <Graph page={1} nodes2={1} edges2={2} />
    </div>
  );
}

export default App;
