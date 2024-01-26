
import NewS_com from "./News_com";
import React from "react";
import classes from './news.module.css'
import Sita from "./sita";
const News= function(){
return<div  className="main_div">
         
  <div 

  className='main__div'>

 
    <div className="img_center">
       <div 
      
       className="img__center">
    
           <p className="img_p">NEWS</p>
   
              {
                ["2","2"].map((el)=>{
                  return <NewS_com></NewS_com>
                })
              }
              <Sita></Sita>
       
        </div>
        
        </div>
    
        </div>
       
        </div>
}

export default News