import { useState,useRef } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Page/About'
import React from 'react'
import First from './Page/First'
import Live from './Page/Live'
import Scdule from './Page/Scdule'
import Nav from './Page/Nav'
import { Suspense } from 'react';
import News from './Page/News'
function App() {

  const inputRef = useRef(null);
 
  return (
    <BrowserRouter>
    <Nav ref={inputRef} ></Nav>
    <Routes>
      <Route path="/HOME" element={
        <Suspense fallback={<p> Loading</p>}>


    
         <First click={(visible)=>{
          if(visible==false){
            console.log('false?')
            inputRef.current.style.visibility='hidden'
          inputRef.current.style.height='5vh'
          }
          else{
            console.log('true?')
            inputRef.current.style.visibility='visible'
            inputRef.current.style.height='9vh'
          }
          
         }}></First>
           </Suspense>
    } />
      <Route path="/About" 
      element={

<About></About>

      } />
         <Route path="/Live" 
      element={

<Live></Live>

      } />
         <Route path="/Schedule" 
      element={

<Scdule></Scdule>

      } />
        <Route path="/News" 
      element={

<News></News>

      } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
