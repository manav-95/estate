import React from 'react';
import Building4 from '../assets/about-card-images/building-4.jpg';
import Vir_Enclave_Day from '../assets/featured-projects/under-construction/vir-enclave-day.jpg'


const AboutCard = () => {
    return (
        <>
            <div className="max-w-7xl container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* For Images */}
                    <div className="lg:col-span-5 flex">
                        <div className="h-full w-full">
                            <img
                                src={Vir_Enclave_Day}
                                alt="Building image"
                                className="h-[400px] min-[425px]:h-[500px] sm:h-[650px] md:h-[700px] lg:h-full w-full object-fill aspect-square object-center rounded-lg shadow-md"
                            />
                        </div>
                    </div>

                    {/* For Content */}
                    <div className="lg:col-span-7">
                        {/* Title and Subtitle */}
                        <div className='flex flex-col items-start sm:items-center lg:items-start justify-center text-left sm:text-center lg:text-left'>
                            <h1 className="uppercase text-2xl min-[425px]:text-4xl lg:text-4xl font-bold text-gray-800 mb-2.5">
                                VR Group, Mumbai
                            </h1>
                            <p className="uppercase text-lg sm:text-xl font-semibold text-gray-700 mb-2">
                                Crafting Dream Spaces with Trust and Integrity
                            </p>
                        </div>

                        {/* Description */}
                        <div className="flex flex-col space-y-4 text-gray-600 text-md leading-relaxed my-2 sm:my-4 lg:my-3.5">

                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde dolor eos praesentium error hic quidem
                                doloribus dolore iste, officia dolores soluta vel laudantium exercitationem aperiam repellendus
                                eligendi quia. Dicta, animi! Ab impedit quod similique illo dolore, dolores minima dolorum saepe.
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde dolor eos praesentium error hic quidem
                                doloribus dolore iste, officia dolores soluta vel laudantium exercitationem aperiam repellendus
                                eligendi quia. Dicta, animi! Ab impedit quod similique illo dolore, dolores minima dolorum saepe.
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde dolor eos praesentium error hic quidem
                                doloribus dolore iste, officia dolores soluta vel laudantium exercitationem aperiam repellendus
                                eligendi quia. Dicta, animi! Ab impedit quod similique illo dolore, dolores minima dolorum saepe.
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde dolor eos praesentium error hic quidem
                                doloribus dolore iste, officia dolores soluta vel laudantium exercitationem aperiam repellendus
                                eligendi quia. Dicta, animi! Ab impedit quod similique illo dolore, dolores minima dolorum saepe.
                            </p>
                        </div>

                        {/* Button */}
                        <div className="w-full md:w-fit">
                            <button className="bg-transparent w-full md:w-fit my-4 cursor-pointer text-[#00d8ff] py-2 px-6 font-medium rounded-xs hover:shadow border border-[#00d8ff] hover:bg-[#00d8ff] hover:text-black hover:border hover:border-transparent transition-all duration-150 ease-in-out">
                                Know More
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default AboutCard;
