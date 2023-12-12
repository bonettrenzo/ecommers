import React from 'react'
import "./footer.css"
import useFilter from '../hooks/useFilter'
import useCart from '../hooks/useCart'
const Footer = () => {
  const{cart}=useCart()
  const {filters} = useFilter()
  return (
    <footer className='footer'>
{/*         {JSON.stringify(filters,null,2)} */}
        {/* {JSON.stringify(cart,null,2)} */}
    </footer>
  )
}

export default Footer