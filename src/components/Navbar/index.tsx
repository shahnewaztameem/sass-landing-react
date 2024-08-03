'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Logo from '@/assets/logosaas.png';
import HamburgerIcon from '@/assets/menu.svg';
import CloseIcon from '@/assets/close-icon.svg';
import { navItems } from '@/data/nav_items';
import Link from 'next/link';

type Props = {};

function Navbar({}: Props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="container">
            <div className="flex items-center justify-between">
                <Image src={Logo} alt="logo" height={40} width={40} />
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <CloseIcon className="h-5 w-5" />
                        ) : (
                            <HamburgerIcon className="h-5 w-5" />
                        )}
                    </button>
                </div>
                <nav className="hidden md:flex gap-6 text-black/60 items-center">
                    {navItems.map((nav, idx) => (
                        <Link key={idx} href={nav.href}>
                            {nav.name}
                        </Link>
                    ))}
                    <button className="btn btn-primary">Get Started</button>
                </nav>
            </div>
            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="md:hidden flex flex-col items-center mt-4 text-black/60 overflow-hidden"
                    >
                        {navItems.map((nav, idx) => (
                            <Link key={idx} href={nav.href} className="my-2">
                                {nav.name}
                            </Link>
                        ))}
                        <button className="btn btn-primary mt-4">
                            Get Started
                        </button>
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Navbar;
