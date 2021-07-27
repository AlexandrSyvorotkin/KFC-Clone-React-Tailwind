import React from 'react';
import Plus from '../../../assets/Plus.png'
import Minus from '../../../assets/Minus.png'
import BlackPlus from '../../../assets/blackPlus.jpg'

const MenuCard = ({img, price, name}) => {
    return (
        <div className='flex flex-col mr-5'>
            <div className='relative mb-1'>
                <img src={img} alt=""/>
                <div className='flex items-center justify-center absolute w-12 h-12 bg-white rounded-full bottom-0 right-0 shadow-lg'>
                    <div><img src={BlackPlus} alt=""/></div>
                </div>
            </div>
            <div className='text-gray-500 text-center'>{name}</div>
            <div className='text-red-600 text-center'>{price}р.</div>
            <div className='bg-black rounded-full w-28 h-12 flex items-center justify-between'>
                <img className='px-4' src={Minus} alt=""/>
                <div className='text-gray-50'>1</div>
                <img className='px-4' src={Plus} alt=""/>
            </div>
        </div>
    );
};

export default MenuCard;
