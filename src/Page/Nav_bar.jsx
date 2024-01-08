import React from "react"
import x_ from '../assets/x_line.svg'
import {
  NavLink ,
} from 'react-router-dom';

const Nav_bar = function({icon,setopen}){
return  (
  <div style={{
    width:'100%',
    height:'100vh',
    backgroundColor:'#262626',
   opacity:0.9,
    position:'absolute',
    zIndex:'5',
    display:'flex',
    top:0,
    left:0,
 
  }}>

    <div style={{
        width:'10%',
        height:'95vh',
       
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end',
        flexDirection:'column'
    }}>
  
         <img 

         onClick={()=>{
          setopen((el)=>!el)
         }}
         style={{
          width:'20%',
          marginRight:'10%',
          
        
         }}
         src={x_}></img>
        
    </div>

    <div style={{
    
      width:'100%',
      height:'100%',
      justifyContent:'space-around',
      flexDirection:'column',
      display:'flex'
    }}>
      <div style={{
        width:'100%',
        height:'80vh',

        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        marginTop:'2%'
      }}>

  
    {
                ['HOME','ABOUT','LIVE','NEWS','SCHEDULE'].map((El,index)=>{
                  return <div 
                  onClick={()=>{
                    setopen((el)=>!el)
                   }}
                  className="inner_dov">
                     <NavLink to={El}>  
                    <p 
                  key={index}
                  className='inner'>{El}</p> 
                  </NavLink>
                    </div>
                })
               }
                   <div style={{
                width:'100%',
                height:'5vh',
                borderStyle:'solid',
                borderColor:'white',
                borderWidth:'0.1vw',
                borderRightColor:'transparent',
               borderBottomColor:'transparent',
               borderLeftColor:'transparent',
            
               }}>

               </div>
          <div style={{
            width:'18%',
            height:'6vh',
            display:'flex',
            alignItems:'center',
       justifyContent:'space-between'
         
          }}>
            <p
            className="inner_s"
            > Social Media </p>
            {
            icon.map((El,index)=>{
              return  <div>
             
              </div>
})
}

          </div>
</div>
           
    </div>
    <div></div>



</div>


)
}

export default Nav_bar