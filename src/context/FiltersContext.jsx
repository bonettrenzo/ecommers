import React, { createContext, useState } from 'react'

export const FilterContext = createContext()

export const FiltersProviders = ({children}) => {
    const [filters, setFilters] = useState({
        category:"all",
        minPrice: 0 
    })

    return(
        <FilterContext.Provider value={{
            filters, setFilters
        }}>
            {children}
        </FilterContext.Provider>
    )
}
