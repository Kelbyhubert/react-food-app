import React from 'react'
import styled from './MealHeader.module.css';

const MealHeader = () => {
    return (
        <section className={styled.summary}>
            <h2>World Food</h2>
            <p>Choose the food you want from the selection that we give</p>
            <p>All the food is made by 5 star chef</p>
        </section>
    )
}

export default MealHeader
