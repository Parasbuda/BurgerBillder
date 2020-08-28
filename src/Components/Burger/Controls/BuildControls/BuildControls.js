import React from "react"
import "./BuildControls.css"
import BuildControl from "../BuildControl/BuildControl"
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
]
const BuildControls = ({ addIngredient,removeIngredient,disabled }) => {
  return (
    <div className="BuildControls">
      {controls.map((control) => (
        <BuildControl
          addIngredient={() => addIngredient(control.type)}
          key={control.label}
              label={control.label}
              removeIngredient={() => removeIngredient(control.type)}
              disabled={disabled[control.type]}
        />
      ))}
    </div>
  )
}

export default BuildControls
