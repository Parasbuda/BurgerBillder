import React, { Component } from 'react'
import Burger from '../../Components/Burger/Burger'

export default class BurgerBuilder extends Component {
    state = {
        ingredient: {
            salad: 0,
            bacon: 0,
            cheese:0,
            meat:0
        }
    }
    render() {
        return (
            <React.Fragment>
                <Burger ingredient={this.state.ingredient}/>
                <div>Build control</div>
            </React.Fragment>
        )
    }
}
