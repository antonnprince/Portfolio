import React from 'react'
import react from "./assets/react.svg"
import mongo from "./assets/mongodb.svg"
import express from "./assets/express.svg"
import node from "./assets/node.svg"
import firebase from "./assets/firebase.svg"
import supabase from "./assets/supabase.svg"
import fastapi from "./assets/fastapi.svg"
import huggingface from "./assets/huggingface.svg"

const TechStacks = () => {
  return (
    <div 
   className='flex mt-8 md:mt-12 flex-col h-fit'
    >
    
        <h1 
        className='my-1 md:my-4 mx-auto text-[#6B7280] text-2xl md:text-3xl lg:text-6xl font-extrabold'>
            TECH STACS</h1>

       
            <div className='flex flex-row space-x-4 mx-auto w-full justify-between p-2 overflow-x-auto overflow-y-hidden'>
              <img src={react} className='w-8 h-8 md:w-16 md:h-16 inline-block' />
              <img src={mongo} className='w-8 h-8 md:w-16 md:h-16 scale-170  inline-block' />
              <img src={express} className='w-8 h-8 md:w-16 md:h-16 inline-block' />
              <img src={node} className='w-8 h-8 md:w-16 md:h-16 inline-block' />
              <img src={firebase} className='w-8 h-8 md:w-16 md:h-16 inline-block' />
              <img src={supabase} className='w-8 h-8 md:w-16 md:h-16 inline-block' />
              <img src={fastapi} className='w-8 h-8 md:w-16 md:h-16 inline-block' />
              <img src={huggingface} className='w-8 h-8 md:w-16 md:h-16 bg-white rounded-full inline-block' />
            </div>

    </div>
  )
}

export default TechStacks