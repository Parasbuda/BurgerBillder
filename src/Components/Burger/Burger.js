import React from "react"
import "./Burger.css"
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"
const Burger = (props) => {
  let transformedIngredient = Object.keys(props.ingredient).map((ing) => {
    return [...Array(props.ingredient[ing])].map((_, i) => {
      return <BurgerIngredient key={ing + i} type={ing} />
    })
  }).reduce((acc, el) => {
    return acc.concat(el)
  }, [])
  if (transformedIngredient.length === 0) {
    transformedIngredient=<p>Please add some ingredient</p>
  }
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
     {transformedIngredient}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default Burger
