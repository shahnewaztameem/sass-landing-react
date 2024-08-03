'use client';
import ArrowRight from '@/assets/arrow-right.svg';
import cogImage from '@/assets/cog.png';
import cylinder from '@/assets/cylinder.png';
import noodleImage from '@/assets/noodle.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export const Hero = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start end', 'end start'],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
        <section
            ref={heroRef}
            className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
        >
            <div className="container">
                <div className="md:flex items-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: 'easeOut',
                            delay: 0.2,
                        }}
                        className="md:flex items-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: 'easeOut',
                                delay: 0.2,
                            }}
                            className="md:w-[478px]"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    ease: 'easeOut',
                                    delay: 0.4,
                                }}
                                className="tag"
                            >
                                Version 1.0 is Here
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    ease: 'easeOut',
                                    delay: 0.6,
                                }}
                                className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6"
                            >
                                Pathway to productivity
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    ease: 'easeOut',
                                    delay: 0.8,
                                }}
                                className="text-xl text-[#010D3E] tracking-tight mt-6"
                            >
                                Celebrate the joy of accomplishment with an app
                                designed to track your progress, motivate your
                                efforts, and celebrate your successes.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    ease: 'easeOut',
                                    delay: 1.0,
                                }}
                                className="flex gap-1 items-center mt-[30px]"
                            >
                                <button className="btn btn-primary">
                                    Get Started
                                </button>
                                <button className="btn btn-text gap-1">
                                    <span>Learn More</span>
                                    <ArrowRight className="h-5 w-5" />
                                </button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
                        <motion.img
                            src={cogImage.src}
                            alt="cog"
                            className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
                            animate={{
                                translateY: [-30, 30],
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: 'mirror',
                                duration: 3,
                                ease: 'easeInOut',
                            }}
                        />
                        <motion.img
                            src={cylinder.src}
                            alt="cylinder"
                            width={220}
                            height={220}
                            className="hidden md:block -top-8 -left-32 md:absolute"
                            style={{
                                translateY: translateY,
                            }}
                        />
                        <motion.img
                            src={noodleImage.src}
                            alt="noodleImage"
                            width={220}
                            className="hidden lg:block absolute top-[524px] left-[440px] rotate-[30deg]"
                            style={{
                                rotate: 30,
                                translateY: translateY,
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
