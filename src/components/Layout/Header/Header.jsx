import React, {useState} from 'react';
import HumburgerMenu from "./HumburgerMenu";
import HeaderButton from "./HeaderButton";
import HeaderForm from "./HeaderForm/HeaderForm";

const Header = () => {

    const [foodDelivery, setFoodDelivery] = useState(false)

    const startGetDelivery = () => {
        setFoodDelivery(true)
    }
    const getPickUp = () => {
        setFoodDelivery(false)
    }

    return (
        <>
            <div className='flex justify-center'>
                <div className='flex flex-row'>
                    <div className='red-block-header'></div>
                    <div className='red-block-header ml-2'></div>
                    <div className='red-block-header ml-2'></div>
                </div>
            </div>
            <div className='flex justify-between items-center py-8'>
                <HumburgerMenu/>
                <HeaderButton/>
            </div>
            <div className='flex justify-between items-center mt-8'>
                <h1 className='text-4xl font-bold'>Наш адрес: г. Москва ул. Театральный пр-д, 5/1</h1>
                <div>
                    <button className='bg-red-500 w-36 h-12 border-none mr-5' onClick={startGetDelivery}>Доставка
                    </button>
                    <button className='bg-red-500 w-36 h-12' onClick={getPickUp}>Самовывоз</button>
                </div>
            </div>
            {foodDelivery && <HeaderForm/>}
        </>
    );
};

export default Header;
