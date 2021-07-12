import React from 'react';
import styles from './Footer.module.css'
import FooterInfoLinks from "./FooterInfoLinks";

import VK from '../../assets/vk.png'
import FaceBook from '../../assets/facebook.png'
import Twitter from '../../assets/twitter.png'
import Classmates from '../../assets/classmates.png'
import GoogleStore from '../../assets/GooglePlay.png'
import AppleStore from '../../assets/Appstore.png'

const Footer = () => {

    const Links = {
        companyLinks: [
            'Компания',
            'Новости',
            'Экскурсии',
            'Бизнес c RFC',
            'RSC Battle',
            'Составы блюд'
        ],
        careerLinks: [
            'Университет',
            'Вакансии',
            'Анкета'
        ],
        socialLinks: [
            'Вконтакте',
            'Фэйсбук',
            'Инстаграмм',
            'Одноклассники',
            'Ютуб'
        ],
        ContactLinks: [
            'Обратная связь',
            'Для прессы',
            'Сотрудникам'
        ]
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.redFooterLogo}>
                <div className={styles.footer_red}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className={styles.footer_sections}>
                <FooterInfoLinks links={Links.companyLinks} title='Компания'/>
                <FooterInfoLinks links={Links.careerLinks} title='Карьера'/>
                <img className={styles.rfc_logo} src="https://energytorg.ru/images/1024px-KFC_logo.svg.png" alt="KFC"/>
                <FooterInfoLinks links={Links.socialLinks} title='Мы рядом'/>
                <FooterInfoLinks links={Links.ContactLinks} title='Контакты'/>
            </div>
            <div className={styles.footer_end}>
                <div className={styles.footer_icon_links}>
                    <a href="https://vk.com/kfcrussia">
                        <img src={VK} alt="vk.com"/>
                    </a>
                    <a href="https://www.facebook.com/kfcrussia">
                        <img src={FaceBook} alt="facebook.com"/>
                    </a>
                    <a href="https://twitter.com/kfcrussia">
                        <img src={Twitter} alt="twitter.com"/>
                    </a>
                    <a href="https://ok.ru/group/53854456184833">
                        <img src={Classmates} alt="ok.ru"/>
                    </a>
                </div>
                <div className={styles.footer_stores}>
                    <img src={GoogleStore} alt=""/>
                    <img src={AppleStore} alt=""/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
