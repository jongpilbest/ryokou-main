
import React, { useRef, useState } from "react"
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import youtube from '../assets/youtube.svg'
import apple from '../assets/apple.svg'
import menu from '../assets/menu.svg'
import Nav_bar from './Nav_bar'
import logo from '../assets/name_logo.svg'
import { forwardRef } from "react"
import {
  NavLink ,
} from 'react-router-dom';

const Nav= forwardRef((props,ref)=>{
  const [open,setopen]=useState(false);
  const list_icon=[twitter,instagram,apple,youtube];
   return <div 
   className="nav">
   <div 
   ref={ref} 
   className='main_header'>
   {open&&
    <Nav_bar 
    setopen={setopen}
    icon={list_icon}
    ></Nav_bar>
   }
    <div className='name_'>

     <img 
     onClick={()=>{
      setopen((el)=>!el)
     }}
     style={{
      height:'50%',
      width:'5%'
     }}
     src={menu}></img>
 

     </div>
   
 <div className='header_main'>
    <NavLink 
     state={{
      width:'100%',
      height:'100%'
     }}
     to='/HOME'>    <img className='name_title'
       src={logo}
     >

         </img>
         
         </NavLink>
     </div>
     
       <div className='canvas_div'>
        <div style={{
    width:'30%',
    height:'80%'
    ,display:'flex',
    backgroundColor:'#90A3E2',
    borderRadius:'60px',
    alignItems:'center',
    
      }}>
    {
      list_icon.map((El,index)=>{
        return <div
        key={index}
        className='circle'>
          <img 
            onClick={()=>{
             if(index==0){
               window.open('https://twitter.com/ryokushaka')
             }
             else if( index==1){
               window.open('https://www.instagram.com/ryokushaka_official/')
             }
             else if (index==2){
              window.open('https://www.tiktok.com/@ryokushaka')
             }
             else{
              window.open('https://www.youtube.com/channel/UC_1GPhYlXI2ka2ji5gnqWFQ')

             }
             
            }}
          className='img_'
          src={El}></img>
        </div>
      })
    }
  </div>
  </div>
   </div>
</div>
  
})

export default Nav