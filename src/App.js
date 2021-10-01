import './App.css';
import Header from './components/Layout/Header';
import MealList from './components/Meals/MealList';
import Cart from './components/Cart/Cart';
import {useContext} from 'react'
import CartContext from './Context/CartContext';

function App() {

  const cartContext = useContext(CartContext);


  return (
    <>
      {cartContext.show && <Cart onClose={cartContext.close}/>}
      <Header onOpen={cartContext.open}/>
      <MealList />
    </>
  );
}

export default App;
