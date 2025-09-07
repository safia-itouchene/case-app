// src/components/Model.jsx (or inside your HeroSection file)
import { useGLTF } from '@react-three/drei'

export function Model(props : any) {
  // Absolute path because the file lives in /public
  const { scene } = useGLTF('/models/hero-model.glb')
  return <primitive object={scene} {...props} />
}

// Optional: preload to avoid pop-in
useGLTF.preload('/models/hero-model.glb')
