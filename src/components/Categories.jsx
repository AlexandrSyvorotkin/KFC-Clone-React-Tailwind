import React from 'react';

const Categories = () => {


    const categories = ['Бургеры','Твистеры','Курица', 'Баскеты', 'Снэки', 'Соусы', 'Напитки', 'Кофе и чай', 'Десерты', 'Хиты по 50', 'Хиты пс']

    return (
        <ul className='overflow-hidden p-0 mt-5'>
            {categories.map((item)=> <li
                className='text-2xl inline-block mr-5 list-none text-gray-500'
                key={item}>
                {item}
            </li>)}
        </ul>
    );
};

export default Categories;
