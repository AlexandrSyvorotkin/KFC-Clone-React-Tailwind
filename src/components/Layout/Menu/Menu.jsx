import React from 'react';
import MenuCard from "./MenuCard";

const Menu = (menu) => {
    const data = Object.values(menu)

    const {burgers, twisters, baskets} = data[0]
    console.log(burgers)


    return (
        <>
            <div className='flex items-center flex-wrap bg-gray-100 mt-5'>
                {burgers.map((it) => <MenuCard key={it.id} name={it.name} img={it.img} price={it.price} hit={it.hit} newProduct={it.newProduct}/>)}
            </div>
            <div className='flex items-center flex-wrap'>
                {twisters.map((it) => <MenuCard key={it.id} name={it.name} img={it.img} price={it.price} hit={it.hit} newProduct={it.newProduct}/>)}
            </div>
            <div className='flex items-center flex-wrap bg-gray-200'>
                {baskets.map((it) => <MenuCard key={it.id} name={it.name} img={it.img} price={it.price} hit={it.hit} newProduct={it.newProduct}/>)}
            </div>
        </>
    );
}

export default Menu;
