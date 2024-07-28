import React from 'react';
import ArrowRight from '@/assets/arrow-right.svg';
type Props = {};

function ActionBar({}: Props) {
    return (
        <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
            <div className="inline-flex gap-1 items-center">
                <p className="text-white/60 hidden md:block">
                    Streamline your workflow and boost your productivity.
                </p>
                <p>Get Started For Free</p>
                <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
            </div>
        </div>
    );
}

export default ActionBar;
