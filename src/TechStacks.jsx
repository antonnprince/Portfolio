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
   className='flex flex-col h-fit'
    >
    
        <h1 
        className='my-12 mx-auto text-[#6B7280] text-2xl md:text-3xl lg:text-6xl font-extrabold'>
            TECH STACKS</h1>

       
            <div className='flex flex-row space-x-12'>
              <img src={react} className='w-12 h-12 '/>
              <img src={mongo} className='w-12 h-12  scale-250'/>
              <img src={express} className='w-12 h-12 '/>
              <img src={node} className='w-12 h-12 '/>
              <img src={firebase} className='w-12 h-12 '/>
              <img src={supabase} className='w-12 h-12 '/>
              <img src={fastapi} className='w-12 h-12 '/>
              <img src={huggingface} className='w-12 h-12 '/>
            </div>
    </div>
  )
}

export default TechStacks