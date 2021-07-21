import React from 'react';
import styles from './MenuCard.module.css'

const MenuCard = ({img, price, name}) => {
    return (
        <div className={styles.menuCard}>
            <div>
                <img src={img} alt=""/>
            </div>
            <div className={styles.menu_title}>{name}</div>
            <div className={styles.menu_price}>{price}р.</div>
        </div>
    );
};

export default MenuCard;
