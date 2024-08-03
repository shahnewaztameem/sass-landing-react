'use client';
import TestimonialColumns from '@/components/Testimonials';
import { testimonials } from '@/data/testimonials';
import Image from 'next/image';
import { motion } from 'framer-motion';

const firstCol = testimonials.slice(0, 3);
const secondCol = testimonials.slice(3, 6);
const thirdCol = testimonials.slice(6, 9);

export const Testimonials = () => {
    return (
        <section className="bg-white">
            <div className="container">
                <div className="section-heading">
                    <div className="flex justify-center">
                        <div className="tag">Testimonials</div>
                    </div>
                    <h2 className="section-title mt-5">
                        What our customers are saying
                    </h2>
                    <p className="section-description mt-5">
                        From intuitive design to powerful features, our app has
                        become an essential tool for users around the world!
                    </p>
                </div>

                <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
                    <TestimonialColumns testimonials={firstCol} duration={16}/>
                    <TestimonialColumns
                        testimonials={secondCol}
                        className="hidden md:block"
                        duration={20}
                    />
                    <TestimonialColumns
                        testimonials={thirdCol}
                        className="hidden lg:block"
                        duration={18}
                    />
                </div>
            </div>
        </section>
    );
};
