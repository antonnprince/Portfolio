import React from 'react'
import Hero from './Hero'
import Summary from './Summary'
import TechStacks from './TechStacks'
import Experience from './Experience'
import Projects from './Projects'
import "./index.css"


function App() {

  return (
    <div
    className='flex flex-col p-2 mx-4 h-full'
    >
               <Hero/>
        <Summary />
        <TechStacks/>
        <Experience/>
        <Projects/>
       
   </div>
  )
}

export default App
