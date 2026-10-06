import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavLinks from './NavLinks';
import { categoriesPromise } from '@/lib/news';

const Navbar = async () => {
    const date = new Date().toLocaleDateString("bn-BD", { dateStyle: 'full' })
    const {categories} = await categoriesPromise()

    return (
        <nav className='continer mx-auto  my-5 flex flex-col items-center'>
            <div className='flex items-center gap-5'>
                <div className='flex gap-2'>
                    <Image src="/logo.webp"
                        height={10} width={10} alt="logo"
                        className="h-10 w-10 object-contain"
                        priority></Image>
                    <div>
                        <h1 className='font-bold text-accent lg:text-2xl'>Bangla News 24</h1>
                        <p className='text-black/60 text-xs lg:text-base'>{date}</p>
                    </div>
                </div>

                <div className='space-x-2 flex lg:absolute right-10'>
                    <button className='btn-xs lg:btn-md btn btn-outline border-accent'>সাইন ইন</button>
                    <button className='btn-xs lg:btn-md btn btn-accent'>সাইন আপ</button>
                </div>
            </div>


            <NavLinks categories={categories} />
        </nav>
    );
};

export default Navbar;