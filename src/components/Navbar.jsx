import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'

import { RiMenuFill, RiCloseFill } from "react-icons/ri";

import Logo from '../assets/white-logo.png'

import Building1 from '../assets/category-images/building-1.jpg'

// UNDERCONSTRUCTION PROJECTS IMAGES 
import Vir_Enclave from '../assets/featured-projects/under-construction/vir-enclave-day.jpg'

// COMPLETED PROJECTS IMAGES 
import Krishna_Koyna_Day from '../assets/featured-projects/completed-projects/krishna-koyna-day.jpg'
import Global_Residency from '../assets/featured-projects/completed-projects/global-residency.jpeg'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', },
    {
      name: 'Our Projects',
      path: '/our-projects',
      type: 'dropdown',
    },
    { name: 'Redevelop with us', path: '/redevelope-with-us', },
    { name: 'Corporate Governance', path: '/corporate-governance', },
    { name: 'About us', path: '/about-us', },
    { name: 'Contact us', path: '/contact-us', },
  ]

  const CategoryItems = [
    {
      id: 1,
      categoryName: 'Under Construction',
      categoryTitle: 'Redevelopment Projects',
      items: [
        { image: Vir_Enclave, title: 'Vir Enclave', flats: '2 & 3 BHK Flats', location: 'Location Here, Mumbai', },
        //{ image: Building1, title: 'Jamuna Mahal C.H.S.L', flats: '2 & 3 BHK Flats', location: 'SantaCruz East, Mumbai', },
        //{ image: Building1, title: 'Jamuna Mahal C.H.S.L', flats: '2 & 3 BHK Flats', location: 'SantaCruz East, Mumbai', },
      ],
      buttonText: 'view more',
      path: '#',
    },


    {
      id: 2,
      categoryName: 'Upcoming',
      categoryTitle: 'Redevelopment Projects',
      items: [
        { image: Building1, title: 'Krishna Koyna', flats: '2 & 3 BHK Flats', location: 'Location Here, Mumbai', },

      ],
      buttonText: 'view more',
      path: '#',
    },


    {
      id: 3,
      categoryName: 'Completed',
      categoryTitle: 'Redevelopment Projects',
      items: [
        { image: Krishna_Koyna_Day, title: 'Krishna Koyna', flats: '2 & 3 BHK Flats', location: 'Location Here, Mumbai', },
        { image: Global_Residency, title: 'Global Residency', flats: '2 & 3 BHK Flats', location: 'Location Here, Mumbai', },
        //{ image: Building1, title: 'Jamuna Mahal C.H.S.L', flats: '2 & 3 BHK Flats', location: 'SantaCruz East, Mumbai', },
      ],
      buttonText: 'view more',
      path: '#',
    },

  ]

  return (
    <>
      <div className='w-full bg-[#333333] text-white shadow-lg fixed left-0 top-0 z-50 px-4 poppins-regular'>
        <div className='flex items-center justify-between py-6'>

          {/* Logo section  */}
          <div className='flex justify-items-start items-center space-x-2'>
            <div>
            <img
              src={Logo}
              alt="logo"
              className='h-16 min-[425px]:h-10 w-full object-center object-cover'
            />
            </div>
            <h1 className='hidden min-[425px]:block text-3xl uppercase font-bold'>VR Group</h1>
          </div>
          {/* <div className='flex flex-col min-[425px]:flex-row items-start justify-start space-x-2'>
            <h1 className='text-2xl min-[425px]:text-2xl sm:text-3xl lg:text-3xl xl:text-4xl uppercase font-semibold'>Amar</h1>
            <h1 className='text-2xl min-[425px]:text-2xl sm:text-3xl lg:text-3xl xl:text-4xl uppercase font-semibold text-[#00d8ff]'>Constructions</h1>
          </div> */}

          {/* Links For Small Screens */}
          {/* Mobile Menu Button */}
          <div className='lg:hidden'>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <RiCloseFill className='h-9 w-9' /> : <RiMenuFill className='h-9 w-9' />}
            </button>
          </div>


          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className='lg:hidden bg-[#333333] text-white fixed top-28 min-[425px]:top-20 left-0 w-full flex flex-col items-start justify-center p-2'>
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'w-full py-3 uppercase px-2 text-black text-lg font-medium bg-[#00d8ff] rounded-xs'
                      : 'w-full py-3 uppercase px-2 text-white text-lg font-medium rounded-xs'
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          )}

          {/* Links Section for Large Screen*/}
          <div className='hidden lg:flex'>
            <ul className='flex items-center justify-center'>
              {navItems.map((item, index) =>
                <li
                  key={index}
                  className='relative'
                >
                  {item.type === "dropdown" ? (
                    <div
                      className='cursor-pointer'
                      onMouseEnter={() => setShowDropdown(true)}
                      onMouseLeave={() => setShowDropdown(false)}
                    >
                      {/* <p className='text-lg font-medium hover:bg-[#00d8ff] hover:text-black py-1.5 px-4 hover:font-semibold uppercase '>{item.name}</p> */}
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          isActive
                            ? ' text-sm xl:text-lg font-semibold bg-[#00d8ff] text-black py-2 px-2.5 lg:px-2.5 xl:py-2.5 xl:px-5 uppercase'
                            : ' text-sm xl:text-lg font-medium hover:bg-[#00d8ff] hover:text-black py-2 px-2.5 lg:px-2.5 xl:py-2.5 xl:px-5 uppercase'
                        }
                      >
                        {item.name}
                      </NavLink>
                      {showDropdown && (
                        <div className="absolute lg:-translate-x-[370px] xl:-translate-x-80 bg-gray-100 w-5xl py-8 px-4 rounded shadow-xl lg:mt-0.5  xl:mt-2">
                          <div className="flex items-start justify-evenly space-x-6">
                            {/* Map through each category */}
                            {CategoryItems.map((category) => (
                              <div key={category.id} className="">
                                {/* Category Name */}
                                <h2 className="text-lg font-medium mb-0 text-gray-700 uppercase">{category.categoryName}</h2>
                                <h3 className="text-lg font-medium mb-4 text-[#00d8ff] uppercase border-b-2 pb-2 border-gray-300">{category.categoryTitle}</h3>

                                {/* Map through items in the category */}
                                <ul className="space-y-4">
                                  {category.items.map((item, index) => (
                                    <li key={index} className="group flex items-center justify-start space-x-4 pb-2">
                                      {/* Image */}
                                      <div className="flex-shrink-0">
                                        {item.image ? (
                                          <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-24 h-16 object-fill bg-gray-300"
                                          />
                                        ) : (
                                          <div className="w-24 h-16 bg-gray-100"></div>
                                        )}
                                      </div>

                                      {/* Title and Details */}
                                      <div className="flex flex-col uppercase">
                                        <h4 className="text-sm text-gray-700 font-medium group-hover:underline">{item.title}</h4>
                                        <p className="text-sm text-gray-600">{item.flats}</p>
                                        <p className="text-sm text-gray-500">{item.location}</p>
                                      </div>
                                    </li>

                                  ))}
                                  <div className='w-full flex justify-start mb-2'>
                                    <a
                                      href={category.path}
                                      target='_blank'
                                      className='text-md bg-[#00d8ff] text-black px-3 py-1 rounded-xs'
                                    >
                                      {category.buttonText}
                                    </a>
                                  </div>
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>

                      )}
                    </div>
                  ) : (
                    <>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          isActive
                            ? 'text-sm xl:text-lg font-semibold bg-[#00d8ff] text-black py-2 px-2.5 lg:px-2.5 xl:py-2.5 xl:px-5 uppercase'
                            : 'text-sm xl:text-lg font-medium hover:bg-[#00d8ff] py-2 px-2.5 lg:px-2.5 xl:py-2.5 xl:px-5 uppercase'
                        }
                      >
                        {item.name}
                      </NavLink>
                    </>
                  )}
                </li>
              )}
            </ul>
          </div>


        </div>
      </div >
    </>
  )
}

export default Navbar