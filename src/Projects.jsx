import React from 'react'
import link from "./assets/link.svg"
import { Link } from 'react-router-dom'

const Projects = () => {
  const projects = [
    {
        title: "Hyperly",
        description: "This is a Saas platform where people can generate industry and product relevant content for their social media platforms, increasing social media presence and saving time",
        link: "https://hyperlyinternship.netlify.app/",
    },
    {
        title: "Elite Arena",
        description: "Esports website that allows users to register and host tournaments.",
        link:""
    },
    {
      title: "Legal Lens",
      description: "A website that allows legal professionals to get strategies and predictive insights about their current cases. I have used a Llama-3.2-3b model fine tuned on custom dataset to generate accurate arguments.",
      link: "https://github.com/antonnprince/Legal-Lens-Web-UI",
    },
    {
      title:"Sentiment Analysis",
      description:"A website that performs sentiment analysis on a youtube video's comments when a valid URL is provided as input. The output is shown as a graph and is divided into 3 parts, positive neutral and negative",
      link:"https://sentiment-analysis-lac.vercel.app",
    },
    {
      title:"Streak/Task Management Application",
      description:"A react native application built using expo sdk that keeps track of user's daily,weekly and monthly goals, and maintains streaks.",
      link:"https://github.com/antonnprince/Streak-Counter",
    },
    {
      title:"FortiFi",
      description:"Customizable guardrail system for LLMs that allows organizations to implement domain-specific rules, which is decentralized and can be viewewd by everyone",
      link:"",
    },
    {
      title:"Campus Lift",
      description:"Ride sharing app developed for students of our college, as part of our mini project.",
      link:""
    },
    {
      title:"CSV Filter",
      description:"A website that takes csv files as input and gives out csv with duplicate values as outputs in fields specified by user",
      link:""
    },
  ]

  return (
    <div
    className=' mx-auto mt-2 mt-6 lg:mt-12'
    >
       <h1 className=' text-[#6B7280] text-center text-4xl md:text-3xl lg:text-7xl font-extrabold'
        >PROJECTS</h1>

        <div className='flex flex-row flex-wrap space-x-4  w-full'>
      {
        projects.map((project, index) => (
            <div key={index} className='w-full md:w-2/5 lg:w-1/4 h-fit mx-auto p-2 md:p-4 '>
                <h3 className='text-2xl md:text-2xl lg:text-3xl font-extrabold  my-1 sm:my-2 md:my-4 text-[#6B7280]'
               >{index + 1}. {project.title.toUpperCase()}</h3> 
                <p className='text-sm md:text-lg font-thin text-center w-3/4 md:w-full mx-auto'>{project.description}</p>             
                    <h3 className='text-sm md:text-lg text-center font-thin text-blue-500'>
                    <a href={project.link}>{project.link}</a>
                </h3>
            </div>
        ))
      }
        </div>
    </div>
  )
}

export default Projects