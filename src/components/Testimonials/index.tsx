import { testimonials } from '@/data/testimonials';
import Image from 'next/image';
import React from 'react';
import { twMerge } from 'tailwind-merge';

function TestimonialColumns(props: {
    testimonials: typeof testimonials;
    className?: string;
}) {
    return (
        <div
            className={twMerge(
                'flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]',
                props.className
            )}
        >
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
        </div>
    );
}

export default TestimonialColumns;
