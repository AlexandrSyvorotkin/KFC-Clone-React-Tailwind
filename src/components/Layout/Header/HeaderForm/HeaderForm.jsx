import React from 'react';

const HeaderForm = () => {

    return (
        <>
            <div className='bold text-4xl mb-5 font-bold'>Доставка город Москва</div>
            <form className='flex items-center justify-start'>
                <div className='flex items-center text-2xl font-bold mr-8 '>
                    <label className='mr-3' htmlFor="street">Улица</label>
                    <input className='bg-gray-200 rounded-full' type='text' placeholder="Остоженка"/>
                </div>
                <div className='flex items-center text-2xl font-bold mr-8 '>
                    <label className='mr-3' htmlFor="house">Дом</label>
                    <input className='bg-gray-200 rounded-full' type='number' placeholder='8'/>
                </div>
                <div>
                    <button className='bg-gray-200 rounded-full w-36 h-12 ml-8 hover:bg-red-500' type='submit'>Подтвердить</button>
                </div>
            </form>
        </>
    );
};

export default HeaderForm;
