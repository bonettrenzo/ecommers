import { useState } from 'react'
import Products from './components/Products'
import {products as initialProducts} from "./mooks/products.json"
import Header from './components/Header'
import useFilter from './hooks/useFilter'
import Footer from './components/Footer'
import Cart from './components/Cart'
import { CartProvider } from './context/CartContext'


function App() {
  const [products] = useState(initialProducts)
  const {filters, setFilters, filterProduct} = useFilter()
  const filteredProducts = filterProduct(products)

  console.log(filteredProducts);
  return (
    <CartProvider>
    <Header />
    <Cart/>
    <Products products={filteredProducts}/>
    <Footer />
    </CartProvider>
  )
}

export default App
