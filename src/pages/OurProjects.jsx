import React, { useRef } from 'react';

import underConstruction from '../data/UnderConstructionData';
import completedConstruction from '../data/CompletedConstructionData';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Pagination } from 'swiper/modules';

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

import HeroImage from '../assets/our-projects-images/hero-image.jpg';
import { NavLink } from 'react-router-dom';


const OurProjects = () => {

  const swiperUnderConstructionRef = useRef(null);
  const swiperCompletedRef = useRef(null);

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[480px] bg-center bg-cover" style={{ backgroundImage: `url(${HeroImage})` }}>
        {/* Overlay using Tailwind 4.0 syntax */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)]"></div>

        {/* Content on top of the overlay */}
        <div className="relative h-full w-full flex justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Redevelopment Projects In Mumbai
          </h1>
        </div>
      </div>

      {/* Paragraph Section */}
      <div className='max-w-7xl container mx-auto px-4 py-10'>
        <div className='text-xl text-center leading-10'>
          <p className=''>
            Redevelopment Projects in Mumbai from PCPL is known for offering quality living. Each of our upcoming and under-constructionredevelopment projects offers premium facilities and amenities. We take pride in each of our redevelopmentprojects so that it offers a perfect blend of simplicity and elegance. With a significant part to play in the real estate industry, our journey has been inspired by the ever-evolving living habits of people. So, what are you waiting for? Buy a flat in Mumbai and enjoy an urban elegant lifestyle.
          </p>
          <p className=''>Check out exclusive Under-construction, Upcoming and Completed Redevelopment Projects by PCPL.</p>
        </div>
      </div>

      {/* UnderConstruction Section */}
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* head section */}
        <div className='flex justify-center items-center text-center'>
          <h1 className='text-4xl font-medium uppercase'>Under Construction Redevelopment Projects</h1>
        </div>
        {/* Navigation Buttons */}
        {/* <div className="absolute top-3/5 min-[425px]:top-1/2 sm:top-1/2 left-0 right-0 flex justify-between px-4 sm:px-8 transform -translate-y-1/2"> */}
        <button
          onClick={() => swiperUnderConstructionRef.current?.slidePrev()}
          className="absolute top-3/5 min-[425px]:top-1/2 sm:top-1/2 lg:top-3/7 left-2  transform -translate-y-1/2 bg-[#333] text-white z-10 cursor-pointer p-4 sm:p-3 md:p-4 rounded-full transition-all duration-150 ease-in-out"
        >
          <FaAngleLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button
          onClick={() => swiperUnderConstructionRef.current?.slideNext()}
          className="absolute top-3/5 min-[425px]:top-1/2 sm:top-1/2 lg:top-3/7 right-2 transform -translate-y-1/2 bg-[#333] text-white z-10 cursor-pointer p-4 sm:p-3 md:p-4 rounded-full transition-all duration-150 ease-in-out"
        >
          <FaAngleRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        {/* </div> */}

        <Swiper
          modules={[Autoplay, EffectCreative, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          slidesPerGroup={1}
          breakpoints={{
            640: { slidesPerView: 2, slidesPerGroup: 1 },
            1024: { slidesPerView: 3, slidesPerGroup: 1 },
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination"
          }}
          loop={true}
          speed={500}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          onSwiper={(swiper) => (swiperUnderConstructionRef.current = swiper)}
          className="max-w-5xl mx-auto my-10"
        >
          {underConstruction.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className='group hover:shadow-lg flex flex-col bg-white items-center justify-center p-4 rounded'
              >
                <div className='w-full h-ful relative group'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='w-full h-full object-center object-contain rounded-sm'
                  />
                  <div className='w-full lg:hidden lg:group-hover:flex justify-center items-center group-hover:absolute bg-[rgba(0,0,0,0.4)] inset-0 rounded'>
                    <NavLink
                      to={`/project/${item.name}`}
                    >
                      <button className='w-full lg:w-fit bg-[rgba(0,0,0,0.8)] text-white py-2 min-[425px]:py-3 sm:py-2 md:py-3 px-6 cursor-pointer uppercase'>{item.buttonText}</button>
                    </NavLink>
                  </div>
                </div>
                <div className='group-hover:bg-gray-50 flex flex-col items-center justify-center text-center bg-gray-100 w-full mt-4 p-2 -space-y-0.5 uppercase rounded-sm'>
                  <h1 className='text-sm min-[425px]:text-lg min-[425px]:font-semibold font-bold text-black'>{item.name}</h1>
                  <p className='text-xs min-[425px]:text-base min-[425px]:font-medium font-semibold text-gray-500'>{item.flats}</p>
                  <p className='text-xs min-[425px]:text-base min-[425px]:font-medium font-semibold text-gray-500'>{item.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* paginations dots */}
          <div className="custom-pagination !pt-5  flex space-x-2 justify-center cursor-pointer "></div>
        </Swiper>
      </div>



    </>
  );
};

export default OurProjects;
