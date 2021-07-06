import React from 'react';
import styles from './HumburgerMenu.module.css'

const HumburgerMenu = () => {
    return (
        <div className={styles.humburger}>
            <span className={styles.long}></span>
            <span></span>
            <span className={styles.long}></span>
        </div>
    );
};

export default HumburgerMenu;
