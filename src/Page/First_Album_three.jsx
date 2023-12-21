import * as THREE from 'three'
import { useFrame } from '@react-three/fiber';
import { useLoader,useThree } from '@react-three/fiber'
import { useCallback, useMemo, useRef, useState } from 'react';
//import { useFrame } from '@react-three/fiber';
import { OrbitControls, useScroll ,Bounds, Plane} from '@react-three/drei';
//import { PerspectiveCamera } from '@react-three/drei';

import { useSelector, useDispatch } from 'react-redux'
import { change_name,change_visible,change_model } from '../storeSlice';
import React from 'react'
import { OrthographicCamera } from '@react-three/drei';
const Model= React.memo(function({model,scale,position,index}){
  const model_rotate = useSelector((state) => state.store.rotate_model);
const dispatch = useDispatch()
 console.log('dfd')

const ref=useRef(null)



  return (<>

<primitive
ref={ref}
     onClick={()=> {
    dispatch(change_name(index+1))
    dispatch(change_visible())
    }}
    onPointerOver={(e) => 
      {
    

        }
      }
    
    onPointerOut={(e) => {
     
    }}


 rotation-y={Math.PI}
  object={ model.scene } 
  scale={scale}
 position={position} >
 </primitive>
 </>
  )
  
})



const First_Album_three= function({total_model_array}){


  const scroll = useScroll()
const [hovered, setHovered] = useState(false);





const { width: w, height: h } = useThree((state) => state.viewport)


  return(
     <>


<ambientLight
 intensity={3}
></ambientLight>

<group >
   

{ 
total_model_array.map((model_name,i)=>{
   
  return <Model
  key={i}
  index={i}
  scale={[w/17, h/8, 1]}
  model={model_name}
  position={[ (i-1)* w/2.65,-h/2.8, 2]}
/>
})

}



 
    </group>


</>
  )
}

export default  React.memo(First_Album_three);
