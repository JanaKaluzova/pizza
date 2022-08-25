import React from 'react'
import pizzas from '../src/data/pizzas.json'
import { Pizza } from './components/Pizza'
import AppCSS from './App.module.css'
import { ReactComponent as PizzaSVG } from '../src/svg/pizza.svg'
import { Cart } from './components/Cart'
import { AppStateProvider } from './components/AppState'

function App() {
  return (
    <AppStateProvider>
      <div className={AppCSS.container}>
        <div className={AppCSS.header}>
          <PizzaSVG width={120} height={120} />
          <div className={AppCSS.siteTitle}>Delicious pizza</div>
          <Cart />
        </div>
        <ul>
          {pizzas.map((pizza) => {
            return <Pizza key={pizza.id} pizza={pizza} />
          })}
        </ul>
      </div>
    </AppStateProvider>
  )
}

export default App
