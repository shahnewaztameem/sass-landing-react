import React from 'react';
import Logo from '@/assets/logosaas.png';
import Image from 'next/image';
import HamburgerIcon from '@/assets/menu.svg';
import { navItems } from '@/data/nav_items';
import Link from 'next/link';
type Props = {};

function Navbar({}: Props) {
    return (
        <div className="container">
            <div className="flex items-center justify-between">
                <Image src={Logo} alt="logo" height={40} width={40} />
                <HamburgerIcon className="h-5 w-5 md:hidden" />
                <nav className="hidden md:flex gap-6 text-black/60 items-center">
                    {navItems.map((nav, idx) => (
                        <Link key={idx} href={nav.href}>
                            {nav.name}
                        </Link>
                    ))}
                    <button className="btn btn-primary">
                        Get Started
                    </button>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
