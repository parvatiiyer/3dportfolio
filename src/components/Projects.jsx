import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import { myProjects } from '../constants/index.js';
import CanvasLoader from '../sections/CanvasLoader.jsx';
import DemoComputer from '../sections/DemoComputer.jsx';

const projectCount = myProjects.length;

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    useGSAP(() => {
        gsap.fromTo(
            `.animatedText`,
            { opacity: 0 },
            { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' }
        );
    }, [selectedProjectIndex]);

    const currentProject = myProjects[selectedProjectIndex];

    return (
        <main className='relative
            min-h-[100svh]
            w-full
            bg-black text-white
            overflow-hidden
            pt-2 sm:pt-5
            pb-20 sm:pb-20
        ' >
            <section
                id="work"
                className="w-full max-w-7xl max-h-2xl mx-auto my-24 px-6 lg:px-16"
            >
                <div className="pointer-events-none absolute inset-0 z-0">
                    <div
                        className="
                        absolute top-[-35%] left-1/2 -translate-x-1/2
                        w-[500px] h-[500px]
                        bg-purple-600/25
                        blur-[260px]
                    "
                    />
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 mt-14 gap-8 w-full">

                    {/* LEFT PANEL */}
                    <div
                        className="
                            relative
                            flex flex-col gap-6
                            p-8
                            bg-black/60 backdrop-blur-xl
                            rounded-3xl
                            border border-white/10
                            overflow-hidden
                        "
                    >
                        {/* Ambient glow */}
                        <div className="pointer-events-none absolute inset-0 -z-10">
                            <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/20 blur-[140px]" />
                        </div>

                        {/* Spotlight Image */}
                        <div className="absolute top-0 right-0 opacity-40">
                            <img
                                src={currentProject.spotlight}
                                alt="spotlight"
                                className="w-full h-80 object-cover rounded-3xl"
                            />
                        </div>

                        {/* Logo */}
                        <div
                            className="p-3 backdrop-blur-xl rounded-xl w-fit border border-white/10"
                            style={currentProject.logoStyle}
                        >
                            <img
                                className="w-10 h-10"
                                src={currentProject.logo}
                                alt="logo"
                            />
                        </div>

                        {/* Text */}
                        <div className="flex flex-col gap-4 text-white/70 mt-4">
                            <p className="text-white text-2xl font-semibold animatedText">
                                {currentProject.title}
                            </p>

                            <p className="animatedText leading-relaxed">
                                {currentProject.desc}
                            </p>

                            <p className="animatedText text-sm text-white/50">
                                {currentProject.subdesc}
                            </p>
                        </div>

                        {/* Tags + Link */}
                        <div className="flex items-center justify-between flex-wrap gap-6 mt-4">

                            {/* Tags */}
                            <div className="flex items-center gap-3">
                                {currentProject.tags.map((tag, index) => (
                                    <div
                                        key={index}
                                        className="
                                            w-10 h-10
                                            rounded-lg
                                            bg-white/5
                                            border border-white/10
                                            flex items-center justify-center
                                            backdrop-blur-sm
                                        "
                                    >
                                        <img
                                            src={tag.path}
                                            alt={tag.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Live Link */}
                            <a
                                href={currentProject.href}
                                target="_blank"
                                rel="noreferrer"
                                className="
                                    flex items-center gap-2
                                    text-sm text-white/70
                                    hover:text-white transition
                                "
                            >
                                Check Live Site
                                <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                            </a>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between items-center mt-6">
                            <button
                                onClick={() => handleNavigation('previous')}
                                className="
                                    w-10 h-10
                                    flex items-center justify-center
                                    rounded-full
                                    bg-white/10
                                    border border-white/20
                                    hover:bg-white/20 transition
                                "
                            >
                                <img src="/assets/left-arrow.png" alt="left" className="w-4 h-4" />
                            </button>

                            <button
                                onClick={() => handleNavigation('next')}
                                className="
                                    w-10 h-10
                                    flex items-center justify-center
                                    rounded-full
                                    bg-white/10
                                    border border-white/20
                                    hover:bg-white/20 transition
                                "
                            >
                                <img src="/assets/right-arrow.png" alt="right" className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* RIGHT PANEL — CANVAS */}
                    <div
                        className="
                            relative
                            bg-black/60 backdrop-blur-xl
                            rounded-3xl
                            border border-white/10
                            overflow-hidden
                            h-96 md:h-full
                        "
                    >
                        {/* Ambient glow */}
                        <div className="pointer-events-none absolute inset-0 -z-10">
                            <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/20 blur-[160px]" />
                        </div>

                        <Canvas>
                            <ambientLight intensity={Math.PI} />
                            <directionalLight position={[10, 10, 5]} />

                            <Center>
                                <Suspense fallback={<CanvasLoader />}>
                                    <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                        <DemoComputer texture={currentProject.texture} />
                                    </group>
                                </Suspense>
                            </Center>

                            <OrbitControls
                                maxPolarAngle={Math.PI / 2}
                                enableZoom={false}
                            />
                        </Canvas>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default Projects;
