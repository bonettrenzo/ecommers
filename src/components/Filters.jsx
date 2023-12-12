import React, { useId, useState } from 'react'
import "./filters.css"
import useFilter from '../hooks/useFilter'
const Filters = () => {

    const categoryId = useId()
    const rangeId = useId()
    const {filters, setFilters } = useFilter()

    const handleRangeChange = (event) =>{
        setFilters({
            ...filters,
            minPrice : event.target.value
        })
    }

    const handleSelectChange = (event) => {
        setFilters({
            ...filters,
            category : event.target.value
        })
    }

    return (
        <section className='filters'>
            <div>
                <label htmlFor={rangeId}>Price</label>
                <input type="range" onChange={handleRangeChange} name="price" id={rangeId} min={0} max={1000} />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryId}>Categoria</label>
                <select onChange={handleSelectChange} name="categoria" id={categoryId}>
                    <option value="all">Todas</option>
                    <option value="home-decoration">decoración para casa</option>
                    <option value="laptops">Portátiles</option>
                    <option value="smartphones">Celures</option>
                    <option value="fragrances">Colonias</option>
                    <option value="skincare">protección de la piel</option>
                    <option value="groceries">comestibles</option>
                </select>
            </div>

        </section>
    )
}

export default Filters