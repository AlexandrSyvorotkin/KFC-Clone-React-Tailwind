import React from 'react';
import styles from './Categories.module.css'

const Categories = () => {

    const categories = ['Бургеры','Твистеры','Курица', 'Баскеты', 'Снэки', 'Соусы', 'Напитки', 'Кофе и чай', 'Десерты', 'Хиты по 50', 'Хиты пс']

    return (
        <ul className={styles.categories}>
            {categories.map((item)=> <li className={styles.categories_items} key={item}>{item}</li>)}
        </ul>
    );
};

export default Categories;
