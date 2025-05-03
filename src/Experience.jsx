import React from 'react'

const Experience = () => {

    const experiences = [ 
        {
            title: "App Developer Intern",
            company: "HeartLabs Pvt Ltd",
            date: "April 2025 - Current",
            description: "Mobile Application built using React Native and Supabase that helps doctors find clinical postings."
        },
        {
            title: "MERN Stack Developer Intern",
            company: "TECHMAGHI ",
            date: "June 2024 - July 2024",
            description: "Developed departmental dashboard that helps employees to manage their tasks and projects."    
        },
        {
            title: "React Native Developer Intern",
            company: "Raftel Tech",
            date: "May 2022 - November 2022",
            description: "Developed a website using HTML, CSS, and JavaScript."
        }
     ]

  return (
    <div
    className=' flex flex-col  w-full justify-between space-y-12 mt-2 mt-6 lg:mt-12 p-0'
    >
        <h1 className='my-1 md:my-4 mx-auto text-[#6B7280] text-center  text-4xl md:text-3xl lg:text-7xl font-extrabold'
        >EXPERIENCE</h1>
        {
            experiences.map((experience, index) => (
                <div className='w-full md:w-3/4 mx-auto my-4'>
                    <h3 className='text-2xl md:text-2xl lg:text-3xl font-extrabold text-[#6B7280]'
                    //  style={{ textShadow: '3px 3px 7px rgba(255, 255, 255, 0.17)' }}
                   >{index + 1}. {experience.company.toUpperCase()}</h3> 
                    <h2 className='text-lg lg:text-xl font-bold'> {experience.title.toUpperCase()}</h2>   
                    <p className='text-sm md:text-lg font-bold'>{experience.date}</p>
                    <p 
                    className='text-sm md:text-lg text-center w-1/2  mx-auto'>{experience.description}</p>
                    </div>
            ))
        }
    </div>
  )
}

export default Experience