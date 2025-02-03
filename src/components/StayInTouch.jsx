import React from 'react'

const StayInTouch = () => {
    return (
        <>
            <div className='w-full bg-gray-100'>
                <div className='max-w-7xl container mx-auto px-4 py-10'>
                    <div className='grid lg:grid-cols-2 gap-y-4 items-center justify-center'>
                        <div className='flex flex-col items-center justify-center text-center lg:items-start lg:text-left uppercase text-white'>
                            <h1 className='text-4xl font-semibold sm:font-bold text-black mb-2'>Stay In Touch</h1>
                            <p className='text-sm md:text-base font-semibold text-black'>Sign up for our newsletter to receive updates and exclusive offers.</p>
                        </div>
                        <div className='flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4'>
                            <input
                                type='text'
                                placeholder='ENTER EMAIL ADDRESS'
                                className='bg-white focus:border-2 focus:border-gray-200 font-medium py-3 px-3 lg:p-3.5 w-full md:w-full lg:w-72 xl:w-96 rounded-sm outline-none'
                            />
                            <button className='text-black bg-[#00d8ff] py-2 px-6 md:py-2.5 md:px-10 lg:py-3.5 w-full md:w-full lg:w-fit rounded-sm font-semibold transition-all duration-150 ease-in-out uppercase cursor-pointer'>Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StayInTouch