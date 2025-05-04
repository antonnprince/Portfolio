import React from 'react'
import profile from "./assets/profile.jpeg"
import github from "./assets/github.svg"
import linkedin from "./assets/linkd.svg"
import mail from "./assets/mail.svg"  

const Hero = () => {
  return (
    <div
    className='flex flex-col md:flex-row w-full justify-between p-0'
    >
        
      
        <div className='flex flex-col flex-wrap relative w-full p-2 mx-auto'>
         
           <div className='flex flex-col-reverse md:flex-row mx-auto h-fit p-2'>

              <div className='flex flex-col  my-2 md:my-8 mx-auto md:mx-12'>
                <img src={profile} alt="profile"
                  className=' w-42 h-42  lg:w-64 lg:h-64 rounded-full  
                relative '  
                />

                <div className='flex flex-row justify-center'>

                  <a href="https://github.com/antonnprince">
                  <img src={github} alt="github"
                  className='w-8 h-8 m-4'/>
                  </a>  

                  <a href="https://www.linkedin.com/in/anton-prince-oommen/">
                  <img src={linkedin} alt="linkedin"
                    className='w-8 h-8 m-4'/>      
                  </a> 

                  <a   href="https://mail.google.com/mail/?view=cm&fs=1&to=antonprince95@gmail.com&su=Hello&body=Hi%20there!"
                  >
                  <img src={mail} alt="mail"
                  className='w-8 h-8 my-[20px] mx-4'/>
                  </a> 

                </div>
              </div> 
           <h1 className='font-extrabold text-5xl my-auto  transition-all duration-300 ease-in-out md:text-7xl lg:text-9xl'>
            PRODUCT
            <br />
            
            <span className='text-[#6B7280]'>
              ENGINEER
            </span>
          
          </h1>
               

          </div>  
          <p
           className='text-center mx-auto w-full md:w-3/4 p-1 text-sm md:text-lg'
          >
           Hello! 👋 I'm Anton Prince Oommen, a highly skilled 
           Computer Science Engineering undergraduate
            Full Stack Developer specializing in both web and mobile application development. 
           I enjoy crafting seamless, efficient, and visually appealing softwares that provide exceptional user experiences. 
           With expertise in modern technologies and frameworks, I build
            scalable applications tailored to meet diverse organizational needs.  🚀✨
            <br />

          </p>

       
        </div>
    </div>
  )
}

export default Hero
