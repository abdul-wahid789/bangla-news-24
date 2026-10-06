import { fullNewsPromise } from '@/lib/news';
import { IFullNews } from '@/types/news';
import Image from 'next/image';
import React from 'react';

const NewsPage = async ({ params }: { params: Promise<{ articleid: string }> }) => {
    const { articleid } = await params
    const news: IFullNews | string = await fullNewsPromise(articleid)

    return (
        <article>
            {typeof news !== "string" ? (
                <div className='mt-10 max-w-250 mx-auto'>
                    <h1 className='text-4xl font-bold '>{news.title}</h1>
                    
                    <div className='flex flex-col'>
                        {
                            news.body.map((bodyPart, i) => {
                                if (bodyPart.type === 'image') {
                                    return <div key={i} className='my-10'>
                                        <Image src={bodyPart.url} alt={bodyPart.altText}
                                            height={bodyPart.height} width={bodyPart.width}
                                            className='w-full h-auto container object-contain'
                                        >
                                        </Image>
                                    </div>
                                }


                                else if (bodyPart.type === 'subheading') {
                                    return <div key={i} className='mb-5'>
                                        <h1 className='font-bold text-2xl'>{bodyPart.text}</h1>
                                    </div>
                                }
                                else {
                                    return <div key={i}>
                                        <p>{bodyPart.text}</p>
                                    </div>
                                }

                            })
                        }
                    </div>
                </div>
            ) : (
                <div className="text-accent">
                    <p>{news}</p>
                </div>
            )}
        </article>
    );
};

export default NewsPage;