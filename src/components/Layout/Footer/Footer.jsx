import React from 'react';
import styles from './Footer.module.css'
import FooterInfoLinks from "./FooterInfoLinks";

import VK from '../../../assets/vk.png'
import FaceBook from '../../../assets/facebook.png'
import Twitter from '../../../assets/twitter.png'
import Classmates from '../../../assets/classmates.png'
import GoogleStore from '../../../assets/GooglePlay.png'
import AppleStore from '../../../assets/Appstore.png'

const Footer = () => {

    const Links = {
        companyLinks: [
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

    // todo: Footer Links
    return (
        <footer className='mt-10'>
            <div className='flex justify-center'>
                <div className='flex flex-row'>
                    <div className='red-block-footer'></div>
                    <div className='red-block-footer ml-2'></div>
                    <div className='red-block-footer ml-2'></div>
                </div>
            </div>
            <div className='flex justify-between mt-11'>
                <FooterInfoLinks links={Links.companyLinks} title='Компания'/>
                <FooterInfoLinks links={Links.careerLinks} title='Карьера'/>
                <img className='w-80 h-80' src="https://energytorg.ru/images/1024px-KFC_logo.svg.png" alt="KFC"/>
                <FooterInfoLinks links={Links.socialLinks} title='Мы рядом'/>
                <FooterInfoLinks links={Links.ContactLinks} title='Контакты'/>
            </div>
            <div className='flex items-center justify-center h-10 mt-4'>
                {/*<div className='flex justify-between w-11 h-4'>*/}
                {/*    <a href="https://vk.com/kfcrussia">*/}
                {/*        <img src={VK} alt="vk.com"/>*/}
                {/*    </a>*/}
                {/*    <a href="https://www.facebook.com/kfcrussia">*/}
                {/*        <img src={FaceBook} alt="facebook.com"/>*/}
                {/*    </a>*/}
                {/*    <a href="https://twitter.com/kfcrussia">*/}
                {/*        <img src={Twitter} alt="twitter.com"/>*/}
                {/*    </a>*/}
                {/*    <a href="https://ok.ru/group/53854456184833">*/}
                {/*        <img src={Classmates} alt="ok.ru"/>*/}
                {/*    </a>*/}
                {/*</div>*/}
                {/*<div className='flex items-center justify-between'>*/}
                {/*    <img className='mr-5' src={GoogleStore} alt=""/>*/}
                {/*    <img src={AppleStore} alt=""/>*/}
                {/*</div>*/}
            </div>
        </footer>
    );
};

export default Footer;
