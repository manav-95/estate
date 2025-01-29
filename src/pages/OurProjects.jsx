import React, { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Pagination } from 'swiper/modules';

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

import HeroImage from '../assets/our-projects-images/hero-image.jpg';
import Pearl_Palace from '../assets/featured-projects/pearl-palace.jpg'

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

const OurProjects = () => {

  const swiperRef = useRef(null);

  const underConstruction = [
    { name: 'Pearl Palace', image: Pearl_Palace, flats: '2 & 3 BHK Flats', location: 'Malad (W)', },
    { name: 'Samarth C.H.S.L', image: Pearl_Palace, flats: '2 & 3 BHK Flats', location: 'Borivali (W)', },
    { name: 'Jamuna Mahal C.H.S.L', image: Pearl_Palace, flats: '2 & 3 BHK Flats', location: 'Malad (W)', },
    { name: 'Union Bank of India C.H.S.L', image: Pearl_Palace, flats: '2 & 3 BHK Flats', location: 'SantaCruz (E)', },
    { name: 'Lakshman Tower C.H.S.L', image: Pearl_Palace, flats: '2 & 3 BHK Flats', location: 'SantaCruz (E)', },
    { name: 'Tiara C.H.S.L', image: Pearl_Palace, flats: '2 & 3 BHK Flats', location: 'Borivali (W)', },
  ]

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
          <p className='my-10'>Check out exclusive Under-construction, Upcoming and Completed Redevelopment Projects by PCPL.</p>
        </div>
      </div>

      {/* UnderConstruction Section */}
      {/* <div className='max-w-7xl container mx-auto px-4 relative'>
        <div className='absolute top-56 w-full flex items-center justify-between z-50'>
          <button onClick={() => swiperRef.current?.slidePrev()} className='border-2 border-[#00d8ff] text-[#00d8ff] hover:bg-[#00d8ff] hover:text-black p-3 lg:p-4 rounded-full cursor-pointer duration-150 transition-all ease-in-out'><FaAngleLeft className='h-5 w-5' /></button>
          <button onClick={() => swiperRef.current?.slideNext()} className='border-2 border-[#00d8ff] text-[#00d8ff] hover:bg-[#00d8ff] hover:text-black p-3 lg:p-4 rounded-full cursor-pointer duration-150 transition-all ease-in-out'><FaAngleRight className='h-5 w-5' /></button>
        </div>
        <Swiper
          modules={[Autoplay, EffectCreative]}
          slidesPerView={1}
          spaceBetween={0}
          slidesPerGroup={3}
          breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
          loop={true}
          speed={500}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className='max-w-5xl container mx-auto px-4'
        >


          {underConstruction.map((item, index) =>
            <SwiperSlide key={index}>
              <div
                className='flex flex-col bg-white items-center justify-center shadow p-4 rounded'
              >
                <div className='w-full'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='w-full h-full object-center object-contain rounded'
                  />
                </div>
                <div className='flex flex-col items-center justify-center text-center bg-gray-100 w-full mt-4 p-2 -space-y-0.5 uppercase rounded'>
                  <h1 className='text-lg font-semibold'>{item.name}</h1>
                  <p className='text-base font-medium text-gray-500'>{item.flats}</p>
                  <p className='text-base font-medium text-gray-500'>{item.location}</p>
                </div>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div> */}
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 sm:px-8 z-50 transform -translate-y-1/2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="border-2 border-[#00d8ff] text-[#00d8ff] hover:bg-[#00d8ff] hover:text-black p-2 sm:p-3 md:p-4 rounded-full transition-all duration-150 ease-in-out"
          >
            <FaAngleLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="border-2 border-[#00d8ff] text-[#00d8ff] hover:bg-[#00d8ff] hover:text-black p-2 sm:p-3 md:p-4 rounded-full transition-all duration-150 ease-in-out"
          >
            <FaAngleRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>

        {/* Swiper Carousel */}
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
          autoplay={{ delay: 3000 }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="max-w-5xl mx-auto mb-10"
        >
          {underConstruction.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className='flex flex-col bg-white items-center justify-center p-4 rounded'
              >
                <div className='w-full'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='w-full h-full object-center object-contain rounded-sm'
                  />
                </div>
                <div className='flex flex-col items-center justify-center text-center bg-gray-100 w-full mt-4 p-2 -space-y-0.5 uppercase rounded-sm'>
                  <h1 className='text-lg font-semibold'>{item.name}</h1>
                  <p className='text-base font-medium text-gray-500'>{item.flats}</p>
                  <p className='text-base font-medium text-gray-500'>{item.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-pagination !pt-6  flex space-x-2 justify-center cursor-pointer "></div>
        </Swiper>
      </div>

    </>
  );
};

export default OurProjects;
