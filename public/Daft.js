/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/daft-transformed.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 79.03, 3.33]} rotation={[Math.PI, 0, Math.PI]} scale={43.91}>
        <mesh geometry={nodes.TB03_argent_0.geometry} material={materials.argent} position={[0, 0.76, -0.26]} />
        <mesh geometry={nodes.TB03_Default_OBJ_0.geometry} material={materials.Default_OBJ} position={[0, 0.2, -2.1]} />
      </group>
    </group>
  )
}

useGLTF.preload('/daft-transformed.glb')
