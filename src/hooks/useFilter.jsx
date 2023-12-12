import React, { useContext, useState } from 'react'
import { FilterContext } from '../context/FiltersContext'

const useFilter = () => {

/*     const [filters, setFilters] = useState({
        category : "all",
        minPrice: 0
    }) */
    const {filters, setFilters} = useContext(FilterContext)
    
    
    const filterProduct = (products) =>{
        return(
            products.filter((product) =>{
            return(
                product.price >= filters.minPrice && 
                (
                filters.category === "all" ||
                filters.category === product.category
                )
            )
            })
        )
    }
    
    return{filters, setFilters, filterProduct}
      
}

export default useFilter