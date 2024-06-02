import React, { useState } from 'react'
import { GiShoppingBag } from "react-icons/gi";
import Order from './Order';

const showOrders = (props) => {
  let sum = 0;
  props.orders.forEach(el => sum += Number.parseFloat(el.cost));
  return (<div>
    {props.orders.map(el => (
      <Order onRemove={props.onRemove} key={el.id} item={el} />
    ))}
    <p className='sum'>All cost: {new Intl.NumberFormat().format(sum)}$</p>
  </div>)
}

const showNothing = () => {
  return (<div className='empty'>
    <h2>No items</h2>
  </div>)
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
        <div>
            <span className='logo'>Furniture store</span>
            <ul className='nav'>
              <GiShoppingBag className={`shop-cart-btn ${cartOpen && 'active'}`} onClick={() => setCartOpen(cartOpen = !cartOpen)}/>
              {cartOpen && (
                <div className='shop-cart'>
                  {props.orders.length > 0 ? showOrders(props) : showNothing()}
                </div>
              )}
                <li>About us</li>
                <li>Contacts</li>
                <li>My cabinet</li>
                
            </ul>
        </div>
        <div className='show'></div>
    </header>
  )
}
