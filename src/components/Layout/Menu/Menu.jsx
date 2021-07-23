import React from 'react';
import MenuCard from "./MenuCard";

const Menu = (menu) => {
    const data = Object.values(menu)

    const {burgers, twisters, baskets} = data[0]


    return (
        <div>
            <div className='flex items-center flex-wrap'>
                {burgers.map((it) => <MenuCard key={it.id} name={it.name} img={it.img} price={it.price}/>)}
            </div>
            {/*<div className='flex items-center'>*/}
            {/*    {twisters.map((it) => <MenuCard key={it.id} name={it.name} img={it.img} price={it.price}/>)}*/}
            {/*</div>*/}
            {/*<div className='flex items-center'>*/}
            {/*    {baskets.map((it) => <MenuCard key={it.id} name={it.name} img={it.img} price={it.price}/>)}*/}
            {/*</div>*/}
        </div>
    );
}

export default Menu;
