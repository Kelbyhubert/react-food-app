import React , {useState , useReducer} from 'react';

const defaultValue = {
    items: [],
    total: 0
}

const CartContext = React.createContext({
    show: false,
    items:[],
    total: 0,
    addItem:(item) => {},
    removeItem:(id)=> {},
    open: () => {},
    close: () => {}
});


const cartReducer = (prevState , action) => {
    switch (action.type) {
        case "ADD":
            const updatePrice = prevState.total + action.item.price * action.item.amount;

            // cari index nya di array item
            const exitingCartItemIndex = prevState.items.findIndex(item => item.id === action.item.id);
            console.log(exitingCartItemIndex)


            const exitingCartItem = prevState.items[exitingCartItemIndex];
            console.log(exitingCartItem)

            let updateItems;

            if(exitingCartItem){
                const updateItem = {...exitingCartItem , amount: exitingCartItem.amount + action.item.amount};
                updateItems = [...prevState.items];
                updateItems[exitingCartItemIndex] = updateItem;

            }else{
                updateItems = prevState.items.concat(action.item);
            }

            return {
                items: updateItems,
                total: updatePrice
            }
        
        case "REMOVE":
            const exitingCartItemIndex2 = prevState.items.findIndex(item => item.id === action.id);
            const exitingCartItem2 = prevState.items[exitingCartItemIndex2];

            const updatePrice2 = prevState.total - exitingCartItem2.price;

            let updateItems2;

            if(exitingCartItem2.amount === 1){
                updateItems2 = prevState.items.filter(item => item.id !== action.id);
            }else{
                const updateItem2 = {...exitingCartItem2 , amount: exitingCartItem2.amount -1};
                updateItems2 = [...prevState.items];
                updateItems2[exitingCartItemIndex2] = updateItem2;
            }

            return {
                items: updateItems2,
                total: updatePrice2
            }
    
        default:
            break;
    }
}


export const CartConstextProvider = (props) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, defaultValue)

    const [cartOpen, setCartOpen] = useState(false);

    const openCart = () => {
        setCartOpen(true);
    }

    const closeCart = () => {
        setCartOpen(false);
    }

    const addItem = (item) => {
        cartDispatch({type: "ADD", item: item})
    }

    const removeItem = (id) => {
        cartDispatch({type:"REMOVE", id: id})
    }


    return(
        <CartContext.Provider
            value={{
                items: cartState.items,
                total: cartState.total,
                show: cartOpen,
                open: openCart,
                close: closeCart,
                addItem: addItem ,
                removeItem: removeItem 
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}


export default CartContext
