import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


import CanvasLoader from "../Loader";

const Spaceship = () => {
    const space_ship = useGLTF("./space_ship/scene.gltf");

   
  return (
    <primitive object={space_ship.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const SpaceShipCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
        <pointLight/>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Spaceship />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default SpaceShipCanvas;

