
import React, { useEffect } from 'react'

import react, { useRef ,useMemo, useState,} from 'react'
// Three
import { Color } from 'three'
// Three
import Sita from './sita.jsx'
import Modal from './Modal/modal';
import { OrbitControls, ScrollControls,Scroll } from '@react-three/drei'
import { useSelector, useDispatch } from 'react-redux'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import First_Album_three from './First_Album_three'
import { Canvas, useFrame,useLoader } from '@react-three/fiber'
import Alubm_inner from './Alubm_inner'
import Fragment_Shader from '../Shader/Fragement_Shader'
import Vertex_shader from '../Shader/Vertex_shader'
import Modal2 from './Modal/model2.jsx';
import play from '../assets/right_white.svg'
import play_white from '../assets/play_white.svg'
import '../App.css'

import Album_div from './Album_div'


function Scene2({data}) {

  const backgroundShaderRef2 = useRef(null)
 

  useFrame(({ clock }) => {
    backgroundShaderRef2.current.material.uniforms.uTime.value = clock.getElapsedTime();


  })

  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0.0,
      },
      u_colorB: { value: new Color("#C0D2F3") },
      u_colorA: { value: new Color("#DCB2EF") },
   
    }), []
  );

  return (
 
      <mesh 
      ref={backgroundShaderRef2} 
      position={[0, 0, 2]}>
       <planeGeometry args={[20, 10, 2, 16]} />
       <shaderMaterial
        attach="material" 
        fragmentShader={Fragment_Shader}
        vertexShader={Vertex_shader}
        uniforms={uniforms}
      />

      </mesh>

  )
}
const First= function({click}){
  const name = useSelector((state) => state.store.name)
  const visible = useSelector((state) => state.store.visible);



  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);




  const model1= useMemo(() => useLoader(GLTFLoader, '/new_3.glb'), []); 
  const model7=useMemo(()=> useLoader(GLTFLoader, '/new_12.glb') ,[]) 
  const model2=useMemo(()=>useLoader(GLTFLoader, '/cover4.glb'),[]) 
  const model3=useMemo(()=>useLoader(GLTFLoader, '/new_2.glb') ,[])
  
  const model4= useMemo(()=> useLoader(GLTFLoader, '/new_6.glb') ,[])  
  const model5= useMemo(()=>useLoader(GLTFLoader, '/new_7.glb') ,[]) 
  const model6=useMemo(()=>useLoader(GLTFLoader, '/new_5.glb') ,[])
  
    const total_model_array=[
      model1,model2,model3,model4,model5,model6,model7
    ]
  useEffect(()=>{
  click(visible);

  },[visible])
  const list_name=[
    {
      name:'Sabotage',
      date:'2019.11.06',
      type:'single',
      money:'¥1,430',
      song_name:['sabotage','4:05'],
      image:'https://img.youtube.com/vi/FWQzurioulQ/maxresdefault.jpg',
      youtube:'https://www.youtube.com/watch?v=FWQzurioulQ',
      music:['sabotage','Alright!','sabotage (Instrumental)'],
      introduce:'2019년 봄투어는 각지에서 솔드아웃 대형 여름 패스티벨에도 다수 출현하였다. tv 테마송이나 cm 타이업 , 9월 에는 첫 영화 주제가를 담당하는듯 기세를 더하고 있는 4인조 밴드 , 녹황색 사회의 첫 싱글 이 발매된다. tbs 화요일 드라마 g선상의 당신과 나의 주제가인 이 곡은 나다욺을 추구하고 몸부림치는 도전을 계속하는 날들에 용기를 주는 녹황색 사회의 특유의 응원가이다. 더블곡으로는 nhk 종합테레비전 의 테마송인 alright 이 수록 되어있다. 초회 생산 한정판에는 2019년 6월 14일에 개최되는 녹황색야간회 vol.9 도쿄편에서 인기곡인 alice 안녕 라이브 음원이 처음으로 수록되었다.'
      ,url:'https://www.sonymusic.co.jp/adm_image/common/artist_image/70007000/70007781/jacket_image/188477__510_510_0.jpg',
      link:"https://www.youtube.com/embed/FWQzurioulQ?si=a9SDzr_7BDEJJRUg" 
    },
    {
      name:'SINGAGLONG',
      date:'2020.09.30',
      type:'album',
      money:'¥3,300',
      song_name:['mela','4:10'],
      image:'https://img.youtube.com/vi/aRDURmIYBZ4/maxresdefault.jpg',
      music:['SINGALONG','sabotage','Mela!','想い人','inori'],
      youtube:'https://www.youtube.com/watch?v=aRDURmIYBZ4',
      introduce:'4월에 발매되어, 아이튠즈 앨범 종합 1위를 획득하는 등 각 스토어에서의 상위 랭크 인을 기록하고 있는 New Album 「SINGALONG」. 녹황색 사회의 대표작이 될 이 작품의, 발매 연기가 되고 있던 CD 릴리즈가 드디어 결정! 「파르티 컬러링 밀크」CM송 「Mela!」, 애니메이션 「나의 히어로 아카데미아」 제 4기 제 2 쿨 엔딩 테마가 된 「Shout Baby」, 드라마 「G선상의 당신과 나」주제가 「sabotage」, 영화 「첫사랑 로스타임」주제가「생각인」등의 인기 악곡은 물론, 녹황색 사회의 큰 도약!',
      url:'https://www.sonymusic.co.jp/adm_image/common/artist_image/70007000/70007781/jacket_image/195627__510_510_0.jpg'
     ,link:  "https://www.youtube.com/embed/aRDURmIYBZ4?si=zzyK8PHViUuBKUS1" 
    },
    
    {
      name:'Summer Time Cinderella',
      date:'2023.09.06',
      type:'album',
      money:'¥3,900',
      song_name:['サマータイムシンデレラ','4:09'],
      image:'https://img.youtube.com/vi/nFR3uXaR0wk/maxresdefault.jpg',
      youtube:'https://www.youtube.com/watch?v=nFR3uXaR0wk',

      introduce:'서머타임 신데렐라는 후지TV 9월의 드라마 한여름의 신데렐라의 오프닝곡으로 여름 무대를 주제로 한 러브송이다. "단 한 여름, 단 한 여름".순식간에 지나가는 시간 속에서 분주하게 감정이 겹치는 모습, 무언가가 시작될 거 같은 기대감, 감정이 불러오는 초조감,고양감을 함께 느낄 수 있는 곡이다.이 드라마 삽입곡으로 사용되고 있는 magic hour 도 포함하고 있다.한정판은, "pink bluetour 2023" 도쿄 공연(2023.6.15@도쿄 국제 포럼)의 라이브 영상을 수록한 Blu-ray 영상이 들어있다.',

      music:['サマータイムシンデレラ','マジックアワー','サマータイムシンデレラ (Instrumental)',
    'マジックアワー (Instrumental)'],
    url:'https://www.sonymusic.co.jp/adm_image/common/artist_image/70007000/70007781/jacket_image/289901__510_510_0.jpg'
    ,link:  "https://www.youtube.com/embed/nFR3uXaR0wk?si=2lcuO34oy2HTcrSK"  
  },
    
    {
      name:'Shout Baby',
      date:'2020.02.19',
      type:'single',
      money:'¥1,110',
      song_name:['Shout Baby','4:35'],
      image:'https://img.youtube.com/vi/Ww8oxgqDQSs/maxresdefault.jpg',
      youtube:'https://www.youtube.com/watch?v=Ww8oxgqDQSs',
      introduce:'영화 주제가, 드라마 주제가 등을 작곡하여 꾸준히 인기·표현력의 영역을 넓혀가는 4명의 밴드 녹황색 사회.연말 대형 페스티벌 출연, 지상파 TV특집방송 등 인기의 기세를 올리고 있는 이 밴드의 다음 작품은 애니메이션 타이틀로 결정되었다.인기 TV 애니메이션 나의 히어로 아카데미아 4기 2쿨 엔딩곡 Shout Baby는 나가야 하루코(Vo&Gt) 작사 작곡으로 밴드만의 특유의 신나는 에너지가 담겨있으며,녹황색 사회가 완성을 더했다.더블곡에는, 애니메이션의 2기 2쿨·오프닝 테마 「하늘에게 노래하다」(amazarashi) 커버를 수록하였다.',
      music:['Shout Baby','空に歌えば','Shout Baby (Instrumental)'],
      url:'https://www.sonymusic.co.jp/adm_image/common/artist_image/70007000/70007781/jacket_image/191937__510_510_0.jpg'
      ,link:  "https://www.youtube.com/embed/Ww8oxgqDQSs?si=Y44znpt7_FSWObbQ" 
    },
    
    {
      name:'Actor',
      date:'2022.01.26',
      type:'album',
      money:'¥3,450',
      song_name:['キャラクター','4:31'],
      image:'https://img.youtube.com/vi/ulforNn47PM/maxresdefault.jpg',
      youtube:'https://www.youtube.com/watch?v=ulforNn47PM',
      introduce:'멤버 전원이 작곡 작사에 참여하는 싱어송 라이터 밴드로 도약하고 있으며 다양한 변화를 보여주고 있는 녹황색 사화의 새로운 앨범이 발매되었다. 드라마 애니메이션 CM 에 참여한 많은 곡들과 미발표된 신곡들이 포함되어있다. 각자 본인이 자신의 세계의 주연이라는 의미를 담은 곡이 타이틀로 결정되었다.',
      music:['Actor','キャラクター','merry-go-round','これからのこと、それからのこと'],
      url:'https://www.sonymusic.co.jp/adm_image/common/artist_image/70007000/70007781/jacket_image/227873__510_510_0.jpg'
   
      ,link:  "https://www.youtube.com/embed/ulforNn47PM?si=6ydrYKK58afzMX6T" 
    },
    {
      name:'The sun rises again',
      date:'2022.04.20',
      type:'single',
      song_name:['陽はまた昇るから','4:39'],
      image:'https://img.youtube.com/vi/e5FEOVTRfFc/maxresdefault.jpg',
      youtube:'https://www.youtube.com/watch?v=e5FEOVTRfFc',
      money:'¥1,630',
      introduce:'2022년 1월 26일 정규앨범 Actor 를 발매하여 최고의 인기를 누리고 있는 녹황색사회가 최대 규모의 전국 홀 투어를 앞두고 있는 시점에서 새로운 싱글을 발매한다. 타이틀곡  해는 다시 뜨니까 는 2022년 4월 22일 개봉한 영화 짱구는 못말려 모노노케 닌자 을 위해 작곡/ 작사한 곡으로 녹황색사회가 시도하지 않았던 새로운 사운드 을 보여주는 팝송이다. ',

      music:['陽はまた昇るから','時のいたずら','陽はまた昇るから -Instrumental-'],
      url:'https://www.sonymusic.co.jp/adm_image/common/artist_image/70007000/70007781/jacket_image/231720__510_510_0.jpg'
       ,link:"https://www.youtube.com/embed/e5FEOVTRfFc?si=HEiyzi752eK_MMok"
   
    },
    {
      name:'Pink blue',
      date:'2023.05.17',
      type:'album',
      song_name:['ピンクブルー', '4:11'],
      image:'https://img.youtube.com/vi/vudrTjCf-LM/maxresdefault.jpg'
,      youtube:'https://www.youtube.com/watch?v=vudrTjCf-LM',
      money:'¥3,630',
      introduce:'처음으로 일본 무도관 공연 , 연말 nhk 홍백 가합전 공연을 성환리에 성공적으로 끝낸 녹황색 사회의 새로운 앨범 모든 멤버가 각자의 매력과 특색을 담아 작사 작곡을 하여 노래를 완성시켰다. 다양한 곡조와 음색이 담겨 녹황색 사회의 특유의 분위기를 느낄수 있다. ',

      music:['ピンクブルー',' Starry Drama','ジブンセイフク',' あうん',' Don!!','ミチヲユケ'],
      url:'https://www.sonymusic.co.jp/adm_image/common/artist_image/70007000/70007781/jacket_image/279858__220_220_0.jpg?1701659141730'
    
      ,link:"https://www.youtube.com/embed/vudrTjCf-LM?si=sWpiF-yW9kH2zWty" 
    },
    
    
     ]
    
 


   const [collor,setcoolr]=useState([])


  return(
        <div  className={visible?"main_div": "main_second"}>
         
         {
            showModal&&  <Modal onClose={() => setShowModal(false)}></Modal>
          }
          {
            showModal2&&  <Modal2
            
            link={list_name[name-1].link}
            onClose={() => setShowModal2(false)}></Modal2>
          }


           <div 
         
           className='main__div'>
          
           

            <div className='main_canvas'>
         
            <div 
       
            style={{
                  width:'100%',
                  height:'90vh',
                  position:'absolute',
                  zIndex:'2',
                  backgroundColor:'transparent'
                }}> 

             
                <Canvas 
                frameloop="demand"
                orthographic camera={{zoom:250}}
              style={{
                width:'95%',
                height:'100%',
                backgroundColor:'transparent',

              }}
              >
                     <Scene2  />

                  { visible &&
      
                    <ScrollControls 
                   style={{
                  
                   }}
                  
                   horizontal
                   damping={0.7}
                  pages={3}>
                    <Scroll>

        
                      <First_Album_three
                      total_model_array={total_model_array}
                      ></First_Album_three>
                         </Scroll>

                    </ScrollControls>
}

                    {!visible &&
          

          <Alubm_inner></Alubm_inner>
          
          
                  }
          
     


              </Canvas>




              {!visible &&
              
              <Album_div list_name={list_name[name-1]}></Album_div>
           
     
}
                </div>
          
               <div style={{
                width:'100%',
                height:'91vh'
               }}>

               


           
             </div>
             </div>
             
 
{!visible&&
  <div className='total_show_iner'>
    <div className='show_inner'>  
    <div style={{
      width:'100%',
      marginTop:'12%'
     
    }}>
  
  
    <p className='show_inner_name'>
      {
        list_name[name-1].name
      }
      </p>
      <div>
        <p className='show_p'>
          {
            list_name[name-1].introduce
          }
          </p>
      </div>
     
      </div>  
      
    <div style={{
      width:'100%',
      marginTop:'12%'
     
      }}>
     <p className='show_inner_name'>
    PLAY LIST
      </p>
      <div className='show_play_list'>
       <div className='show_div'>

       
        <div className='play_inner'>

          <img 
          style={{
            width:'100%',
            height:'100%'
          }}
          src={list_name[name-1].url}></img>
        </div>
        
       </div>
       <div className='play_intro'>
          <p className='first_play'>
          {
        list_name[name-1].name
      }
          </p>
          <div style={{
            display:'flex',
            
          }}>
             <p className='second_play'>
            {
              list_name[name-1].date
            }/
          </p>
          <p className='second_play'>
             {
               list_name[name-1].type
            }/
          </p>
          <p className='second_play'>
            {
              list_name[name-1].money
            }
          </p>
            </div>
         
          <div
            onClick={() => setShowModal(true)}
          className='btn'>
            <p className='second_play_1'>BUY</p>
            <div className='play_div'>
                  <img
                       style={{
                        width:'100%',
                        height:'90%'
                       }}
                  src={play}></img>
                   </div>
          </div>
          <div style={{
            width:'90%',
          
          }}>

            {

              list_name[name-1].music.map((el,index)=>{
               return  <div 
               key={index}
               style={{
          width:'100%',
          height:'5vh',
        borderStyle:'solid',
        borderColor:'#F3F3F3',
        borderTopColor:'transparent',
        borderRightColor:'transparent',
        borderLeftColor:'transparent',
          display:'flex',
          borderWidth:'1px',
          alignItems:'center',
          overflow:'hidden'
        }}>
          <p 
          style={{
            fontWeight:'500',
            marginRight:'10px'
          }}
          className='play_p'>{index+1 }</p>
          <p className='play_p'>{el}</p>
          </div> 

              })
            }
        

            </div>

       </div>
      
      </div>

    </div>
    <div style={{
      width:'100%',
      marginTop:'12%',
      zIndex:5
     
    }}>
      <div className='video_mari'>     </div>
      <p className='show_inner_name'> VIDEO CONTENTS </p>
    


     
      <div className='show_video_content'>
        <div className='play_white'>
          <img 
             onClick={() => setShowModal2(true)}
          style={{
            width:'100%',
            height:'100%'
          }}
          src={play_white}></img>
        </div>
        <img 
         
        style={{
          width:'100%',
          height:'100%'
        }}
        src={
           list_name[name-1].image
        }></img>
          
      </div>
      <div className='viedo_p' >
         <p className='video_name'> 緑黄色社会 - 『{ list_name[name-1].song_name[0]}』 Official Video</p>
      <p>{ list_name[name-1].song_name[1]}</p>
        </div>
     



<Sita></Sita>

      </div>
    </div>

    
   
    </div>
}
          
 </div>
     
       </div>
  )
}

export default First