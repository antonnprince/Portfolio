import React from 'react'

const Summary = () => {
  return (
            <div className='flex flex-col sm:flex-row space-y-2
             justify-between text-2xl md:text-3xl lg:text-5xl font-bold mt-8 md:mt-12'>
                <h1> <span className='text-[#6B7280]'>+5</span> PROJECTS</h1>
                <h1><span className='text-[#6B7280]'>+3</span> INTERNSHIPS</h1>
                <h1><span className='text-[#6B7280]'>+7</span> HACKATHONS</h1>
            </div>
    
  )
}

export default Summary