import React from 'react'
import styled from './CartItem.module.css'

const CartItem = (props) => {
    return (
        
           <li className={styled.cartItem}>
               <div>
                    <h2>{props.name}</h2>
                </div>
                <div className={styled.right}>
                    <div className={styled.information}>
                        <span>{props.price}</span>
                        <span>X {props.amount}</span>
                    </div>
                    <div className={styled.action}>
                        <button onClick={props.add}>+</button>
                        <button onClick={props.remove}>-</button>
                    </div>
                </div>
            </li> 
    )
}

export default CartItem
