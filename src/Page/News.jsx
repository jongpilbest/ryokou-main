
import NewS_com from "./News_com";
import React from "react";
import classes from './news.module.css'
import Sita from "./sita";
const data=[{'day':'2023.01.23',
  'title':'녹황색 계획 2023-2024 지진 여파 티켓 환불 안내',
  'content':['료쿠샤화 계획 2023-2024 나고야 공연·오사카 공연에 대해서 호쿠리쿠·조에쓰 방면의 피해 상황을 고려해 방문이 불가능한 고객에게 대상 티켓 환불을 실시합니다.',
    '환불 방법 및 기간 등 자세한 사항은 추후 녹황색 사회 홈페이지를 통해 알려드리겠습니다',
    '피해를 입은 모든 분들의 안전과 건강, 그리고 하루빨리 부흥을 기원합니다.',
    '[공연 문의]나고야 공연 선데이 포크 프로모션 052-320-9100 12:00 18~00:0570 ·오사카 공연']
},{'day':'2023.01.30',
'title':'MTV 2월 ARTIST OF THE MONTH 출연',
'content': ['MTV가 1개월에 걸쳐 푸시하는 가장 중요한 아티스트 2월도 ARTIST OF THE MONTH 에 녹황색 사회가 결정',
  'MTV 1월에 가장 인기가 많은 아티스트를 선정하여 출연 여부를 결정하는 ARTIST OF THE MONTH 에 녹황색 사회가 출연합니다. ',
  '뮤직비디오 Alright 을 비롯해 MTV Unplugged 앙코르 방송 등 다양한 내용이 방영됩니다. ',
  '녹황색사회 MUSIC VIDEO HISTORY 2/16(일) 19:00~21:00/2/18(화) 19:00~21:00/2/26(수) 21:00~23:00'
]


}]
const News= function(){
return<div  className="main_div">
         
  <div 

  className='main__div'>

 
    <div className="img_center">
       <div 
      
       className="img__center">
    
           <p className="img_p">NEWS</p>
   
              {
                data.map((el)=>{
                  return <NewS_com key ={el.day} data={el}></NewS_com>
                })
              }
              <Sita></Sita>
       
        </div>
        
        </div>
    
        </div>
       
        </div>
}

export default News