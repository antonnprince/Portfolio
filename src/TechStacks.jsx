import React from 'react'
import react from "./assets/react.svg"
// import ts from "./assets/ts.svg"
import express from "./assets/express.svg"

const TechStacks = () => {
  return (
    <div 
   className='flex flex-col h-fit'
    >
    
        <h1 
        className='my-12 mx-auto text-[#6B7280] text-2xl md:text-3xl lg:text-6xl font-extrabold'>
            TECH STACKS</h1>

          {/* TO DO
          Edit color from website itself */}
            <div className='flex flex-row space-x-12'>
              <img src={react} className='w-12 h-12 text-white'/>
              {/* <img src={ts} className='w-12 h-12 text-white'/> */}
              <img src={express} className='w-12 h-12 text-white'/>
            </div>
    </div>
  )
}

export default TechStacks