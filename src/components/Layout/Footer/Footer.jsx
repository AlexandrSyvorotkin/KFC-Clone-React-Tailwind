import React from 'react';
import styles from './Footer.module.css'
import FooterInfoLinks from "./FooterInfoLinks";

const Footer = () => {

    const companyLinks = [
        'Компания',
        'Новости',
        'Экскурсии',
        'Бизнес c RFC',
        'RSC Battle',
        'Политика обработки и защиты ПДн',
        'Составы блюд']

    const careerLinks = [
        'Университет',
        'Вакансии',
        'Анкета']

    const socialLinks  = [
        'Вконтакте',
        'Фэйсбук',
        'Инстаграмм',
        'Одноклассники',
        'Ютуб'
    ]

    const ContactLinks = [
        'Обратная связь',
        'Для прессы',
        'Сотрудникам'
    ]


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
                <FooterInfoLinks links={companyLinks} title='Компания'/>
                <FooterInfoLinks links={careerLinks} title='Карьера'/>
                <img className={styles.rfc_logo} src="https://energytorg.ru/images/1024px-KFC_logo.svg.png" alt="KFC"/>
                <FooterInfoLinks links={socialLinks} title='Мы рядом'/>
                <FooterInfoLinks links={ContactLinks} title='Контакты'/>
            </div>
        </footer>
    );
};

export default Footer;
