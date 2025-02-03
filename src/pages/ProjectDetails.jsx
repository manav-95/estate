// React Imports
import React, { useRef, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

// Data
import underConstruction from '../data/UnderConstructionData';

// Swiper React
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, A11y, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

// Components and Hooks Imports
import ImageModal from '../components/ImageModal';

// Icons
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";


const ProjectDetails = () => {

    const swiperRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const { name } = useParams();
    const content = underConstruction.find((item) => item.name === name);

    return (
        <>
            <div className='w-full'>

                {/* HERO SECTION */}
                {/* <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 w-full h-full lg:h-[600px] bg-[#333333] text-white'>

                    <div className='lg:col-span-5 xl:col-span-4 py-6 relative'>
                        <div className='flex justify-start lg:justify-center items-center h-full'>
                            <div className='lg:border-t-2 lg:border-r-2 px-10 py-8 rounded-xs'>
                                <p className='text-lg md:text-xl tracking-wider text-white uppercase'>{content.status}</p>
                                <h1 className='text-[#00d8ff] text-4xl md:text-5xl mb-2'>{content.name}</h1>
                                <p className='text-lg md:text-xl tracking-wider text-white uppercase'>{content.location},{content.city}</p>
                                <div className='flex items-center space-x-3 my-3'>
                                    {content.arrflats.map((flat, index) => (
                                        <p key={index} className='border py-1.5 px-2 min-[425px]:px-4 lg:px-4 text-gray-300 font-medium hover:text-[#00d8ff] transition-all duration-150 ease-in-out'>{flat}</p>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                  
                    <div className='lg:col-span-7 xl:col-span-8 flex flex-col justify-center'>
                        <div className="h-full lg:h-[600px]">
                            <img
                                src={content.image}
                                alt='Hero image'
                                className='w-full h-full object-cover lg:object-fill'
                            />
                        </div>
                    </div>
                    

                </div> */}

                <div className='w-full h-full min-[425px]:h-[650px] sm:h-[800px] lg:h-[800px] xl:h-[1000px] bg-[#333333] text-white'>
                        <div className="h-full">
                            <img
                                src={content.image}
                                alt='Hero image'
                                className='w-full h-full object-cover min-[425px]:object-fill'
                            />
                        </div>
                </div>


                {/* DETAILS SECTION */}
                <div className='w-full bg-[#26282a] text-white '>
                    <div className='max-w-7xl container mx-auto px-4 min-[425px]:px-8 py-14'>

                        {/* PROJECT NAME AND LOCATED AT */}
                        <div className='flex flex-col min-[425px]:items-center justify-center'>
                            <h1 className='text-4xl sm:text-5xl mb-4 text-[#00d8ff] '>{content.name}</h1>
                            <div className='flex items-start justify-center min-[425px]:text-center text-base md:text-lg font-medium text-gray-400'>
                                <FaLocationDot className='md:h-5 md:w-5 flex-shrink-0 mt-1 mr-1 md:mr-1.5' />
                                <p className=''>{content.locatedAt}</p>
                            </div>
                        </div>

                        {/* PROJECT DETAILS */}
                        <div className=' grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-14'>
                            <div className='md:px-14 lg:pl-14 xl:pl-20'>
                                <h1 className='text-[#00d8ff] text-2xl lg:text-xl xl:text-2xl mb-1.5'>Project Status</h1>
                                <p className='text-gray-400 text-lg lg:text-base xl:text-lg'>{content.status}</p>
                            </div>
                            <div className='md:px-14 lg:pl-14 xl:pl-20'>
                                <h1 className='text-[#00d8ff] text-2xl lg:text-xl xl:text-2xl mb-1.5'>Apartment Options</h1>
                                {content.apartmentOptions.map((option) =>
                                    <p className='text-gray-400 text-lg lg:text-base xl:text-lg'>{option}</p>
                                )}
                            </div>
                            <div className='md:px-14 lg:pl-14 xl:pl-20'>
                                <h1 className='text-[#00d8ff] text-2xl lg:text-xl xl:text-2xl mb-1.5'>Plot Area</h1>
                                <p className='text-gray-400 text-lg lg:text-base xl:text-lg'>{content.plotArea}</p>
                            </div>


                            <div className='md:px-14 lg:pl-14 xl:pl-20'>
                                {/* <h1 className='text-[#00d8ff] text- lg:text-xl2xl mb-1.5'>Project Status</h1> */}
                                <img
                                    src={content.qrcode}
                                    alt="QR Code"
                                    className='w-38 h-38'
                                />
                            </div>
                            <div className='md:px-14 lg:pl-14 xl:pl-20'>
                                <h1 className='text-[#00d8ff] text-2xl lg:text-xl xl:text-2xl mb-1.5'>Maharera No.</h1>
                                <p className='text-gray-400 text-lg lg:text-base xl:text-lg mb-1.5'>{content.mahareraNo}</p>
                                <p className='text-gray-400 text-base'>This Project has been Registered with MahaRERA under name of "Revedevelopment of {content.name}"</p>
                            </div>
                            <div className='md:px-14 lg:pl-14 xl:pl-20'>
                                <h1 className='text-[#00d8ff] text-2xl lg:text-xl xl:text-2xl mb-1.5'>Contact Us</h1>
                                {content.contactDetails.map((detail, index) => {
                                    const IconComponent = detail.icon;
                                    return (
                                        <p className='flex items-center text-gray-400 text-lg lg:text-base xl:text-lg'><IconComponent className='h-4 w-4 mt-1 mr-1.5 flex-shrink-0' /> {detail.detail}</p>
                                    );
                                })}
                            </div>
                        </div>

                        {/* REQUEST FORM */}
                        <div className='w-full pt-14'>
                            <form>
                                <div className='flex justify-center items-center mb-1'>
                                    <h1 className='text-[#00d8ff] text-2xl lg:text-xl xl:text-2xl mb-1.5'>Request For More Details</h1>
                                </div>
                                <div className='grid grid-cols-1 py-4 gap-y-4'>
                                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-y-2.5 gap-x-4 md:px-14'>
                                        <input
                                            type="text"
                                            placeholder='Name'
                                            className='border-2 border-gray-400 w-full py-3 px-4 rounded-xs outline-none'
                                        />
                                        <input
                                            type="text"
                                            placeholder='Email'
                                            className='border-2 border-gray-400 w-full py-3 px-4 rounded-xs outline-none'
                                        />
                                        <input
                                            type="text"
                                            placeholder='Contact No.'
                                            className='border-2 border-gray-400 w-full py-3 px-4 rounded-xs outline-none'
                                        />
                                    </div>
                                    <div className='w-full flex justify-center my-1'>
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
                </div>


                {/* AMINITIES SECTION */}
                <div className='w-full bg-gray-200'>
                    <div className='max-w-7xl lg:max-w-6xl container mx-auto px-4 py-16'>
                        <div className='flex justify-center items-center text-center'>
                            <h1 className='text-5xl'>Indoor & Outdoor Amenities</h1>
                        </div>
                        <div className='grid grid-cols-1 min-[425px]:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-16 pt-20'>
                            {content.amenities.map((ameniti, index) =>
                                <div
                                    key={index}
                                    className='flex flex-col items-center justify-center'
                                >
                                    <img
                                        src={ameniti.image}
                                        alt={ameniti.text}
                                        className='h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-20 lg:w-20 mb-4'
                                    />
                                    <h1 className='text-base sm:text-lg md:text-xl lg:text-lg'>{ameniti.text}</h1>
                                </div>
                            )}
                        </div>
                    </div>
                </div>


                {/* FLOOR PLAN SECTION */}
                <div className='w-full bg-white'>
                    <div className='max-w-7xl container mx-auto px-4 py-14'>
                        <div className='flex justify-center items-center text-center'>
                            <h1 className='text-5xl'>Floor Plan</h1>
                        </div>

                        <Swiper
                            modules={[Pagination, A11y, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={3}
                            slidesPerGroup={1}
                            breakpoints={{
                                0: { slidesPerView: 1, },
                                640: { slidesPerView: 2, },
                                1024: { slidesPerView: 3, },
                            }}
                            autoplay={{
                                delay: 4000,
                                pauseOnMouseEnter: true,
                            }}
                            pagination={{
                                clickable: true,
                                el: ".custom-pagination"
                            }}
                            draggable={true}
                            loop={false}
                            speed={500}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            className=""
                        >

                            {/* SLIDES CHANGE BUTTONS */}
                            {content.floorPlans.length >= 4 && (
                                <>
                                    <button
                                        onClick={() => swiperRef.current?.slidePrev()}
                                        className="absolute top-3/5 min-[425px]:top-1/2 sm:top-1/2 lg:top-4/8 left-2  transform -translate-y-1/2 bg-[#333] text-white z-10 cursor-pointer p-4 sm:p-3 md:p-4 rounded-full transition-all duration-150 ease-in-out"
                                    >
                                        <FaAngleLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                                    </button>
                                    <button
                                        onClick={() => swiperRef.current?.slideNext()}
                                        className="absolute top-3/5 min-[425px]:top-1/2 sm:top-1/2 lg:top-4/8 right-2 transform -translate-y-1/2 bg-[#333] text-white z-10 cursor-pointer p-4 sm:p-3 md:p-4 rounded-full transition-all duration-150 ease-in-out"
                                    >
                                        <FaAngleRight className="h-5 w-5 sm:h-6 sm:w-6" />
                                    </button>
                                </>
                            )}

                            {content.floorPlans.map((image, index) =>
                                <SwiperSlide
                                    key={index}
                                    className='pt-16 !overflow-auto'
                                >
                                    {/* <ModalImage
                                        small={image}
                                        large={image}
                                        hideDownload={false}  // Ensures the modal allows image download
                                        hideZoom={false}      // Ensures zoom functionality works
                                        alt='floor diagram images'
                                        className='h-full w-full object-contain aspect-square border'
                                    /> */}
                                    <img
                                        src={image}
                                        alt="Floor Plan"
                                        className="h-full w-full object-contain aspect-square border cursor-pointer"
                                        onClick={() => setSelectedImage(image)}
                                    />
                                </SwiperSlide>
                            )}

                            {/* paginations dots */}
                            <div className="custom-pagination !mt-6 flex space-x-2 justify-center cursor-pointer "></div>
                        </Swiper>

                    </div>

                    {/* Show Image Modal When Clicked */}
                    {selectedImage && (
                        <ImageModal
                            image={selectedImage}
                            alt="Floor Plan"
                            onClose={() => setSelectedImage(null)}
                        />
                    )}

                </div>

                {/* GALLARY SECTION */}
                <div className='w-full bg-gray-200'>
                    <div className='max-w-7xl container mx-auto px-4 py-14'>
                        <div className='flex justify-center items-center text-center'>
                            <h1 className='text-5xl'>Gallary</h1>
                        </div>

                        <Swiper
                            modules={[Pagination, A11y, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={3}
                            slidesPerGroup={1}
                            breakpoints={{
                                0: { slidesPerView: 1, },
                                640: { slidesPerView: 2, },
                                1024: { slidesPerView: 3, },
                            }}
                            autoplay={{
                                delay: 4000,
                                pauseOnMouseEnter: true,
                            }}
                            pagination={{
                                clickable: true,
                                el: ".custom-pagination"
                            }}
                            draggable={true}
                            loop={false}
                            speed={500}
                            className=""
                        >

                            {content.gallary.map((image, index) =>
                                <SwiperSlide
                                    key={index}
                                    className='pt-16 !overflow-auto'
                                >

                                    <img
                                        src={image}
                                        alt="Floor Plan"
                                        className="h-full w-full object-fill aspect-[3/4]"
                                    />
                                </SwiperSlide>
                            )}

                            {/* paginations dots */}
                            <div className="custom-pagination !mt-8 flex space-x-2 justify-center cursor-pointer "></div>
                        </Swiper>

                    </div>
                </div>


                {/* MAP LOCATION & PROXIMITIES SECTION */}
                <div className='w-full bg-white'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-0'>

                        {/* FOR MAP */}
                        <div
                            dangerouslySetInnerHTML={{ __html: content.iframe }}
                            className="h-[400px] md:h-[500px] lg:h-[600px] w-full"
                        />


                        {/* FOR LOCATION & PROXIMITIES */}
                        <div className='py-10 px-6 md:px-16'>
                            <div className='flex justify-start items-center text-center'>
                                <h1 className='text-2xl min-[425px]:text-4xl xl:text-5xl font-medium lg:font-normal'>Location & Proximities</h1>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-9 py-10'>
                                {content.proximities.map((proximity) => {
                                    const ProximityIcon = proximity.icon;
                                    return (
                                        <>
                                            <div className='flex items-center justify-start'>
                                                <ProximityIcon className='h-5 w-5 flex-shrink-0 mr-6 text-[#333]' />
                                                <p className='text-base'>{proximity.distanceAway} : {proximity.name}</p>
                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}

export default ProjectDetails