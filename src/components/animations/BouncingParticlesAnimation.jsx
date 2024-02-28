"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const BouncingParticlesAnimation = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("");
  };

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      particles: {
        number: {
          value: 500,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: "#ffff00",
        },
        opacity: {
          value: { min: 0.1, max: 0.7 },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.1,
          },
        },
        size: {
          value: { min: 1, max: 5 },
          animation: {
            enable: true,
            speed: 3,
            minimumValue: 0.1,
          },
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          outMode: "out",
          attract: {
            enable: false,
          },
        },
        lineLinked: {
          enable: false,
        },
        shape: {
          type: "circle",
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            size: 40,
            opacity: 0.8,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <div className="pointer-events-none absolute top-0">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          height={500}
          width={500}
        />
      </div>
    );
  }

  return <></>;
};

export default BouncingParticlesAnimation;
