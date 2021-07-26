import React, {useState} from 'react';
import HumburgerMenu from "./HumburgerMenu";
import HeaderButton from "./HeaderButton";
import HeaderForm from "./HeaderForm/HeaderForm";

const Header = () => {

    const [isFoodDeliverySelected, setIsFoodDeliverySelected] = useState(false)

    const startGetDelivery = () => setIsFoodDeliverySelected(true)
    const getPickUp = () => setIsFoodDeliverySelected(false)

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
                    <button className={!isFoodDeliverySelected ? 'button' : 'activeButton'} onClick={startGetDelivery}>Доставка
                    </button>
                    <button className={isFoodDeliverySelected ? 'button' : 'activeButton'} onClick={getPickUp}>Самовывоз</button>
                </div>
            </div>
            {isFoodDeliverySelected && <HeaderForm/>}
        </>
    );
};

export default Header;
