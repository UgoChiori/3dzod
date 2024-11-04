import React from 'react';
// import {Canvas} from "@react-three/fiber";
import {useTexture} from "@react-three/drei";




const ImagePlane:React.FC = () => {
    const texture = useTexture("/images/my3d.jpg");
 
  return (
<mesh position={[0, 0, 0]} rotation={[0.2, 0.4, 0]}>
    <planeGeometry args={[5, 5]} />
    <meshBasicMaterial map={texture} />
</mesh>
  )
}

export default ImagePlane