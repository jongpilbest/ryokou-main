
import React from "react";
import './About.css'
import logo from '../assets/name_logo.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import Sita from "./sita";
import up from '../assets/up.svg'
const About= function(){

  const about_list=[
    {
      img:"https://qjweb.jp/wp-content/uploads/2020/09/qjweb_ryokusyaka_4.jpg"
      , name:'長屋 晴子',
      name_en:'Haruko Nagaya'

    },
    {
      img:"https://qjweb.jp/wp-content/uploads/2020/09/qjweb_ryokusyaka_1.jpg"
      , name:'小林 壱誓',
      name_en:'Issey Kobayashi'

    },
    {
      img:"https://qjweb.jp/wp-content/uploads/2020/09/qjweb_ryokusyaka_2.jpg"
      , name:'穴見 真吾',
      name_en:'Shingo Anami'

    },
    {
      img:"https://qjweb.jp/wp-content/uploads/2020/09/qjweb_ryokusyaka_10.jpg"
      , name:'神谷香奈',
      name_en:'Kamiya kanae'

    }


  ]
  return(
    <div  className="main_div">
         
    <div 

    className='main__div'>

   
      <div className="img_center">
         <div className="img__center">
          <p className="img_p">ABOUT</p>

          <div className="img__profile_div">
            <img
            style={{width:'110%'}}
            src="https://velog.velcdn.com/images/daum091409/post/fa834488-a2c6-4f11-ab44-bf19106951f6/image.jpg"></img>
 
  <p className="substring_jp">愛知県出身4人組バンド。愛称は”リョクシャカ”。</p>
  <p className="substring_en">4-piece band from Japan, known as “Ryokushaka”.</p>
      {
        
        about_list.map((el,index)=>{
      return   <div className="img_profile_div">
        
        <div className="name_tage">
          <img 
          style={{height:'100%',
        width:'100%'}}
          src={el.img}></img>
        </div>
        <div className="name_tage" >
          <div className="name_tag">
            <p className="name_tag_name">Vo./Gt.</p>
          </div>
        <p className="name">{el.name}</p>
                 <p className="name_en">{el.name_en}</p>
        <div className="name__sns">
        <img 
               className='img_'
               src={twitter}></img>
                  <img 
               className='img_'
               src={instagram}></img>

        </div>
        </div>

        </div>
 }) }     
</div>


<Sita></Sita>


          </div>
  
     </div>
  
     </div>
     
     </div>
  )
}

export default About;

