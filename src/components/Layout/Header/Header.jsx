import React, {useState} from 'react';
import styles from './Header.module.css'
import HumburgerMenu from "./HumburgerMenu";
import HeaderButton from "./HeaderButton";
import HeaderForm from "./HeaderForm/HeaderForm";

const Header = () => {

    const [foodDelivery, setFoodDelivery] = useState(false)

    const startGetDelivery = () => {
        setFoodDelivery(true)
    }
    const getPickUp = () => {setFoodDelivery(false)}

    return (
        <>
            <div className={styles.redHeaderLogo}>
                <div className={styles.header_red}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className={styles.header}>
                <HumburgerMenu/>
                <HeaderButton/>
            </div>
            <div className={styles.header_info}>
                <h1>Наш адрес: г. Москва ул. Театральный пр-д, 5/1</h1>
                <div>
                    <button className={styles.btn} onClick={startGetDelivery}>Доставка</button>
                    <button className={styles.btn} onClick={getPickUp}>Самовывоз</button>
                </div>
            </div>
            {foodDelivery && <HeaderForm/>}
        </>
    );
};

export default Header;
