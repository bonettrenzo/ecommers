import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({children}) => {


    const initialState = []

    const reducer = () =>{
      
    }







    const [cart, setCart] = useState([]);

    const addToCart = (product) =>{
       /* verificar si esta ya en el carrito */

        const productInCartIndex = cart.findIndex((item) =>item.id === product.id)

        if(productInCartIndex >= 0){
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }

        setCart(prevState => [...prevState, {...product, quantity:1}])
    }

    const clearCart = () => setCart([])

    const removeFromCart = (product) =>{
      setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    const decrementQuantity = (product) =>{
      setCart(prevState => [...prevState, product])
    }

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>{children}</CartContext.Provider>
  )
}
