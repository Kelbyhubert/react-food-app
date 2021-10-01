import React from 'react';
import HeaderButton from '../UI/HeaderButton';
import styled from './Header.module.css'

const Header = (props) => {
    return (
        <>
        <header className={styled.header}>
            <h1>Food Order Web</h1>
            <HeaderButton onClick={props.onOpen}/>
        </header>
        <div className={styled['main-image']}>
            <img 
                src="https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true"
                alt="food"
            />
        </div>
        </>
        
    )
}

export default Header
