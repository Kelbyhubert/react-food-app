import React , {useContext} from 'react'
import CartContext from '../../Context/CartContext'
import Modal from '../UI/Modal'
import styled from './Cart.module.css'
import CartItem from './CartItem'


const Cart = (props) => {

    const cartContext = useContext(CartContext)

    const handleAddItem = (item) =>{
        cartContext.addItem({...item , amount: 1})
    }

    const handleRemoveItem = (id) => {
        cartContext.removeItem(id)
    }

    const cartItems = cartContext.items.map((item) => {
        return(
            <CartItem 
                key={item.id} 
                name={item.name} 
                amount={item.amount} 
                price={item.price}
                remove={handleRemoveItem.bind(null,item.id)}
                add={handleAddItem.bind(null,item)}
            />
        )
    });


    const hasItems = cartContext.items.length > 0;
    return (
        <Modal>
            <ul>
                {cartItems}
            </ul>
            <div className={styled.total}>
                <span>Total price</span>
                <span>{cartContext.total.toFixed(2)}</span>
            </div>
            <div className={styled.actions}>
                <button className={styled['button--alt']} onClick={props.onClose}>
                    Close
                </button>
                {hasItems && <button className={styled.button}>
                    Order
                </button> }
                
            </div>
        </Modal>
    )
}

export default Cart
