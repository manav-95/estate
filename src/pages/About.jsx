import React from 'react'

import HeroImage from '../assets/about-us-images/about-us-hero.jpg'

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[480px] bg-center bg-cover" style={{ backgroundImage: `url(${HeroImage})` }}>
        {/* Overlay using Tailwind 4.0 syntax */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.0)]"></div>

        {/* Content on top of the overlay */}
        <div className="relative h-full w-full flex justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold uppercase"></h1>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className='w-full bg-gray-200'>
        <div className='max-w-5xl container mx-auto'>
          <div className='py-14'>
            <div className='flex justify-center items-center'>
              <h1 className='text-5xl font-medium'>VIR Group</h1>
            </div>
            <div className='flex flex-col items-start justify-start text-center space-y-8 pt-10'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minima fuga incidunt facilis explicabo vel maiores. Quod vitae placeat eum veritatis obcaecati quaerat fuga rem culpa quidem aliquam inventore rerum alias sunt cupiditate provident quae accusantium possimus, quas accusamus nulla repellat. Suscipit praesentium, voluptatum nostrum distinctio quisquam cupiditate tempore? Magni, delectus reiciendis repellat soluta culpa natus fugit corporis amet doloremque?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, expedita? Obcaecati, quaerat sed, nisi sunt ea qui, neque quidem id sequi harum voluptatum dolor aliquam. Ab sequi id harum rem ullam officia molestiae distinctio dolorum animi illo! Sunt cum fugiat praesentium obcaecati officiis qui eaque nostrum. Accusamus doloribus rerum dicta reiciendis veritatis natus quas impedit tenetur facilis officiis. Impedit quos similique excepturi alias illo quis, laudantium quod exercitationem quae nesciunt dolorum eaque, ea sed culpa? Voluptatem, consectetur eveniet dolorem ipsam quam praesentium! Eum, molestias iusto.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, expedita? Obcaecati, quaerat sed, nisi sunt ea qui, neque quidem id sequi harum voluptatum dolor aliquam. Ab sequi id harum rem ullam officia molestiae distinctio dolorum animi illo! Sunt cum fugiat praesentium obcaecati officiis qui eaque nostrum. Accusamus doloribus rerum dicta reiciendis veritatis natus quas impedit tenetur facilis officiis. Impedit quos similique excepturi alias illo quis, laudantium quod exercitationem quae nesciunt dolorum eaque, ea sed culpa? Voluptatem, consectetur eveniet dolorem ipsam quam praesentium! Eum, molestias iusto.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, expedita? Obcaecati, quaerat sed, nisi sunt ea qui, neque quidem id sequi harum voluptatum dolor aliquam. Ab sequi id harum rem ullam officia molestiae distinctio dolorum animi illo! Sunt cum fugiat praesentium obcaecati officiis qui eaque nostrum. Accusamus doloribus rerum dicta reiciendis veritatis natus quas impedit tenetur facilis officiis. Impedit quos similique excepturi alias illo quis, laudantium quod exercitationem quae nesciunt dolorum eaque, ea sed culpa? Voluptatem, consectetur eveniet dolorem ipsam quam praesentium! Eum, molestias iusto.
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default About