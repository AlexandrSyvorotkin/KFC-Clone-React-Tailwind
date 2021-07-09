import React from 'react';
import styles from './HeaderButton.module.css'
import Basket from '../../assets/Basket.png'

const HeaderButton = () => {
    return (
        <div className={styles.basket}>
            <img src={Basket} alt=""/>
        </div>
    );
};

export default HeaderButton;