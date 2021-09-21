import React, {useState} from 'react';
import MenuCard from "./MenuCard";
import {useSelector} from "react-redux";

const Menu = () => {

    const goods = useSelector(state => state.goods.goods)

    const {burgers, twisters, baskets} = goods
    console.log(goods)


    return (
        <>
            <div>
                {/*<div className='flex items-center flex-wrap bg-gray-100 mt-5'>*/}
                {/*    {burgers.map((it) =>*/}
                {/*        <MenuCard*/}
                {/*            key={it.id}*/}
                {/*            name={it.name}*/}
                {/*            img={it.img}*/}
                {/*            price={it.price}*/}
                {/*            hit={it.hit}*/}
                {/*            newProduct={it.newProduct}*/}
                {/*        />)}*/}
                {/*</div>*/}
                {/*<div className='flex items-center flex-wrap'>*/}
                {/*    {twisters.map((it) =>*/}
                {/*        <MenuCard*/}
                {/*            key={it.id}*/}
                {/*            name={it.name}*/}
                {/*            img={it.img}*/}
                {/*            price={it.price}*/}
                {/*            hit={it.hit}*/}
                {/*            newProduct={it.newProduct}*/}
                {/*        />)}*/}
                {/*</div>*/}
                {/*<div className='flex items-center flex-wrap bg-gray-200'>*/}
                {/*    {baskets.map((it) =>*/}
                {/*        <MenuCard key={it.id}*/}
                {/*                  name={it.name}*/}
                {/*                  img={it.img}*/}
                {/*                  price={it.price}*/}
                {/*                  hit={it.hit}*/}
                {/*                  newProduct={it.newProduct}*/}
                {/*        />)}*/}
                {/*</div>*/}
            </div>
        </>
    );
}

export default Menu;
