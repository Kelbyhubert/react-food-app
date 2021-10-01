import React from 'react'
import Card from '../UI/Card'
import styled from './AvailableMeal.module.css'
import Meal from './Meal'

const dummyData = [
    {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
]


const AvailableMeal = () => {


    const meal = dummyData.map((data) => {
        return(
            <li key={data.id}> 
                <Meal id={data.id} title={data.name} desc={data.description} price={data.price} />
             </li>
        )
    })
    return (
        <section className={styled.meals}>
            <Card>
                <ul>
                    {meal}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeal
