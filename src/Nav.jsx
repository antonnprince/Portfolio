import { li, nav } from 'motion/react-client'
import React from 'react'

const Nav = () => {
    
    const navSection = ['Projects','Experience','Contact']


  return (

    <div
    className='bg-[#1C1917] px-2 md:px-8 py-2 rounded-lg '
        >
        <ul className='flex flex-row flex-shrink space-x-4 text-sm md:text-lg '>
            {
                navSection.map((item,index)=>{
                    return(
                        <li 
                        key={index}
                        className='text-white hover:text-[#6B7280] font-light '>
                        {item}
                        </li>
                    )
                   
                })
            }
        </ul>
    </div>
  )
}

export default Nav