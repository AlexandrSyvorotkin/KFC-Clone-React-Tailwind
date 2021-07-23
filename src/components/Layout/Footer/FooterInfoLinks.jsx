import React from 'react';

const FooterInfoLinks = ({title, links}) => {


    return (
        <ul className='overflow-hidden list-none p-0'>
            <h3 className='font-bold'>{title}</h3>
            {links.map((item)=> <li className='mb-3' key={item}>{item}</li>)}
        </ul>
    );
};

export default FooterInfoLinks;
