
import React from "react"
import classes from './Modal.module.css'
import { createPortal } from 'react-dom';
import { useEffect } from "react";
import X_line from '../../assets/x_outline.svg';

export default function  Modal({onClose}){
  
        let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
        let windowHeight = window.innerHeight; // 스크린 창
        useEffect(() => {
            document.body.style.cssText = `
              position: fixed; 
              top: -${window.scrollY +5}px;
             
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
                <div className={classes.inner_div}>
                    <p className={classes.iner_p}>BUY</p>
                    <div className={classes.logo}>{
                    ['https://velog.velcdn.com/images/daum091409/post/686ae776-5e8f-4343-a6db-c6d196a8ad08/image.jpg',
                'https://velog.velcdn.com/images/daum091409/post/a53a4bef-b8fa-4e7e-9717-6e70be8c3280/image.png',
                'https://velog.velcdn.com/images/daum091409/post/c5fbd10d-8e5b-4312-9df0-024b5320c12f/image.png',
                'https://velog.velcdn.com/images/daum091409/post/9eb45e79-d8fa-4c9d-9026-1c837a2f3a2a/image.png'
                
                ].map((el)=> <div className={classes.music_div}>
                    <img 
                    className={classes.x_line}
                    src={el}></img>
                </div>)

                    }
                     
                   
                    </div>
       

                    
                </div>

            </div>
          </div>,
          document.getElementById('root')
          )}

</>
    )
}