import { useState } from "react"
import Globe from "react-globe.gl"
import { motion } from "framer-motion"
import Button from "../sections/Button.jsx"

const About = () => {
    const [hasCopied, setHasCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText("parvatiiyer2007@gmail.com")
        setHasCopied(true)
        setTimeout(() => setHasCopied(false), 2000)
    }

    // Shared card style (glass + glow)
    const card =
        "relative w-full h-full rounded-3xl bg-black/70 backdrop-blur-xl \
     border border-white/10 p-6 sm:p-8 flex flex-col gap-5 \
     transition-all duration-300 \
     shadow-[0_0_0px_rgba(168,85,247,0)] \
     hover:shadow-[0_0_40px_rgba(168,85,247,0.18)] \
     hover:-translate-y-1"

    return (
        <main
            className="
        relative min-h-screen
        bg-black text-white
        overflow-hidden
        pt-30
        pb-40 sm:pb-32
      "
        >
            {/* PAGE AMBIENT GLOW */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <div
                    className="
            absolute top-[-30%] left-1/2 -translate-x-1/2
            w-[720px] h-[720px]
            bg-purple-600/20
            blur-[260px]
          "
                />
            </div>

            <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pb-16">
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                        About Me
                    </h1>
                    <p className="mt-4 text-white/60 max-w-xl">
                        A little more about who I am, how I work, and what I enjoy building.
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="grid gap-5 xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2">
                    {/* INTRO */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="xl:row-span-3"
                    >
                        <div className={card}>
                            <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-purple-500/10 blur-[60px]" />

                            <img
                                src="assets/grid1.png"
                                alt="intro"
                                className="w-full h-[220px] object-contain opacity-40"
                            />

                            <div>
                                <h3 className="text-xl font-semibold mb-2">
                                    Hi, I’m Parvati
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    I enjoy building clean, interactive frontends and experimenting
                                    with 3D on the web. I care deeply about polish, motion, and how
                                    products feel.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* STACK */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                        className="xl:row-span-3"
                    >
                        <div className={card}>
                            <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-purple-500/10 blur-[60px]" />

                            <img
                                src="assets/grid2.png"
                                alt="stack"
                                className="w-full h-[220px] object-contain opacity-40"
                            />

                            <div>
                                <h3 className="text-xl font-semibold mb-2">
                                    Tech Stack
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    React, Three.js, Tailwind, and JavaScript — blending UI
                                    engineering with motion and immersive 3D experiences.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* GLOBE */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="xl:row-span-4"
                    >
                        <div className={card}>
                            {/* Ambient card glow */}
                            <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-purple-500/10 blur-[60px]" />


                            {/* Globe glow */}
                            <div className="absolute inset-0 bg-purple-500/2 blur-[100px] rounded-full" />

                            <Globe
                                height={280}
                                width={280}
                                backgroundColor="rgba(0,0,0,0)"
                                showAtmosphere
                                atmosphereColor="rgba(168,85,247,0.35)"
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />

                            {/* Text + Animated Button */}
                            <div>
                                <h3 className="text-xl font-semibold mb-2">
                                    Flexible with time zones
                                </h3>
                                <p className="text-white/60 text-sm">
                                    Based in India, open to remote work worldwide.
                                </p>

                                <motion.div
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    whileHover={{ scale: 1.03 }}
                                >
                                    <Button
                                        name="Contact Me"
                                        isBeam
                                        containerClass="
                                            w-full mt-6
                                            bg-black text-white
                                            rounded-xl py-3
                                            transition-all duration-300
                                            shadow-[0_0_0px_rgba(168,85,247,0)]
                                            hover:shadow-[0_0_30px_rgba(168,85,247,0.45)]
                                            hover:bg-purple-900/90
                                        "
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* PASSION */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="xl:col-span-2 xl:row-span-3"
                    >
                        <div className={card}>
                            <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-purple-500/10 blur-[60px]" />

                            <img
                                src="assets/grid3.png"
                                alt="coding"
                                className="w-full h-[200px] object-contain opacity-100"
                            />

                            <div>
                                <h3 className="text-xl font-semibold mb-2">
                                    My Passion for Coding
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    Coding is where creativity meets logic. I love exploring new
                                    technologies, refining interactions, and pushing interfaces
                                    beyond static layouts.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* CONTACT */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                        className="xl:row-span-2"
                    >
                        <div className={`${card} justify-between`}>
                            <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-purple-500/10 blur-[60px]" />

                            <img
                                src="assets/grid4.png"
                                alt="contact"
                                className="w-full h-[110px] object-cover opacity-100"
                            />

                            <div className="space-y-3">
                                <p className="text-center text-white/60 text-sm">
                                    Contact me
                                </p>

                                <div
                                    onClick={handleCopy}
                                    className="cursor-pointer flex justify-center items-center gap-2"
                                >
                                    <img
                                        src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                                        alt="copy"
                                        className="opacity-70"
                                    />
                                    <p className="text-sm sm:text-base font-medium bg-gradient-to-r from-[#BEC1CF] via-[#D5D8EA] to-white bg-clip-text text-transparent">
                                        parvatiiyer2007@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}

export default About
