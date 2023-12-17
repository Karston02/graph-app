import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [exchangeNames, setExchangeNames] = useState([]);

  const getExchanges = async () => {
    try {
      const res = await axios.get(`https://rest.coinapi.io/v1/exchanges?apikey=${process.env.REACT_APP_API_KEY}`);
      const names = res.data.map((item: any) => item.name);
      setExchangeNames(names);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getExchanges();
  }, []);

  return (
    <div className="App">
      <div>
        <h2>Exchange Names:</h2>
        {exchangeNames.map((name, index) => (
          (index < 100) && (name !== '') && <div key={index}>{index + 1}. {name}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
