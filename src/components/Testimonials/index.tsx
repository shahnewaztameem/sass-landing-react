import { testimonials } from '@/data/testimonials';
import Image from 'next/image';
import React, { Fragment } from 'react';
import { motion } from 'framer-motion';

function TestimonialColumns(props: {
    testimonials: typeof testimonials;
    className?: string;
    duration?: number;
}) {
    return (
        <div className={props.className}>
            <motion.div
                animate={{
                    translateY: '-50%',
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: 'linear',
                    repeatType: 'loop',
                }}
                className="flex flex-col gap-6 pb-6"
            >
                {[...new Array(2)].fill(0).map((_, idx) => (
                    <Fragment key={idx}>
                        {props.testimonials.map(
                            ({ text, imageSrc, name, username }, idx) => (
                                <div key={idx} className="card">
                                    <div>{text}</div>
                                    <div className="flex items-center gap-2 mt-5">
                                        <Image
                                            src={imageSrc}
                                            alt={name}
                                            className="h-10 w-10 rounded-full"
                                            width={40}
                                            height={40}
                                        />
                                        <div className="flex flex-col">
                                            <div>{name}</div>
                                            <div>{username}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </Fragment>
                ))}
            </motion.div>
        </div>
    );
}

export default TestimonialColumns;
