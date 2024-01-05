import up from '../assets/up.svg'
import logo from '../assets/name_logo.svg'
import React from 'react'
const Sita= function({go}){
 const up__= function(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

 }
  return <>
<div 

className='first_up'>
        <img 
        onClick={()=> 
          up__()
        }
        className='up'
        src={up}></img>
        
      </div>
      <div
      
      className='first_sita'>
        <p className='music_p'>copyright(c) Storm Labels Inc. All Rights Reserved.</p>
        <img className='fisrt_sita_size'
       src={logo}
     ></img>
      </div>
</>

}

export default Sita