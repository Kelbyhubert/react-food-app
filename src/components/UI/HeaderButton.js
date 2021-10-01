import React , {useContext , useEffect , useState} from 'react'
import CartIcon from '../Cart/CartIcon'
import styled from "./HeaderButton.module.css"
import CartContext from '../../Context/CartContext'

const HeaderButton = (props) => {

    const cartContext = useContext(CartContext);
    const [animation, setAnimation] = useState(false)

    const amountOfItem = cartContext.items.reduce((value , item) => {
        return value + item.amount;
    } , 0 )

    const {items} = cartContext

    const buttonEffect = `${styled.button} ${animation && styled.bump}`

    useEffect(() => {
        if(items.length === 0) {
            return
        }
        setAnimation(true);

        const timer = setTimeout(() => {
            setAnimation(false);

        } , 300)

        return () => {
            clearTimeout(timer)
        }
    }, [items])

    return (
        <button className={buttonEffect} onClick={props.onClick}>
            <span className={styled.CartIcon}>
                <CartIcon />
            </span>
            <span> Your Cart </span>
            <span className={styled.badge}>
                {amountOfItem}
            </span>
        </button>
    )
}

export default HeaderButton
