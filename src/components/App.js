import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [sushiIndex, setSushiIndex] = useState(0)
  const [plates, setPlates] = useState([])
  const [money, setMoney] = useState(50)

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((sushiArray) => {
        setSushis(sushiArray)
      });
  }, []);

  const displaySushis = sushis.slice(sushiIndex, sushiIndex + 4)

  function handleSushiIndex() {
    setSushiIndex(sushiIndex => sushiIndex + 4);
  }

  function addPlateToTable() {
    const newPlates = [...plates, "plate"]
    setPlates(newPlates)
  }

  function updateWallet(sushiPrice) {
    setMoney(money - sushiPrice);
  }

  return (
    <div className="app">
      <SushiContainer sushis={displaySushis} handleSushiIndex={handleSushiIndex} addPlateToTable={addPlateToTable} updateWallet={updateWallet} money={money}/>
      <Table plates={plates} money={money}/>
    </div>
  );
}

export default App;
