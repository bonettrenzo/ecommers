import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const useCart = () => {
    const context = useContext(CartContext)

    if (context === undefined){
        throw new Error("useCart must be use within a CartProvider")
    }

    return context
}

export default useCart