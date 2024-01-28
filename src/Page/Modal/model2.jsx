import classes from './Model2.module.css'
import { useEffect } from 'react';
import React from 'react';
import { createPortal } from 'react-dom';
import X_line from '../../assets/x_outline.svg';
export default function  Modal2({onClose,link}){

  console.log('클릭 이벤트')
    let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
    let windowHeight = window.innerHeight; // 스크린 창
    useEffect(() => {
        document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
         
          width: 100%;`;
        return () => {
          const scrollY = document.body.style.top;
          document.body.style.cssText = "";
          window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
        };
      }, [])

return (
    <>
 
    {createPortal(
        <div

        style={{
            top:`${scrollLocation}px`,
        }}
        className={classes.Modal}
       >
                     <div className={classes.logo_div}>
<img 
onClick={onClose}
                className={classes.x_line}
                src={X_line}></img>

                </div>
        <div className={classes.inner}>
        <iframe width='100%' height="100%" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
               
                </div>   

      </div>,
      document.getElementById('root')
      )}

</>
)
}