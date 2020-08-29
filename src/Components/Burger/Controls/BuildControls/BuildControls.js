import React from "react"
import "./BuildControls.css"
import BuildControl from "../BuildControl/BuildControl"
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
]
const BuildControls = ({ addIngredient,removeIngredient,disabled,total,purchasable,ordered }) => {
  return (
      <div className="BuildControls">
          <p>Current Price:Rs.<strong>{total.toFixed(2 )}</strong></p>
      {controls.map((control) => (
        <BuildControl
          addIngredient={() => addIngredient(control.type)}
          key={control.label}
              label={control.label}
              removeIngredient={() => removeIngredient(control.type)}
              disabled={disabled[control.type]}
        />
      ))}
      <button className="OrderButton" disabled={!purchasable} onClick={ordered}>ORDER NOW</button>
    </div>
  )
}

export default BuildControls
