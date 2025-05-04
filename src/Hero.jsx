import React from 'react'
import profile from "./assets/profile.jpeg"

const Hero = () => {
  return (
    <div
    className='flex flex-col md:flex-row w-full justify-between mt-12 p-0'
    >
        
      
        <div className='flex flex-col flex-wrap relative w-full p-2 mx-auto'>
         
           <div className='flex flex-col md:flex-row mx-auto p-2'>

            <img src={profile} alt="profile"
              className=' w-42 h-42 mx-auto md:mx-12 lg:w-64 lg:h-64 rounded-full  
             my-2 md:my-8 relative'  
            />
         
           <h1 className='font-extrabold text-5xl my-auto  transition-all duration-300 ease-in-out md:text-7xl lg:text-9xl'>
            PRODUCT
            <br />
            
            <span className='text-[#6B7280]'>
              ENGINEER
            </span>
          
          </h1>
          
          </div>  
          <p
           className='text-center mx-auto p-1 text-xs md:text-lg'
          >
            Providing robust solutions in the field of fullstack website and mobile application development and deployment.
            Currently exploring LLMs and MLOps.
          </p>
        </div>
    </div>
  )
}

export default Hero
