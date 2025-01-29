import React from 'react';
import Hero from '../components/Hero';
import AboutCard from '../components/AboutCard';
import InfoCards from '../components/InfoCards';
import BG from '../assets/bg.jpg';
import FeaturedProjects from '../components/FeaturedProjects';

import Map from '../assets/project-map.jpg'
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
      {/* Outer container with a fixed background */}
      <div
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          height: '100vh',
        }}
        className='overflow-y-auto h-screen'
      >
        <div className='bg-[#333333]'>
          <Hero />
        </div>
        <div className="bg-white ">
          <AboutCard />
        </div>
        <div className='bg-transparent'>
          <InfoCards />
        </div>
        <div className='bg-white'>
          <FeaturedProjects />
          <div className="overflow-x-auto sm:overflow-x-none w-full h-[400px] sm:h-[350px] md:h-[440px] lg:h-[600px]">
            <div className="w-max sm:w-full h-full">
              <img src={Map} alt="project map" className="w-full h-full object-center object-cover" />
            </div>
          </div>
<Testimonials />
        </div>
      </div>
    </>
  );
};

export default Home;
