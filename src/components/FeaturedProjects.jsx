import React from 'react'

import Krishna_Koyna_Day from '../assets/featured-projects/completed-projects/krishna-koyna-day.jpg'
import Global_Residency from '../assets/featured-projects/completed-projects/global-residency.jpeg'
import Vir_Enclave from '../assets/featured-projects/under-construction/vir-enclave-night.jpg'

const FeaturedProjects = () => {
  const projects = [
    { name: 'Krishna Koyna', image: Krishna_Koyna_Day, flats: '2 & 3 BHK Flats', location: 'Malad (W)', },
    { name: 'Global Residency', image: Global_Residency, flats: '2 & 3 BHK Flats', location: 'Borivali (W)', },
    { name: 'Vir Enclave', image: Vir_Enclave, flats: '2 & 3 BHK Flats', location: 'Malad (W)', },
    // { name: 'Union Bank of India C.H.S.L', image: Pearl_Palace, flats: '2 & 3 BHK Flats', location: 'SantaCruz (E)', },
    // { name: 'Lakshman Tower C.H.S.L', image: Pearl_Palace, flats: '2 & 3 BHK Flats', location: 'SantaCruz (E)', },
    // { name: 'Tiara C.H.S.L', image: Pearl_Palace, flats: '2 & 3 BHK Flats', location: 'Borivali (W)', },
  ]
  return (
    <>
      <div className='max-w-7xl container mx-auto py-16 px-4'>
        {/* head Section */}
        <div className='text-center'>
          <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Let Our Work Do the Talking</h1>
          <h1 className='text-xl min-[425px]:text-2xl sm:text-3xl font-medium'>Our Featured Projects</h1>
        </div>

        {/* grid Section */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-12 lg:pt-10 xl:pt-14'>
          {projects.map((project, index) =>
            <div
              key={index}
              className='flex flex-col bg-white items-center justify-center shadow p-2 rounded'
            >
              <div className='w-full'>
                <img
                  src={project.image}
                  alt={project.name}
                  className='w-full h-full object-center object-cover aspect-[4/5] rounded'
                />
              </div>
              <div className='flex flex-col items-center justify-center text-center bg-gray-100 w-full mt-2 px-2 py-1 space-y-0 uppercase rounded'>
                <h1 className='text-lg font-medium'>{project.name}</h1>
                <p className='text-sm font-medium text-gray-500'>{project.flats}</p>
                <p className='text-sm font-medium text-gray-500'>{project.location}</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </>
  )
}


export default FeaturedProjects