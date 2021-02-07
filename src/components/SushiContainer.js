import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushis, handleSushiIndex, addPlateToTable, updateWallet, money}) {

  const [notEnoughMoney, setNotEnoughMoney] = useState(false)

  function noMoneyWarning() {
    setNotEnoughMoney(true)
  }

  const sushiList = sushis.map(sushi => {
    return (
      <Sushi 
      key={sushi.id}
      id={sushi.id}
      name={sushi.name}
      image={sushi.img_url}
      price={sushi.price}
      addPlateToTable={addPlateToTable}
      updateWallet={updateWallet}
      money={money}
      noMoneyWarning={noMoneyWarning}
      />
    );
  });

  return (
    <div className="belt">
      <div>
        {notEnoughMoney ? "You don't have enough money!" : null}
      </div>
      {sushiList}
      <MoreButton handleSushiIndex={handleSushiIndex}/>
    </div>
  );
}

export default SushiContainer;
