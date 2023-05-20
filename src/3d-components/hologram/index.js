import React, { useEffect, useRef } from "react";
import { Billboard, Image, useScroll, useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

import alphaMap from "./textures/alpha-map.png";
import theme from "~/src/theme";

function Hologram() {
  const scroll = useScroll();
  const imageRef = useRef();

  const { scene } = useThree();

  useEffect(() => {
    const pointLight = new THREE.PointLight(0xffffff, 1, 20);
    imageRef.current.add(pointLight);

    // Animate the light intensity over time
    const initialIntensity = 10;
    const targetIntensity = 0;
    const duration = 2; // in seconds

    let startTime = null;
    const animateLight = (time) => {
      if (startTime === null) startTime = time;
      const elapsed = (time - startTime) / 1000; // convert to seconds

      if (elapsed <= duration) {
        const t = elapsed / duration;
        pointLight.intensity = initialIntensity * (1 - t) + targetIntensity * t;
        requestAnimationFrame(animateLight);
      } else {
        pointLight.intensity = targetIntensity;
      }
    };

    animateLight(0);

    return () => {
      scene.remove(pointLight);
    };
  }, [scene]);

  useFrame(() => {
    const scale = scroll.range(0.72, 1);
    imageRef.current.scale.set(scale * 4, scale * 4, scale * 4);
    imageRef.current.position.y = scale * 40 - 10;
  });

  return (
    <group ref={imageRef}>
      <Billboard>
        <Image scale={15} url={"pictures/Saif1.jpg"} position={[0, 5, 0]} />
      </Billboard>
    </group>
  );
}

export default Hologram;
