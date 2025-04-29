import React from 'react'

const Experience = () => {

    const experiences = [ 
        {
            title: "App Developer Intern",
            company: "HeartLabs Pvt Ltd",
            date: "April 2025 - Current",
            description: "Worked on developing a web application using React and Node.js."
        },
        {
            title: "MERN Stack Developer Intern",
            company: "TECHMAGHI ",
            date: "June 2024 - July 2024",
            description: "Analyzed data using Python and SQL."
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
    className=' flex flex-col  w-full justify-between mt-12 space-y-12 p-0'
    >
        <h1 className='my-1 md:my-4 mx-auto text-[#6B7280]  text-2xl md:text-3xl lg:text-6xl font-extrabold'>EXPERIENCE</h1>
        {
            experiences.map((experience, index) => (
                <div className='w-3/4 mx-auto '>
                    <h3 className='text-3xl font-extrabold text-[#6B7280]'>{index + 1}. {experience.company.toUpperCase()}</h3> 
                    <h2 className='text-lg font-bold'> {experience.title.toUpperCase()}</h2>   
                    <p className='text-md '>{experience.date}</p>
                    <p className='text-md text-center w-1/2 mx-auto'>{experience.description}</p>
                    </div>
            ))
        }
    </div>
  )
}

export default Experience