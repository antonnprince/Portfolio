import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import Summary from './Summary'
import "./index.css"

function App() {

const showContent = false

  return (
    <div
    className='flex flex-col p-4'
    >
      <Nav/>
     <Hero/>
     <Summary />
   </div>
  )
}

export default App
