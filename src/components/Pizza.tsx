import React from 'react'
import { PizzaType } from '../types'
import { useStateDispatch } from './AppState'
import PizzaCSS from './Pizza.module.css'

type Props = {
  pizza: PizzaType
}
export const Pizza: React.FC<Props> = ({ pizza }) => {
  const dispatch = useStateDispatch()
  const handleAddToCartClick = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        item: { id: pizza.id, name: pizza.name, price: pizza.price },
      },
    })
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
