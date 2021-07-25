import React from 'react';
import styles from './mune.module.css'

const MenuCard = ({img, price, name}) => {
    return (
        <div className='flex flex-col mr-5'>
            <div className='mb-1'>
                <img src={img} alt=""/>
            </div>
            <div className='text-gray-500 text-center'>{name}</div>
            <div className='text-red-600 text-center'>{price}р.</div>
            {/*<div className='absolute w-12 h-12 bg-gray-300 rounded-full'>*/}
            {/*</div>*/}
        </div>
    );
};

export default MenuCard;
