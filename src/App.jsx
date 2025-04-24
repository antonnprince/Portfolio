import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import Summary from './Summary'
import TechStacks from './TechStacks'
import "./index.css"

function App() {

const showContent = false

  return (
    <div
    className='flex flex-col p-2 min-h-screen'
    >
      <Nav/>
     <Hero/>
     <Summary />
     <TechStacks/>
   </div>
  )
}

export default App
