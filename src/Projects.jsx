import React from 'react'

const Projects = () => {
  const projects = [
    {
        title: "HeartLabs",
        description: "Mobile Application built using React Native and Supabase that helps doctors find clinical postings.",
        link: "",
        image: "https://i.imgur.com/4v1X2xk.png"
    },
    {
        title: "TechMaghi",
        description: "Developed departmental dashboard that helps employees to manage their tasks and projects.",
        link: "",
        image: "https://i.imgur.com/4v1X2xk.png"
    },
    {
        title: "Raftel Tech",
        description: "Developed a website using HTML, CSS, and JavaScript.",
        link: "",
        image: "https://i.imgur.com/4v1X2xk.png"
    }
  ]

  return (
    <div
    className=''
    >
       <h1 className='my-1 md:my-4 mx-auto text-[#6B7280] text-center  text-4xl md:text-3xl lg:text-7xl font-extrabold'
        >PROJECTS</h1>
        <div className='flex flex-row space-x-4 w-full justify-between mt-12 space-y-12 p-0'>
      {
        projects.map((project, index) => (
            <div key={index} className='w-full md:w-3/4 mx-auto mb-8 '>
                <h3 className='text-2xl md:text-2xl lg:text-3xl font-extrabold text-[#6B7280]'
                //  style={{ textShadow: '3px 3px 7px rgba(255, 255, 255, 0.17)' }}
               >{index + 1}. {project.title.toUpperCase()}</h3> 
                <p className='text-sm md:text-lg font-bold'>{project.description}</p>
                <img src={project.image} alt={project.title} className='w-full h-auto' />
            </div>
        ))
      }
        </div>
    </div>
  )
}

export default Projects