import React, {useState} from 'react';
import Plus from '../../../assets/Plus.png'
import Minus from '../../../assets/Minus.png'
import BlackPlus from '../../../assets/blackPlus.jpg'

const MenuCard = ({img, price, name, hit, newProduct}) => {


    const [amountOfMeal, setAmountOfMeal] = useState(true)

    const AmountOfMealHandler = () => setAmountOfMeal(false)

    const hideAmountOfMealHandler = () => setAmountOfMeal(true)


    return (
        <div className='flex flex-col justify-between relative mr-6'>
            <div>
                {
                    newProduct
                        ? <div className='productStatus bg-red-500'>{newProduct}</div>
                        : null
                }
                {
                    hit
                        ? <div className='productStatus bg-black'>{hit}</div>
                        : null
                }
                {
                    !amountOfMeal ? <div className='amountMeals justify-between w-28 bg-black '>
                        <div onClick={hideAmountOfMealHandler}><img className='px-4' src={Minus} alt=""/></div>
                        <div className='text-gray-50'></div>
                        <div><img className='px-4' src={Plus} alt=""/></div>
                    </div> : <div
                        className='amountMeals justify-center w-12 bg-white shadow-lg'
                        onClick={AmountOfMealHandler}
                    >
                        <div><img src={BlackPlus} alt=""/></div>
                    </div>
                }
            </div>
            <div className='mb-1 h-80 flex items-center justify-center'>
                <img className='object-cover max-h-full' src={img} alt=""/>
            </div>
            <div className='text-gray-500 text-center'>{name}</div>
            <div className='text-red-600 text-center'>{price}р.</div>
        </div>
    );
};

export default MenuCard;
