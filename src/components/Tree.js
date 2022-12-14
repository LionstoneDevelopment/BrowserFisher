/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Kotzuo (https://sketchfab.com/Kotuzo)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/low-poly-tree-6d986e0b24b54d85a5354e5cac6207a1
title: Low poly tree
*/

import React, { useRef } from 'react'
import { useGLTF, MeshWobbleMaterial } from '@react-three/drei'

const Tree = (props) => {
  const { nodes, materials } = useGLTF('/tree.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.17}>
          <mesh geometry={nodes.Plane_0.geometry} material={materials['Material.001']} >
            <MeshWobbleMaterial factor={0.15} attach="material" color="green"  />
          </mesh>
          <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.002']} >
            <MeshWobbleMaterial factor={0.15} attach="material" color="brown"  />
          </mesh>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/tree.gltf')

export default Tree;
