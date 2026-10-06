import { banglaDateFormater } from '@/lib/date';
import { categoriesPromise, categoryNewsPromise } from '@/lib/news';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CategoryPage = async ({ params }: { params: Promise<{ categoryid: string }> }) => {
    const { categoryid } = await params
    const { news } = await categoryNewsPromise(categoryid)
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 my-5 mx-5">
            {
                news.map(news => <Link href={`/article/${news.id}`} key={news.id}>
                    <section className="card bg-base-100 shadow-sm
                        hover:ring-accent hover:ring-1">
                        <figure>
                            <Image
                                src={news.imageUrl}
                                alt={news.imageAlt}
                                width={500} height={500}
                                className="h-auto w-auto object-contain"
                                priority
                            />
                        </figure>
                        <div className="card-body">
                            <p className="text-accent">{news.category}</p>
                            <h2 className="card-title line-clamp-1">{news.title}</h2>
                            <p className="line-clamp-2 leading-relaxed flex-none">{news.description}</p>
                            <p className="text-xs text-black/50">{banglaDateFormater(news.lastPublished)}</p>

                        </div>
                    </section></Link>)
            }
        </div>
    );
};

export default CategoryPage;