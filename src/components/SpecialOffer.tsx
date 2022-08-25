import React from 'react'
import { PizzaType } from '../types'
import { useStateDispatch } from './AppState'
import SpecialOfferCSS from './SpecialOffer.module.css'

type Props = {
  pizza: PizzaType
}

export const SpecialOffer: React.FC<Props> = ({ pizza }) => {
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
    <div className={SpecialOfferCSS.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type="button" onClick={handleAddToCartClick}>
        Add to cart
      </button>
    </div>
  )
}
