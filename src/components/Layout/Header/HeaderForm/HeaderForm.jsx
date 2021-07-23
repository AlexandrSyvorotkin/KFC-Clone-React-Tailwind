import React from 'react';

const HeaderForm = () => {
    //todo: tailwind form need to be completed
    return (
        <>
            <div className='bold text-4xl mb-5 font-bold'>Доставка город Москва</div>
            <form className='flex'>
                <div className='flex items-center text-2xl font-bold mr-8'>
                    <label className='mr-3' htmlFor="street">Улица</label>
                    <input type='text' placeholder="Остоженка"/>
                </div>
                <div className='flex items-center text-2xl font-bold mr-8'>
                    <label className='mr-3' htmlFor="house">Дом</label>
                    <input type='number' placeholder='8'/>
                </div>
            </form>
        </>
    );
};

export default HeaderForm;
