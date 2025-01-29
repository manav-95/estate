import React, { useRef } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, A11y, Autoplay } from "swiper/modules"

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";


// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        role: "Homeowner",
        content:
            "The construction team did an amazing job on our new The construction team did an amazing job on our newThe construction team did an amazing job on our newThe construction team did an amazing job on our new  home. Their attention to detail and quality of work exceeded our expectations.",
    },
    {
        id: 2,
        name: "John Doe",
        role: "Homeowner",
        content:
            "The construction team did an amazing job on our new home. Their attention to detail and quality of work exceeded our expectations.",
    },
    {
        id: 3,
        name: "John Doe",
        role: "Homeowner",
        content:
            "The construction team did an amazing job on our new home. Their attention to detail and quality of work exceeded our expectations.",
    },
    {
        id: 4,
        name: "John Doe",
        role: "Homeowner",
        content:
            "The construction team did an amazing job on our new home. Their attention to detail and quality of work exceeded our expectations.",
    },
    {
        id: 5,
        name: "John Doe",
        role: "Homeowner",
        content:
            "The construction team did an amazing job on our new home. Their attention to detail and quality of work exceeded our expectations.",
    },
    {
        id: 6,
        name: "John Doe",
        role: "Homeowner",
        content:
            "The construction team did an amazing job on our new home. Their attention to detail and quality of work exceeded our expectations.",
    },

]

export default function Testimonials() {

    const swiperRef = useRef(null);

    return (
        <div className="bg-gray-100 py-12 ">
            <div className="max-w-7xl container mx-auto px-4">
                <h2 className="text-5xl font-semibold text-gray-900 text-center md:hidden">Testimonials</h2>
                <h2 className="text-5xl font-semibold text-gray-900 text-center hidden md:block">What Our Clients Says</h2>
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
                    loop={true}
                    speed={500}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    className="max-w-2xl"
                >
                    {testimonials.map((testimonial) => (
                        <div className="">
                            <SwiperSlide
                                key={testimonial.id}
                                className="w-full my-10"
                            >
                                <h3 className="text-2xl text-center mb-4 font-semibold text-gray-900">{testimonial.name}</h3>
                                <p className="text-lg text-gray-700 text-center">{testimonial.content}</p>
                            </SwiperSlide>
                        </div>
                    ))}
                    <div className="flex justify-center items-center space-x-4">
                    <button onClick={() => swiperRef.current?.slidePrev()} className='border-2 border-transparent hover:border-2 hover:border-gray-600 bg-gray-300 focus:border-gray-600 focus:bg-gray-400 p-3 lg:p-4 rounded-full cursor-pointer duration-150 transition-all ease-in-out'><FaAngleLeft className='h-5 w-5' /></button>
                    <button onClick={() => swiperRef.current?.slideNext()} className='border-2 border-transparent hover:border-2 hover:border-gray-600 bg-gray-300 focus:border-gray-600 focus:bg-gray-400 p-3 lg:p-4 rounded-full cursor-pointer duration-150 transition-all ease-in-out'><FaAngleRight className='h-5 w-5' /></button>
                    </div>
                </Swiper>
            </div>
        </div>
    )
}

