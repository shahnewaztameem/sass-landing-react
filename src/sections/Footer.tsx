import logo from '@/assets/logosaas.png';
import Image from 'next/image';
import Link from 'next/link';
import XIcon from '@/assets/social-x.svg';
import SocialInsta from '@/assets/social-insta.svg';
import SocialLinkedIn from '@/assets/social-linkedin.svg';
import SocialPin from '@/assets/social-pin.svg';
import SocialYoutube from '@/assets/social-youtube.svg';

export const Footer = () => {
    return (
        <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
            <div className="container">
                <div className="inline-flex relative before:content[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] before:absolute">
                    <Image
                        src={logo}
                        height={40}
                        alt="logo"
                        className="relative"
                    />
                </div>
                <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
                    <Link href="#">About</Link>
                    <Link href="#">Features</Link>
                    <Link href="#">Customers</Link>
                    <Link href="#">Pricing</Link>
                    <Link href="#">Help</Link>
                    <Link href="#">Careers</Link>
                </nav>
                <div className='flex justify-center gap-6 mt-6'>
                    <XIcon />
                    <SocialInsta />
                    <SocialLinkedIn />
                    <SocialPin />
                    <SocialYoutube />
                </div>
                <p className='mt-6'>
                    &copy; {new Date().getFullYear()} SaaS Landing. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};
