
import React from "react";
import './About.css'
import logo from '../assets/name_logo.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import Sita from "./sita";
import SimpleImageSlider from "react-simple-image-slider";
import up from '../assets/up.svg'
const About= function(){

  const about_list=[
    {
      img:["https://qjweb.jp/wp-content/uploads/2020/09/qjweb_ryokusyaka_4.jpg","https://www.thefirsttimes.jp/admin/wp-content/uploads/2021/08/20210823_ny_145004.jpg"]
      , name:'長屋 晴子',
      name_en:'Haruko Nagaya'

    },
    {
      img:["https://qjweb.jp/wp-content/uploads/2020/09/qjweb_ryokusyaka_1.jpg","https://www.thefirsttimes.jp/admin/wp-content/uploads/2021/08/20210823_ny_145005.jpg"]
      , name:'小林 壱誓',
      name_en:'Issey Kobayashi'

    },
    {
      img:["https://qjweb.jp/wp-content/uploads/2020/09/qjweb_ryokusyaka_2.jpg","https://www.thefirsttimes.jp/admin/wp-content/uploads/2021/08/20210823_ny_145008.jpg"]
      , name:'穴見 真吾',
      name_en:'Shingo Anami'

    },
    {
      img:["https://qjweb.jp/wp-content/uploads/2020/09/qjweb_ryokusyaka_10.jpg","https://www.thefirsttimes.jp/admin/wp-content/uploads/2021/08/20210823_ny_145007.jpg"]
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
            style={{width:'100%'}}
            src="https://velog.velcdn.com/images/daum091409/post/fa834488-a2c6-4f11-ab44-bf19106951f6/image.jpg"></img>
 
  <p className="substring_jp">아이치현 출신 4인조 밴드. 애칭은 "Ryokushaka"。</p>
  <p className="substring_en">고등학교 동창(나가야 하루코·코바야시 카즈요시·peppe)과 고바야시의 소꿉친구·아나미 신고에 의해 2012년 결성되었습니다.
2013년, 10대 한정 록 페스티벌 「섬광 라이엇」 준우승을 시작으로 활동을 본격화했습니다.이후, 영화·드라마·CM·애니메이션등의 악곡을 다수 다루고 있습니다.2020년에 발표한 '멜라!'는 스트리밍 조회수 2억 회를 돌파하는 대표곡이 되었습니다.
결성 10주년이 되는 2022년에는, 첫 일본 무도관 공연"녹황색 사회×일본 무도관"2012 2022"를 성공시켰고, 연말에는 "제73회 NHK 홍백가합전" 첫 출전하는 등 약진했습니다.
2023년은 5월 앨범 'pink blue' 발매와 같은 달부터 시작하는 전국 홀 투어 'pink blue tour 2023'을 앞두고 있습니다.</p>
    
</div>

<div className="img__profile_div">
      {
        
        about_list.map((el,index)=>{
      return   <div className="img_profile_div">
        
        <div className="name_tage">
        <SimpleImageSlider
          autoPlay={true}
          showNavs={false}
           width={'25vw'}
           height={'60vh'}
        images={el.img}
        showBullets={false}
        autoPlayDelay={3.0}
       
      />
        
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

