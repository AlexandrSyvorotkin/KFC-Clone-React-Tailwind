import React from 'react';
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

    return (
        <footer>
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
            <div className='grid grid-cols-7 h-10 mt-4'>
                <div className='col-span-4 flex justify-end'>
                    <a className='mr-7' href="https://vk.com/kfcrussia">
                        <img src={VK} alt="vk.com"/>
                    </a>
                    <a className='mr-7' href="https://www.facebook.com/kfcrussia">
                        <img src={FaceBook} alt="facebook.com"/>
                    </a>
                    <a className='mr-7' href="https://twitter.com/kfcrussia">
                        <img src={Twitter} alt="twitter.com"/>
                    </a>
                    <a className='mr-7' href="https://ok.ru/group/53854456184833">
                        <img src={Classmates} alt="ok.ru"/>
                    </a>
                </div>
                <div className='col-span-3 flex items-center justify-end'>
                    <img className='mr-2' src={GoogleStore} alt=""/>
                    <img src={AppleStore} alt=""/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
