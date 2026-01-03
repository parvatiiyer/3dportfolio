import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera } from "@react-three/drei"
import { useMediaQuery } from "react-responsive"
import { motion } from "framer-motion"

import HackerRoom from "../sections/HackerRoom"
import HeroCamera from "../sections/HeroCamera"
import CanvasLoader from "../sections/CanvasLoader"
import { calculateSizes } from "../constants"

const Home = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 })
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

  const sizes = calculateSizes(isSmall, isMobile, isTablet)

  return (
    <main
      id="home"
      className="
        relative
        min-h-[100svh]
        w-full
        bg-black text-white
        overflow-hidden
        pt-16 sm:pt-28
        pb-20 sm:pb-20
      "
    >
      {/* TOP AMBIENT PURPLE GLOW */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="
            absolute top-[-35%] left-1/2 -translate-x-1/2
            w-[600px] h-[600px]
            bg-purple-600/25
            blur-[260px]
          "
        />
      </div>

      {/* HERO CONTENT */}
      <section
        className="
          relative z-10
          mx-auto max-w-7xl
          px-6 lg:px-16
          min-h-[calc(100vh-9rem)]
          flex flex-col lg:flex-row
          items-center
          justify-start lg:justify-center
          gap-16
        "
      >
        {/* LEFT — FLOATING CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="
            w-full lg:w-1/2
            flex items-center lg:items-start
            text-center lg:text-left
            mt-10 sm:mt-6 lg:mt-0
          "
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="
              relative
              rounded-3xl
              px-10 py-12
              bg-black/70 backdrop-blur-xl
              border border-white/10
              shadow-[0_0_60px_rgba(139,92,246,0.22)]
              sm:mb-0
            "
          >
            <div
              className="
                pointer-events-none
                absolute inset-0 -z-10
                rounded-3xl
                blur-2xl
                bg-gradient-to-br
                from-indigo-500/25
                via-purple-500/20
                to-transparent
              "
            />

            <p className="text-lg text-white/80 mb-4 font-medium">
              Hi, I’m Parvati <span>👋</span>
            </p>

            <h1
              className="
                text-4xl sm:text-5xl xl:text-6xl
                font-extrabold
                leading-[1.05]
                bg-gradient-to-r
                from-[#BEC1CF]
                via-[#D5D8EA]
                to-white
                bg-clip-text text-transparent
              "
            >
              Combining AI, Code & Creativity.
            </h1>
          </motion.div>
        </motion.div>
        {/* RIGHT — 3D MODEL */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="
            relative
            w-full lg:w-1/2
            h-[420px] sm:h-[520px] lg:h-[640px]
                          sm:mt-0
          "
        >
          {/* GROUND SHADOW */}
          <div
            className="
              pointer-events-none
              absolute bottom-[-12%] left-1/2 -translate-x-1/2
              w-[70%] h-[35%]
              bg-black/70
              blur-[90px]
              rounded-full
            "
          />

          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 20]} />

              <HeroCamera isMobile={isMobile}>
                <HackerRoom
                  scale={sizes.deskScale * 1.12}
                  position={sizes.deskPosition}
                  rotation={[0.1, -Math.PI, 0]}
                />
              </HeroCamera>

              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
          </Canvas>
        </motion.div>
      </section>
    </main>
  )
}

export default Home
