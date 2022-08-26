import React from 'react'
import { PizzaType } from '../types'
import { AddToCartProps, WithAddToCart } from './AddToCart'

import PizzaCSS from './Pizza.module.css'

interface Props extends AddToCartProps {
  pizza: PizzaType
}
const Pizza: React.FC<Props> = ({ pizza, addToCart }) => {
  const handleAddToCartClick = () => {
    addToCart({ id: pizza.id, name: pizza.name, price: pizza.price })
  }
  return (
    <li className={PizzaCSS.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type="button" onClick={handleAddToCartClick}>
        Add to cart
      </button>
    </li>
  )
}

export default WithAddToCart(Pizza)
