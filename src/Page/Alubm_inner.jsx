

import React, { useEffect, useRef } from "react"
import { useState } from "react";
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber';
import { useLoader,useThree } from '@react-three/fiber'
import { OrbitControls, useScroll ,Bounds, Plane} from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
;
import { useSelector, useDispatch } from 'react-redux'
import { change_name,change_visible } from '../storeSlice';

const Alubm_inner= function(){
  const name = useSelector((state) => state.store.name)

  const { width: w, height: h } = useThree((state) => state.viewport)
  const ref= useRef(null)
  var modell=  useLoader(GLTFLoader, `/album_${name}.glb`)
 
  useFrame((state, delta) => {
 
        ref.current.rotation.y+=0.005

 }
 )
  return(
    <>
  <ambientLight
 intensity={4}
></ambientLight>
  <primitive
   rotation-y={Math.PI}
 ref={ref}
  scale={[w/10, w/10, 0.5]}
    position={[  w/30,h/25, 3.4]}
 
      object={ modell.scene } 
    >
     </primitive>
  </>
  )
}

export default Alubm_inner