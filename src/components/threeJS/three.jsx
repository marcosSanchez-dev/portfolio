import * as THREE from 'three'
import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import './three.scss'
import { useGLTF, Environment } from '@react-three/drei'

function Daft({ z }) {
  const ref = useRef()
  const { viewport, camera } = useThree()
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z])
  const { nodes, materials } = useGLTF('/daft-transformed.glb')

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  })

  useFrame((state) => {
    ref.current.rotation.set(
      (data.rX += 0.001),
      (data.rY += 0.004),
      (data.rZ += 0.0005)
    )
    ref.current.position.set(data.x * width, (data.y += 0.02), z)
    if (data.y > height / 1.5) {
      data.y = -height / 1.5
    }
  })

  return (
    <group scale={0.013} ref={ref} dispose={null}>
      <group
        position={[0, 79.03, 3.33]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={43.91}
      >
        <mesh
          geometry={nodes.TB03_argent_0.geometry}
          material={materials.argent}
          position={[0, 0.76, -0.26]}
        />
        <mesh
          geometry={nodes.TB03_Default_OBJ_0.geometry}
          material={materials.Default_OBJ}
          position={[0, 0.2, -2.1]}
        />
      </group>
    </group>
  )
}

function Punk({ z }) {
  const ref = useRef()
  const { viewport, camera } = useThree()
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z])
  const { nodes, materials } = useGLTF('/punk-transformed.glb')

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  })

  useFrame((state) => {
    ref.current.rotation.set(
      (data.rX += 0.001),
      (data.rY += 0.004),
      (data.rZ += 0.0005)
    )
    ref.current.position.set(data.x * width, (data.y += 0.02), z)
    if (data.y > height / 1.5) {
      data.y = -height / 1.5
    }
  })

  return (
    <group scale={0.15} ref={ref} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.boton2_lambert1_0.geometry}
            material={materials.lambert1}
            position={[-0.97, 8.11, -0.39]}
          />
          <mesh
            geometry={nodes.pCylinder82_lambert2_0.geometry}
            material={materials.lambert2}
            position={[-1.02, 11.2, -5.56]}
          />
        </group>
      </group>
    </group>
  )
}

export default function ThreeApp({ count = 6 }) {
  return (
    <Canvas gl={{ alpha: false }}>
      <ambientLight intensity={1} />
      <spotLight position={[10, 10, 10]} intensity={0.5} />
      <Suspense fallback={null}>
        <Environment preset="sunset" />
        {Array.from({ length: count }, (_, i) => (
          <Punk key={i} z={-i} />
        ))}
        {Array.from({ length: count }, (_, i) => (
          <Daft key={i} z={-i} />
        ))}
      </Suspense>
    </Canvas>
  )
}
