import React from 'react'

const InfoCards = () => {
    const information = [
        { count: '00', title: 'Completed', text: 'Redevelopment projects with combined total developable area of', sqft: '0.00 million sq.ft.', },
        { count: '00', title: 'Under Construction', text: 'Redevelopment projects with combined total developable area of', sqft: '0.00 million sq.ft.', },
        { count: '00', title: 'Upcoming', text: 'Redevelopment projects with combined total developable area of', sqft: '0.00 million sq.ft.', },
    ]
    return (
        <>
            <div
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
            }}
            className='w-full py-16'>
                <div className='max-w-7xl container mx-auto px-4 text-white'>
                    <div className='flex justify-center mb-14'>
                        <h1 className='text-4xl lg:text-5xl uppercase text-center font-semibold'>Numbers At a Glance</h1>
                    </div>
                    <div className='grid lg:grid-cols-3 gap-y-14 py-0 lg:py-4 px-4'>
                        {information.map((info, index) =>
                            <div
                            key={index}
                            className='flex flex-col justify-center items-center text-center space-y-2 lg:space-y-3'
                            >
                                <h1 className='text-2xl min-[425px]:text-3xl font-semibold flex items-end gap-2'><p className='text-3xl min-[425px]:text-5xl lg:text-4xl xl:text-5xl'>{info.count}</p>{info.title}</h1>
                                <p className='text-sm min-[425px]:text-lg font-medium'>{info.text}</p>
                                <p className='text-2xl min-[425px]:text-3xl font-semibold'>{info.sqft}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoCards