import React from 'react';
import styles from './Header.module.css'
import HumburgerMenu from "./HumburgerMenu";
import HeaderButton from "./HeaderButton";

const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <HumburgerMenu/>
                <div className={styles.header_red}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <HeaderButton/>
            </div>
            <div className={styles.header_info}>
                <h1>Наш адрес: г. Москва ул. Театральный пр-д, 5/1</h1>
                <div>
                    <button>Доставка</button>
                    <button>Самовывоз</button>
                </div>
            </div>
        </>
    );
};

export default Header;
