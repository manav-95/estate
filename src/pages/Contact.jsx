import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

import HeroImage from '../assets/contact-us-images/contact-hero.jpg'

const Contact = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div className="relative w-full h-[580px] bg-center bg-cover" style={{ backgroundImage: `url(${HeroImage})` }}>
        {/* Overlay using Tailwind 4.0 syntax */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]"></div>

        {/* Content on top of the overlay */}
        <div className="relative h-full w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl container mx-auto flex flex-col justify-center text-white text-center px-4">

          <h1 className="text-4xl md:text-5xl font-semibold uppercase">
            Contact Us
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
              <div>
                <textarea
                  placeholder='Message'
                  rows="4"
                  className='border-2 border-white w-full py-3 px-4 rounded-xs outline-none'
                />
              </div>
              <div className='w-full'>
                <button
                  type='submit'
                  className='bg-[#00d8ff] py-2.5 px-12 w-full md:w-fit uppercase text-lg font-semibold text-black rounded-xs cursor-pointer'
                >
                  Submit
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>

      <div className='max-w-5xl container mx-auto py-16 px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-10'>
          <div>
            <div className=''>
              <h1 className='text-5xl font-medium'>VIR Group</h1>
            </div>

            <div className='pt-2.5 leading-7'>
              <p className='text-lg font-medium'>Our registered office is located at</p>
              <p>B- 605, Express Zone, OPP Oberoi Mall,</p>
              <p>Western Express Highway, Malad East,</p>
              <p>Mumbai - 400 097</p>
            </div>

            <div className='pt-6 leading-7'>
              <p className='flex items-baseline gap-2'><p className='text-lg font-medium'>HR : </p>+91 93262 87741</p>
              <p className='flex items-baseline gap-2'><p className='text-lg font-medium'>Sales : </p>+91 93262 87741</p>
              <p className='flex items-baseline gap-2'><p className='text-lg font-medium'>Office : </p>+91 93262 87741</p>
              
            </div>

            <div className='flex justify-start items-start pt-6 leading-7'>
            <h1 className='text-lg font-medium mr-2'>Email : </h1>
            <div>
                <p>virparadisesales@gmail.com</p>
                <p>virparadisesales@gmail.com</p>
                <p>virparadisesales@gmail.com</p>
              </div>
            </div>

            <div className='pt-6'>
              <h1 className='text-2xl font-medium'>Follow Us</h1>
              <div className='flex items-center justify-start space-x-4 my-4 text-[#333]'>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#00d8ff]">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#00d8ff]">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#00d8ff]">
                  <FaInstagram />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#00d8ff]">
                  <FaLinkedin />
                </a>
              </div>
            </div>

          </div>

          <div className='h-[300px] sm:h-full w-full'>
            <iframe 
            className='h-full w-full'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60291.33758162182!2d72.82761446021414!3d19.18608926852093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b707374fdf5b%3A0xdb893aa5be338aa0!2sExpress%20Zone%20B%20Wing!5e0!3m2!1sen!2sin!4v1738581225549!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact