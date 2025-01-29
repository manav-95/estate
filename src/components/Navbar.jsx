import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Building1 from '../assets/category-images/building-1.jpg'

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', },
    {
      name: 'Our Projects',
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
        { image: Building1, title: 'Jamuna Mahal C.H.S.L', flats: '2 & 3 BHK Flats', location: 'SantaCruz East, Mumbai', },
        { image: Building1, title: 'Jamuna Mahal C.H.S.L', flats: '2 & 3 BHK Flats', location: 'SantaCruz East, Mumbai', },
        { image: Building1, title: 'Jamuna Mahal C.H.S.L', flats: '2 & 3 BHK Flats', location: 'SantaCruz East, Mumbai', },
      ],
      buttonText: 'view more',
      path: '#',
    },
    {
      id: 2,
      categoryName: 'Upcoming',
      categoryTitle: 'Redevelopment Projects',
      items: [
        { image: Building1, title: 'Jamuna Mahal C.H.S.L', flats: '2 & 3 BHK Flats', location: 'SantaCruz East, Mumbai', },

      ],
      buttonText: 'view more',
      path: '#',
    },
    {
      id: 3,
      categoryName: 'Completed',
      categoryTitle: 'Redevelopment Projects',
      items: [
        { image: Building1, title: 'Jamuna Mahal C.H.S.L', flats: '2 & 3 BHK Flats', location: 'SantaCruz East, Mumbai', },
        { image: Building1, title: 'Jamuna Mahal C.H.S.L', flats: '2 & 3 BHK Flats', location: 'SantaCruz East, Mumbai', },
        { image: Building1, title: 'Jamuna Mahal C.H.S.L', flats: '2 & 3 BHK Flats', location: 'SantaCruz East, Mumbai', },
      ],
      buttonText: 'view more',
      path: '#',
    },

  ]
  return (
    <>
      <div className='w-full bg-[#333333] text-white shadow-lg fixed left-0 top-0 z-50 px-6 poppins-regular'>
        <div className='flex items-center justify-between py-6'>

          {/* Logo section  */}
          <div className='flex items-center space-x-2'>
            <h1 className='text-4xl uppercase font-semibold'>Amar</h1>
            <h1 className='text-4xl uppercase font-semibold text-[#00d8ff]'>Constructions</h1>
          </div>

          {/* Links Section */}
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
                    <p className='text-lg font-medium hover:bg-[#00d8ff] hover:text-black py-1.5 px-4 hover:font-semibold uppercase '>{item.name}</p>
                    {showDropdown && (
                      <div className="absolute -translate-x-80 bg-gray-100 w-5xl py-8 px-4 rounded shadow-xl">
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
                                  <li key={index} className="group flex items-center justify-center space-x-4 pb-2">
                                    {/* Image */}
                                    <div className="flex-shrink-0">
                                      {item.image ? (
                                        <img
                                          src={item.image}
                                          alt={item.title}
                                          className="w-24 h-16 object-contain bg-gray-300"
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
                          ? 'text-lg font-semibold bg-[#00d8ff] text-black py-2 px-4 uppercase'
                          : 'text-lg font-medium hover:bg-[#00d8ff] py-2 px-4 uppercase'
                      }
                    >
                      {item.name}
                    </NavLink>
                  </>
                )}
              </li>
            )}
          </ul>

          {/* Menu Section */}
          <div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar