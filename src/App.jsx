import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import { useState } from 'react'
import loader from "../public/loader.svg"


function App() {

const showContent = false

  return (
    <div
    className='flex flex-col p-4'
    >
      <Nav/>
     <Hero/>
   </div>
  )
}

export default App
