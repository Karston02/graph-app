import React, { useEffect, useState } from "react";
import "./appStyles.css";
import axios from "axios";
import { Menu, Graph, ErrorPage } from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
      <Graph />
    </div>
  );
}

export default App;
