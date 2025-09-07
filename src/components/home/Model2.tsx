// src/components/Model2.jsx
import { useGLTF } from '@react-three/drei'

export function Model2(props: any) {
  const { scene } = useGLTF('/models/second-model.glb')
  return <primitive object={scene} {...props} />
}

useGLTF.preload('/models/second-model.glb')
