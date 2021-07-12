import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.redFooterLogo}>
                <div className={styles.footer_red}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
