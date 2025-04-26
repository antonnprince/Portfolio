import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import Summary from './Summary'
import TechStacks from './TechStacks'
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
   </div>
  )
}

export default App
