import useCart from "../hooks/useCart";
import { ClearCartIcon, RemoveFromCartIcon, CartIcon } from "./Icons";
import "./cart.css"
import React, { useId } from 'react'

export function Cart () {

    const cartCheckboxId = useId()
    const {clearCart, cart, addToCart} = useCart()
  
    return (
      <>
        <label className='cart-button' htmlFor={cartCheckboxId}>
          <CartIcon />
        </label>
        <input id={cartCheckboxId} type='checkbox' hidden />
  
        <aside className='cart'>
          {cart.map((item) =>(
              <ul key={item.id}>
              <li>
                <img src={item.thumbnail} alt={item.description} />
              </li>
              <div>
                <strong>{item.title}</strong> - ${item.price}
              </div>
              <footer>
                Qty: {item.quantity}
                <button onClick={() => addToCart(item)} style={{color: "white"}}>+</button>
              </footer>    
            </ul>
          ))}

  
          <button onClick={()=>clearCart()}>
            <ClearCartIcon />
          </button>
        </aside>
      </>
    )
  }
export default Cart