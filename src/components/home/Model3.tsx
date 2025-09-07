// src/components/Model2.jsx
import { useGLTF } from '@react-three/drei'

export function Model3(props: any) {
  const { scene } = useGLTF('/models/third-model.glb')
  return <primitive object={scene} {...props} />
}

useGLTF.preload('/models/third-model.glb')
