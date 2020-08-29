import React from "react"

const OrderSummary = ({ ingredient }) => {
  const ingredientsSummary = Object.keys(ingredient).map((ing) => {
    return (
      <li key={ing}>
        <span style={{ textTransform: "capitalize" }}>{ing}</span>:
        {ingredient[ing]}
      </li> 
    )
  })
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
          <ul>{ingredientsSummary}</ul>
          <p>Continue to Checkout</p>
    </React.Fragment>
  )
}

export default OrderSummary
