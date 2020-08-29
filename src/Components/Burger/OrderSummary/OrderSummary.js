import React from "react"
import Button from "../../UI/Button/Button"

const OrderSummary = ({ ingredient, purchaseCancelled, purchaseContinue,price }) => {
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
          <p> <strong>Total Price:Rs {price.toFixed(2)}</strong></p>
          <p>Continue to Checkout?</p>
          <Button btnType="Danger" clicked={purchaseCancelled}>CANCEL</Button>
          <Button btnType="Success" clicked={purchaseContinue}>CONTINUE</Button>
    </React.Fragment>
  )
}

export default OrderSummary
