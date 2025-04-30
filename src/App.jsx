import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import Summary from './Summary'
import TechStacks from './TechStacks'
import Experience from './Experience'
import "./index.css"

function App() {

  return (
    <div
    className='flex flex-col p-2 h-full'
    >
        <Nav/>
        <Hero/>
        <Summary />
        <TechStacks/>
        <Experience/>
   </div>
  )
}

export default App
