import React from 'react';
import MenuCard from "./MenuCard";
import styles from './Menu.module.css'

const Menu = (menu) => {
    const data = Object.values(menu)

    const {burgers, twisters, baskets} = data[0]

    return (
        <div className={styles.menu_cards}>
            {/*<div>*/}
            {/*    {burgers.map((it) => <MenuCard key={it.id} name={it.name} img={it.img} price={it.price}/>)}*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    {twisters.map((it) => <MenuCard key={it.id} name={it.name} img={it.img} price={it.price}/>)}*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    {baskets.map((it) => <MenuCard key={it.id} name={it.name} img={it.img} price={it.price}/>)}*/}
            {/*</div>*/}
        </div>
    );
}

export default Menu;
