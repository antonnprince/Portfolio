import React from 'react'

const Hero = () => {
  return (
    <div
    className='flex flex-col md:flex-row w-full justify-between mt-12'
    >
        <div
        className='bg-[#d4d4d4] w-full relative md:mr-32 lg:mr-42 rounded-lg'
        >
          {/* insert picture/avatar here */}
        </div>

        <div className='flex flex-col flex-wrap relative w-full p-2 md:w-1/2 mx-auto'>
         
          <h1 className='font-extrabold text-5xl transition-all duration-300 ease-in-out md:text-7xl lg:text-9xl'>
            PRODUCT
            <br />
            <span className='text-[#6B7280]'>
            ENGINEER
            </span>
          </h1>

          <p
           className='text-left mx-auto p-1 text-xs md:text-lg'
          >
            Providing robust solutions in the field of fullstack website and mobile application development and deployment.
            Currently exploring LLMs and MLOps..
          </p>
        </div>
    </div>
  )
}

export default Hero
