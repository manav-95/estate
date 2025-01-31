import React, { useState } from 'react'

import faqs from '../data/FAQ'

import { FaPlus, FaMinus } from 'react-icons/fa';

import HeroImage from '../assets/hero-images/building-1.jpg'

import Testimonials from '../components/Testimonials'

const RedevelopeWithUs = () => {

  const [activeButton, setActiveButton] = useState(null);

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

  const buttons = [
    { id: '1', title: 'What documents are needed for the vetting process for redevelopent?', },
    { id: '2', title: 'Are buyers protected, and if so, how?', },
    { id: '3', title: 'How to choose the right developer for redevelopment?', },
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


      {/* FAQ's SECTION */}
      <div className='max-w-7xl container mx-auto px-4'>
        {/* HEADING */}
        <div className='flex justify-center items-center text-center'>
          <h1 className='text-4xl font-medium uppercase'>FAQ's on Redevelopment</h1>
        </div>

        {/* BUTTONS */}
        <div className="max-w-7xl container mx-auto">
          {/* BUTTONS */}
          <div className="flex flex-col justify-start items-center space-y-4 py-12">
            {buttons.map((button) => (
              <div key={button.id} className="w-full">

                {/* BUTTON */}
                <button
                  onClick={() => setActiveButton(activeButton === button.id ? null : button.id)} // Toggle content
                  className="w-full flex justify-between items-start text-left border-l-[5px] border-[#4169e1] py-3 px-3 sm:p-4 md:px-6 md:py-4 bg-white cursor-pointer"
                >
                  <h1 className="text-lg min-[425px]:text-lg  font-medium uppercase">{button.title}</h1>
                  {activeButton === button.id ? (
                    <FaMinus className="h-5 w-5 text-[#4169e1] flex-shrink-0" />
                  ) : (
                    <FaPlus className="h-5 w-5 text-[#4169e1] flex-shrink-0" />
                  )}
                </button>

                {/* BUTTON CONTENTS */}
                <div
                  className={`overflow-hidden transition-all duration-150 ${activeButton === button.id ? 'h-full opacity-100 py-4' : 'max-h-0 opacity-0'
                    } mt-4`}
                >
                  <div className="px-4">
                    {faqs
                      .filter((faq) => faq.id === button.id)
                      .map((faq) =>
                        <div
                          key={faq.id}
                        >
                          {/* display when there is a heading in an object */}
                          {faq.heading &&
                            <div className='max-w-6xl container mx-auto mb-6'>
                              <p className='text-base'>{faq.heading}</p>
                            </div>
                          }

                          {/* display when there is a paragraph in an object */}
                          {faq.paragraph &&
                            <p>{faq.paragraph}</p>
                          }

                          {/* display when there is any contents in an object */}
                          {faq.contents &&
                            <>
                              {/* ARRAY OF CONTENTS */}
                              {faq.contents.map((content, index) =>
                                <div
                                  key={index}
                                >
                                  <div className="max-w-6xl comtainer mx-auto text-left border-l-[5px] border-[#4169e1] mb-2.5 py-2.5 px-3 sm:py-3.5 sm:px-4 md:px-6 md:py-3 bg-white cursor-pointer">
                                    <p className='text-base min-[425px]:text-base font-medium uppercase'>{content}</p>
                                  </div>
                                </div>
                              )}
                            </>
                          }
                        </div>
                      )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

      {/* TESTIMONIALS SECTION */}
      <Testimonials />
    </>
  )
}

export default RedevelopeWithUs