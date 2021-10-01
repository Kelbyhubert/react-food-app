import React , {useContext} from 'react'
import CartContext from '../../Context/CartContext';
import styled from './Meal.module.css'
import MealForm from './MealForm';


const Meal = (props) => {
    const cartContext = useContext(CartContext);

    const addToCard = (amount) => {
        cartContext.addItem({
            id: props.id,
            name: props.title,
            amount: amount,
            price: props.price
        }
        )
    }

    const price = `$${props.price.toFixed(2)}`;
    return (
        <section className={styled.meal}>
            <div>
                <h3>{props.title}</h3>
                <p className={styled.description}>{props.desc}</p>
                <p className={styled.price}>{price}</p>
            </div>
            <div>
                <MealForm id={props.id} addToCard={addToCard}/>
            </div>
        </section>
    )
}

export default Meal
