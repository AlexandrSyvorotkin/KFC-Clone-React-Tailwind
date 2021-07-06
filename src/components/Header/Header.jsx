import React from 'react';
import styles from './Header.module.css'
import HumburgerMenu from "./HumburgerMenu";

const Header = () => {
    return (
        <div className={styles.header}>
            <HumburgerMenu/>
        </div>
    );
};

export default Header;
