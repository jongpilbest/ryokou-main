import classes from './news.module.css'
import React from 'react'
const NewS_com=function(){
  return   (
    <>
    <div className={classes.info}>
  <div className={classes.header}>
   <div className={classes.what}>
     <p className={classes.infoo}> INFO</p>
   </div>
   <p className={classes.date}> 2023.01.23</p>
   <p className={classes.p_name}>'녹황색 계획 2023-2024' 지진 여파 티켓 환불 안내 </p>
  </div>

</div>
<div className={classes.line}></div>
<div>
 <p className={classes.p_liner}>
 '료쿠샤화 계획 2023-2024' 나고야 공연·오사카 공연에 대해서 호쿠리쿠·조에쓰 방면의 피해 상황을 고려해
방문이 불가능한 고객에게 대상 티켓 환불을 실시합니다.
 </p>
 <br></br>
 <p className={classes.p_liner}>환불 방법 및 기간 등 자세한 사항은 추후 녹황색 사회 홈페이지를 통해 알려드리겠습니다.</p>
 <br></br>
 <p className={classes.p_liner}>피해를 입은 모든 분들의 안전과 건강, 그리고 하루빨리 부흥을 기원합니다.</p>

<br></br>
<p className={classes.p_liner}>[대상 공연] 1월 7일(일), 8일(월, 공휴일) 아이치, 일본 가이시 홀 1월 13일(토), 14일(일) 오사카, 오사카 성 홀</p>
<br></br>
<p className={classes.p_liner}>[공연 문의]</p>
<p className={classes.p_liner}>·나고야 공연 선데이 포크 프로모션
052-320-9100 12:00 18~00:0570 ·오사카 공연</p>

</div>
<div className={classes.line2}></div>
</>
  )
}

export default NewS_com