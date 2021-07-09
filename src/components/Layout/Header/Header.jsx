import React from 'react';
import styles from './Header.module.css'
import HumburgerMenu from "./HumburgerMenu";
import HeaderButton from "./HeaderButton";

const Header = () => {
    return (
        <div className={styles.header}>
            <HumburgerMenu/>
            <div className={styles.header_red}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <HeaderButton/>

        </div>
    );
};

export default Header;
