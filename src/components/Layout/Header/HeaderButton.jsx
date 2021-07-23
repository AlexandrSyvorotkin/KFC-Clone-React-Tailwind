import React from 'react';
import Basket from '../../assets/Basket.png'

const HeaderButton = () => {
    return (
        <div className='flex flex-row items-center bg-red-500 rounded-2xl p-1'>
            <div>327р</div>
            <img src={Basket} alt=""/>
        </div>
    );
};

export default HeaderButton;