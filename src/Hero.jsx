import React from 'react'

const Hero = () => {
  return (
    <div
    className='flex flex-col md:flex-row w-full justify-between  mt-12'
    >
        <div
        className='bg-[#d4d4d4] w-full md:w-1/4 rounded-lg'
        >
          
        </div>

        <div className='flex flex-col flex-wrap w-full p-2 md:w-3/4 mx-auto'>
          <h1 className='font-extrabold  text-5xl transition-all duration-300 ease-in-out md:text-7xl lg:text-9xl'>
            PRODUCT
            <br />
            ENGINEER
            </h1>

          <p
           className='text-[#6B7280] text-center mx-auto p-2'
          >
            Providing robust solutions in the field of website and mobile application development and deployment.
          </p>
        </div>


    </div>
  )
}

export default Hero
