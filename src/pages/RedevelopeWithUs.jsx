import React from 'react'
import HeroImage from '../assets/hero-images/building-1.jpg'

import Testimonials from '../components/Testimonials'

const RedevelopeWithUs = () => {

  const whyUs = [
    { title: 'Lorem ipsum dolor sit.', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ducimus sequi exercitationem suscipit esse provident neque nam ex tenetur itaque.', },
    { title: 'Lorem ipsum dolor sit.', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ducimus sequi exercitationem suscipit esse provident neque nam ex tenetur itaque.', },
    { title: 'Lorem ipsum dolor sit.', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ducimus sequi exercitationem suscipit esse provident neque nam ex tenetur itaque.', },
    { title: 'Lorem ipsum dolor sit.', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ducimus sequi exercitationem suscipit esse provident neque nam ex tenetur itaque.', },
    { title: 'Lorem ipsum dolor sit.', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ducimus sequi exercitationem suscipit esse provident neque nam ex tenetur itaque.', },
    { title: 'Lorem ipsum dolor sit.', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ducimus sequi exercitationem suscipit esse provident neque nam ex tenetur itaque.', },
    { title: 'Lorem ipsum dolor sit.', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ducimus sequi exercitationem suscipit esse provident neque nam ex tenetur itaque.', },
    { title: 'Lorem ipsum dolor sit.', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ducimus sequi exercitationem suscipit esse provident neque nam ex tenetur itaque.', },
  ]

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative w-full h-[480px] bg-center bg-cover" style={{ backgroundImage: `url(${HeroImage})` }}>
        {/* Overlay using Tailwind 4.0 syntax */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>

        {/* Content on top of the overlay */}
        <div className="relative h-full w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl container mx-auto flex flex-col justify-center text-white text-center px-4">

          <h1 className="text-4xl md:text-5xl font-semibold">
            Let us Help You Redevelope
          </h1>

          <form>
            <div className='grid grid-cols-1 py-8 gap-y-4'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-y-2.5 gap-x-4'>
                <input
                  type="text"
                  placeholder='Name'
                  className='border-2 border-white w-full py-3 px-4 rounded-xs outline-none'
                />
                <input
                  type="text"
                  placeholder='Email'
                  className='border-2 border-white w-full py-3 px-4 rounded-xs outline-none'
                />
                <input
                  type="text"
                  placeholder='Contact No.'
                  className='border-2 border-white w-full py-3 px-4 rounded-xs outline-none'
                />
              </div>
              <div className='w-full'>
                <button
                  type='submit'
                  className='bg-[#00d8ff] py-2.5 px-12 w-full md:w-fit uppercase text-lg font-semibold text-black rounded-xs'
                >
                  Submit
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>

      {/* GRID SECTION */}
      <div className='max-w-7xl container mx-auto px-4 py-16'>
        <div className='flex justify-center items-center text-center'>
          <h1 className='text-3xl min-[425px]:text-4xl uppercase font-medium'>Why Amar Constructions ?</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 pt-12'>
          {whyUs.map((item, index) =>
            <div
              key={index}
              className='flex flex-col items-center justify-start lg:items-start lg:text-left text-center'
            >
              <h1 className='text-xl min-[425px]:text-2xl uppercase font-medium mb-2'>{item.title}</h1>
              <p className='text-base md:text-md'>{item.description}</p>
            </div>
          )}
        </div>
      </div>

      {/* TESTIMONIALS SECTION */}
          <Testimonials />
    </>
  )
}

export default RedevelopeWithUs