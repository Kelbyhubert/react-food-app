import React from 'react'
import ReactDom from 'react-dom';
import styled from './Modal.module.css'

const Backdrop = (props) => {
    return <div className={styled.backdrop}></div>
};

const ModalOverlay = (props) => {
    return(
        <div className={styled.modal}>
            <div className={styled.content}>{props.children}</div>
        </div>
    )
}


const portalElement = document.querySelector("#overlay")
const Modal = (props) => {


    const backdrop = ReactDom.createPortal(<Backdrop />,portalElement);
    const modalOverlay = ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement);
    return (
        <>
        {backdrop}
        {modalOverlay}
        </>
    )
};

export default Modal
