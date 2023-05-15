import React from 'react';
import style from './Modal.module.css';

interface IModalProps {
    children:React.ReactNode
    visible:boolean
    onHide:()=>void
}

const Modal:React.FC<IModalProps> = ({children, visible, onHide}) => {
    const rootClasses = [style.myModal]
     if (visible) {
        rootClasses.push(style.active);
    } 

    return (
        <div className={rootClasses.join(' ')} >
            <div className={style.myModalContent} onClick={(e) => e.stopPropagation()}>
            <div className={style.closeModal} onClick={onHide}>X</div>
            <div>
            {children}
            </div>
            </div>
        </div>
    );
};

export default Modal;