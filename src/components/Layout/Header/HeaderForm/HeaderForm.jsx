import React from 'react';

const HeaderForm = () => {
    return (
        <>
            <div className='bold text-4xl mb-5'>Доставка город Москва</div>
            <form className='flex'>
                <div className='flex items-center text-2xl bold mr-8'>
                    <label className='mr-3' htmlFor="street">Улица</label>
                    <input type='text' placeholder="Остоженка"/>
                </div>
                <div className='flex items-center text-2xl bold mr-8'>
                    <label className='mr-3' htmlFor="house">Дом</label>
                    <input type='number' placeholder='8'/>
                </div>
            </form>
        </>
    );
};

export default HeaderForm;
