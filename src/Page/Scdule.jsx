
import React from "react";
import './Scdule.css'
import right from '../assets/right_2.svg'

import left from '../assets/left _2.svg'
const Scdule= function(){
  const start_day=[
    26
  ]
  return(
    <div  className="main_div">
         
    <div 

    className='main__div'>

   
      <div className="img_center">
         <div 
         style={{
          height:'150vh'
         }}
         className="img__center">
          <p className="img_p">SCHEDULE</p>

          <div 
          style={{
            display:'block'
          }}
          className="img__profile_div">
            <div className="cal_header">
              <img
              className="small_right"
              src={left}></img>
  
              <p className="cal_p_header">2023.12</p>
              <img
               className="small_right"
              src={right}></img>
            </div>
             <div style={{
              width:'100%',
              height:'100%',
          
              display:'flex'
             }}>
               <table className="table">
                {
                  ['Sun','Mon','Tue','Wen','Thr','Fri','Sat'].map((el)=>{
                    return <th className="th" >
                      <p>
                           {el}
                      </p>
                   
                      
                      </th>
                  })
                }
              {
                [1,2,3,4,5,6].map((el)=>{
                  return<tr className="tr_style">
                    <td className="td"></td>
                    <td className="td"></td>
                    <td className="td"></td>
                    <td className="td"></td>
                    <td className="td"></td>
                    <td className="td"></td>
                    <td className="td"></td>
                  </tr>
                })
              }
               </table>

             </div>

             <div>

  
    </div>
            </div>
            </div>
            </div>
            </div>
            </div>
  )
}


export default Scdule;
