import React from "react";
import "./home.css";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
import ImagePlane from "./ImagePlane";

const Home: React.FC = () => {
  return (
    <>
      <div className="home-heading">Home</div>
      <Canvas camera={{position: [0,0,10]}}>
        <ambientLight
        intensity={0.5}
         />
         <pointLight position={[10,10,10]} />
        <ImagePlane />
      </Canvas>
       {/* <Canvas>
      <ambientLight />
      <ImagePlane />
      <OrbitControls />
    </Canvas> */}
    </>
  );
}; 

export default Home;
