import React, {useState} from 'react';
import Plus from '../../../assets/Plus.png'
import Minus from '../../../assets/Minus.png'
import BlackPlus from '../../../assets/blackPlus.jpg'

const MenuCard = ({img, price, name}) => {

    const [amountOfMeal, setAmountOfMeal] = useState(true)

    const AmountOfMealHandler = () => {
        setAmountOfMeal(false)
    }

    const hideAmountOfMealHandler = () => {
        setAmountOfMeal(true)
    }

    return (
        <div className='flex flex-col mr-5'>
            <div className='relative mb-1'>
                <img src={img} alt=""/>
                {
                    !amountOfMeal ? <div className='absolute bottom-0 right-0 bg-black rounded-full w-28 h-12 flex items-center justify-between'>
                        <div onClick={hideAmountOfMealHandler}><img className='px-4' src={Minus} alt=""/></div>
                        <div className='text-gray-50'>1</div>
                        <div><img className='px-4' src={Plus} alt=""/></div>
                    </div> : <div
                        className='absolute bottom-0 right-0 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg'
                        onClick={AmountOfMealHandler}
                    >
                        <div><img src={BlackPlus} alt=""/></div>
                    </div>
                }
            </div>
            <div className='text-gray-500 text-center'>{name}</div>
            <div className='text-red-600 text-center'>{price}р.</div>
        </div>
    );
};

export default MenuCard;
