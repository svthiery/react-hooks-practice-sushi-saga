import React, {useState} from "react";

function Sushi({name, image, price, id, addPlateToTable, updateWallet, money, noMoneyWarning }) {

  const [isEaten, setIsEaten] = useState(false)

  function handleSushiClick() {
    if (money > price ) {
    setIsEaten(true)
    addPlateToTable()
    updateWallet(price)
    } else {
      noMoneyWarning()
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleSushiClick}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
