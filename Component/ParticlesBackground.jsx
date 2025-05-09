import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles'; // This is okay
// If it still fails, use this instead:
// import { loadFull } from 'tsparticles-engine';

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    console.log('Particles engine loaded:', engine);
    await loadFull(engine); // Load full bundle
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: '#00000000' }, // transparent
        particles: {
          number: { value: 40 },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: { value: 0.2 },
          size: { value: { min: 1, max: 3 } },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            outModes: { default: 'bounce' },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticlesBackground;



