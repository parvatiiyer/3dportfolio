/*
  Cleaned & production-safe version
  Original model generated via gltfjsx
*/

import { useRef, useEffect } from "react";
import { useGLTF, useVideoTexture } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as THREE from "three";

const DemoComputer = ({ texture }) => {
  const group = useRef();

  // Load model
  const { nodes, materials } = useGLTF("/models/computer.glb");

  // Load video texture (MP4 only – production safe)
  const videoTexture = useVideoTexture(
    texture ?? "/videos/resume-demo.mp4",
    {
      loop: true,
      muted: true,
      autoplay: true,
      playsInline: true,
      crossOrigin: "anonymous",
    }
  );

  // Fix texture orientation + color space
  useEffect(() => {
    if (!videoTexture) return;

    videoTexture.flipY = false;
    videoTexture.colorSpace = THREE.SRGBColorSpace;
  }, [videoTexture]);

  // Entry animation
  useGSAP(() => {
    if (!group.current) return;

    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <group ref={group} dispose={null}>
      {/* Screen */}
      <mesh
        geometry={nodes["monitor-screen"].geometry}
        position={[0.127, 1.831, 0.511]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.661, 0.608, 0.401]}
      >
        <meshBasicMaterial
          map={videoTexture}
          toneMapped={false}
        />
      </mesh>

      {/* Monitor body */}
      <group
        position={[0.266, 1.132, 0.051]}
        rotation={[0, -0.033, 0]}
        scale={[0.042, 0.045, 0.045]}
      >
        <mesh geometry={nodes["Monitor-B-_computer_0_1"].geometry} material={materials.computer} />
        <mesh geometry={nodes["Monitor-B-_computer_0_2"].geometry} material={materials.base__0} />
        <mesh geometry={nodes["Monitor-B-_computer_0_3"].geometry} material={materials.Material_36} />
        <mesh geometry={nodes["Monitor-B-_computer_0_4"].geometry} material={materials.Material_35} />
        <mesh geometry={nodes["Monitor-B-_computer_0_5"].geometry} material={materials.Material_34} />
        <mesh geometry={nodes["Monitor-B-_computer_0_6"].geometry} material={materials.keys} />
        <mesh geometry={nodes["Monitor-B-_computer_0_7"].geometry} material={materials.keys2} />
        <mesh geometry={nodes["Monitor-B-_computer_0_8"].geometry} material={materials.Material_37} />
      </group>
    </group>
  );
};

useGLTF.preload("/models/computer.glb");

export default DemoComputer;
