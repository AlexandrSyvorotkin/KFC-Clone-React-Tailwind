import React from 'react';
import styles from './FooterInfoLinks.module.css';

const FooterInfoLinks = ({title, links}) => {


    return (
        <ul className={styles.section_items}>
            <h3>{title}</h3>
            {links.map((item)=> <li className={styles.section_item} key={item}>{item}</li>)}
        </ul>
    );
};

export default FooterInfoLinks;
