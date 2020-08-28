import React, { Component } from "react"
import Burger from "../../Components/Burger/Burger"
import BuildControls from "../../Components/Burger/Controls/BuildControls/BuildControls"

const INGREDIENTS_PRICE = {
  salad: 10,
  cheese: 15,
  meat: 50,
  bacon: 20,
}
export default class BurgerBuilder extends Component {
  state = {
    ingredient: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    total: 10,
  }

  addIngredient = (type) => {
    const oldCount = this.state.ingredient[type]
    const updatedCount = oldCount + 1
    const updatedIngredient = {
      ...this.state.ingredient,
    }
    updatedIngredient[type] = updatedCount
    const priceAddition = INGREDIENTS_PRICE[type]
    const oldPrice = this.state.total
    const newPrice = oldPrice + priceAddition
    this.setState({
      total: newPrice,
      ingredient: updatedIngredient,
    })
  }
  removeIngredient = (type) => {
    const oldCount = this.state.ingredient[type]
    if (oldCount <= 0) {
      return
    }
    const updatedCount = oldCount - 1
    const updatedIngredient = {
      ...this.state.ingredient,
    }
    updatedIngredient[type] = updatedCount
    const priceDedction = INGREDIENTS_PRICE[type]
    const oldPrice = this.state.total
    const newPrice = oldPrice - priceDedction
    this.setState({
      total: newPrice,
      ingredient: updatedIngredient,
    })
  }
  render() {
    const disabledInfo = {
      ...this.state.ingredient,
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <React.Fragment>
        <Burger ingredient={this.state.ingredient} />
        <BuildControls
          addIngredient={this.addIngredient}
                removeIngredient={this.removeIngredient}
                disabled={disabledInfo}
        />
      </React.Fragment>
    )
  }
}
