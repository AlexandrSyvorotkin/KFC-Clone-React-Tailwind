import React from 'react';
import Plus from '../../../assets/icons8-plus.svg'

const MenuCard = ({img, price, name}) => {
    return (
        <div className='flex flex-col mr-5'>
            <div className='relative mb-1'>
                <img src={img} alt=""/>
                <div className='absolute w-12 h-12 bg-gray-200 rounded-full bottom-0 right-0'>
                    <img src={Plus} alt=""/>
                </div>
            </div>
            <div className='text-gray-500 text-center'>{name}</div>
            <div className='text-red-600 text-center'>{price}р.</div>
            {/*<div className='bg-black rounded-full w-32 h-12 flex items-center justify-between'>*/}
            {/*    <div className='text-red-500'>Minus</div>*/}

            {/*    <div className='text-red-500'>Plus</div>*/}
            {/*</div>*/}
        </div>
    );
};

export default MenuCard;
