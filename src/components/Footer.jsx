import React from 'react'
import StayInTouch from './StayInTouch'
import Logo from '../assets/white-logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

const Footer = () => {

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Projects', path: '/our-projects' },
    { name: 'Revedevlopment', path: '/redevelope-with-us' },
    { name: 'Corporate Governance', path: '/corporate-governance' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact-us' },
    { name: 'Terms & Conditions', path: '/terms-and-conditions' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
  ]

  return (
    <>
      <StayInTouch />
      <footer className="w-full bg-[#333333] text-white py-8">
        <div className="max-w-7xl container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Logo and Heading */}
            <div className='flex flex-col items-start justify-start'>
              <img src={Logo} alt="Logo" className="h-26 w-36" />
              {/* <h2 className="text-2xl font-bold uppercase">VIR GROUP</h2> */}
              <p className='text-base min-[425px]:text-sm mt-6 mb-8'>VIR Group Private Limited is a Mumbai-based redevelopment company with a decade-long reputation for building high-quality homes on schedule, with complete honesty and transparency.</p>
              <div className="flex space-x-4 mb-4">
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


            {/* QUICK LINKS */}
            <div>
              <div className='h-1.5 w-16 bg-[#00d8ff] mb-2.5'></div>
              <h3 className="text-3xl font-semibold">Quick Links</h3>
              <div className='grid grid-cols-2 mt-4'>
                <div className='flex flex-col'>
                  {navItems.slice(0, 5).map((item, index) =>
                    <NavLink
                      key={index}
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? 'text-[#00d8ff] text-lg mb-2'
                          : 'text-base mb-2 hover:text-lg transition-all duration-150 ease-in-out'
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}
                </div>
                <div className='flex flex-col'>
                  {navItems.slice(5).map((item, index) =>
                    <NavLink
                      key={index}
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? 'text-[#00d8ff] text-lg mb-2'
                          : 'text-base mb-2 hover:text-lg transition-all duration-150 ease-in-out'
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div>
              <div className='h-1.5 w-16 bg-[#00d8ff] mb-2.5'></div>
              <h3 className="text-3xl font-semibold mb-2">Contact Info</h3>
              <div className='flex flex-col space-y-2 my-4'>
                <p className="text-base tracking-wide">Phone : +91 93262 87741</p>
                <p className="text-base tracking-wide">Email : virparadisesales@gmail.com</p>
                <p className="text-base tracking-wider">Address : B- 605, Express Zone, OPP Oberoi Mall, Western Express Highway, Malad East, Mumbai - 400 097</p>
              </div>
            </div>

            {/* Social Media */}
            {/* <div>
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-red-400">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-red-400">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-red-400">
                  <FaInstagram />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-red-400">
                  <FaLinkedin />
                </a>
              </div>
            </div> */}

            {/* Map */}
            {/* <div>
              <h3 className="text-lg font-semibold mb-2">Find Us</h3>
              <iframe
                className='w-full h-[240px] min-[425px]:h-[300px] sm:h-[360px] lg:h-[140px] xl:h-[180px] '
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1652.2363250526444!2d72.85620321479436!3d19.280419029934272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b14b85471899%3A0xafed9628453dbe6!2sA9business!5e1!3m2!1sen!2sin!4v1737793501523!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>  */}

          </div>
        </div>

        <div className='max-w-7xl container mx-auto px-4 mt-6' >
          <hr />
        </div>

        <div className="text-center text-base mt-8 tracking-wide lg:tracking-wider">
          <p className='mb-1'>&copy; {new Date().getFullYear()} Vir Group. All rights reserved.</p>
          <a href='https://a9business.in/' target='_blank' className='text-[#00d8ff]'>Designed by a9business.in</a>
        </div>
      </footer>
    </>
  )
}

export default Footer