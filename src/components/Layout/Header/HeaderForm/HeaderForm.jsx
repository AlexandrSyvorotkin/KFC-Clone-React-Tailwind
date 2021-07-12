import React from 'react';
import styles from './HeaderForm.module.css'

const HeaderForm = () => {
    return (
        <>
            <div className={styles.city_adress}>Доставка город Москва</div>
            <form className={styles.form}>
                <div className={styles.input}>
                    <label htmlFor="street">Улица</label>
                    <input  type='text' placeholder="Остоженка"/>
                </div>
                <div className={styles.input}>
                    <label htmlFor="house">Дом</label>
                    <input type='number' placeholder='8'/>
                </div>
            </form>
        </>
    );
};

export default HeaderForm;
