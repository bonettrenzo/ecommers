import useCart from "../hooks/useCart"
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons"
import "./products.css"

import React from 'react'

const Products = ({products}) => {
    const{addToCart, removeFromCart, cart}=useCart()

    const checkProductInCart = product =>(
        cart.some(item =>(item.id === product.id))
    )
  return (
   <main className="products">
        {products.length <= 0 && <h1>No hay productos disponibles</h1> }
        
        <ul>
            {
                products.map((product) =>{ 
                    const isProductInCart = checkProductInCart(product)
                    return(
                        <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />

                    <div>
                       <strong>
                            {product.title} - ${product.price}
                        </strong>
                    </div>

                    <button style={{backgroundColor: isProductInCart ? "red" : "#09f" }} onClick={() => isProductInCart ? removeFromCart(product) : addToCart(product)}>
                        {
                            isProductInCart ? <RemoveFromCartIcon/> : <AddToCartIcon/>
                        }
                    </button>
                    </li>
                    )


                })
            }
        </ul>
   </main>
  )
}

export default Products