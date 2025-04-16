import React from 'react'

const Nav = () => {
    
    const navSection = ['Projects','Experience','Contact']


  return (

    <div
    className='bg-[#1C1917] w-fit mx-auto px-2 md:px-12 py-2 rounded-lg '
        >
            {/* someting */}

        <ul className='flex flex-row flex-shrink space-x-12 text-xs md:text-lg '>
            {
                navSection.map((item,index)=>{
                    return(
                        <li 
                        key={index}
                        className='text-white hover:text-[#6B7280] font-semibold 
                        transition-all duration-300  hover:scale-110 ease-in-out
                        text-md '>
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