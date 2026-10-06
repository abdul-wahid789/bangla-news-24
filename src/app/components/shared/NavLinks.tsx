'use client'

import { ICategory } from '@/types/news';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface props {
    categories: ICategory[]
}

const NavLinks = ({ categories }: props) => {
    const path = usePathname()
    const activeLink  = (url: string) => {
        if(path === url){
            return "text-primary font-bold"
        }
    }
    return (
        <ul className='flex gap-3 mt-3'>
            <Link href="/" className={activeLink('/')}><li>হোম</li></Link>
            {
                categories.map((category: ICategory) => {
                    if (category.scrapable) return <Link key={category.topicId}
                    href={`/category/${category.slug}`}
                    className={activeLink(`/category/${category.slug}`)}>
                        <li>{category.title}</li></Link>
                })
            }
        </ul>
    );
};

export default NavLinks;