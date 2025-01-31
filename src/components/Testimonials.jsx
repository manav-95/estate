import React, { useRef } from "react"

import testimonials from "../data/Testimonials";

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, A11y, Autoplay } from "swiper/modules"

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";


// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"



export default function Testimonials() {

    const swiperRef = useRef(null);

    return (
        <div className="bg-[#333333] py-12 ">
            <div className="max-w-7xl container mx-auto px-4">
                <h2 className="text-3xl min-[425px]:text-4xl font-semibold text-white text-center md:hidden">Testimonials</h2>
                <h2 className="text-3xl min-[425px]:text-4xl font-semibold text-white text-center hidden md:block">What Our Clients Says</h2>
                <Swiper
                    modules={[Pagination, A11y, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    //   breakpoints={{
                    //     640: {
                    //       slidesPerView: 2,
                    //     },
                    //     1024: {
                    //       slidesPerView: 3,
                    //     },
                    //   }}
                    autoplay={{
                        delay: 8000,
                    }}
                    pagination={{
                        clickable: true,
                        el: ".custom-pagination"
                    }}
                    draggable={true}
                    loop={true}
                    speed={500}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    className="max-w-2xl h-full"
                >
                    {testimonials.map((testimonial) => (
                        <div className="h-full">
                            <SwiperSlide
                                key={testimonial.id}
                                className="h-full w-full mt-10 cursor-grab"
                            >
                                <h3 className="text-2xl text-center mb-4 font-semibold text-white">{testimonial.name}</h3>
                                <p className="text-lg text-white text-center">{testimonial.content}</p>
                            </SwiperSlide>
                        </div>
                    ))}
                    {/* paginations dots */}
                    <div className="custom-pagination !my-8 flex space-x-2 justify-center cursor-pointer "></div>

                    <div className="flex justify-center items-center space-x-4">
                        <button onClick={() => swiperRef.current?.slidePrev()} className='border-2 border-[#00d8ff] bg-transparent hover:bg-[#00d8ff] focus:bg-[#00d8ff] text-[#00d8ff] hover:text-black focus:text-black p-3 lg:p-4 rounded-full cursor-pointer duration-150 transition-all ease-in-out'><FaAngleLeft className='h-5 w-5' /></button>
                        <button onClick={() => swiperRef.current?.slideNext()} className='border-2 border-[#00d8ff] bg-transparent hover:bg-[#00d8ff] focus:bg-[#00d8ff] text-[#00d8ff] hover:text-black focus:text-black p-3 lg:p-4 rounded-full cursor-pointer duration-150 transition-all ease-in-out'><FaAngleRight className='h-5 w-5' /></button>
                    </div>
                </Swiper>
            </div>
        </div>
    )
}

