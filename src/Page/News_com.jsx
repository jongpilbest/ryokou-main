import classes from './news.module.css'
import React from 'react'
const NewS_com=function({data}){
  return   (
    <>
    <div className={classes.info}>
  <div className={classes.header}>
   <div className={classes.what}>
     <p className={classes.infoo}> INFO</p>
   </div>
   <p className={classes.date}> {data.date}</p>
   <p className={classes.p_name}>{data.title} </p>
  </div>

</div>

<div style={{
  padding:'5% 0%'
}}>
 {
   data.content.map((el)=>{
    return <>
    <br></br>
    <p className={classes.p_liner}>{el}</p>
    </>
   
   })
 }


</div>
<div className={classes.line}></div>
</>
  )
}

export default NewS_com