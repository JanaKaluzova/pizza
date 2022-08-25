import React, { useState } from 'react'
import CartCSS from '../components/Cart.module.css'
import { FiShoppingCart } from 'react-icons/fi'
import { AppStateContext } from './AppState'

type Props = {}

export const Cart: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <AppStateContext.Consumer>
      {(state) => {
        const itemsCount = state.cart.items.reduce((sum, item) => {
          return sum + item.quantity
        }, 0)
        return (
          <div className={CartCSS.cartContainer}>
            <button className={CartCSS.button} type="button" onClick={handleClick}>
              <FiShoppingCart />
              <span>{itemsCount} pizza(s)</span>
            </button>
            <div className={CartCSS.cartDropDown} style={{ display: isOpen ? 'block' : 'none' }}>
              <ul>
                {state.cart.items.map((item) => {
                  return (
                    <li key={item.id}>
                      {item.name} &times;{item.quantity}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        )
      }}
    </AppStateContext.Consumer>
  )
}
