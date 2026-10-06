import { latestNewsPromise } from '@/lib/news';
import { INewsInfo } from '@/types/news';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Headlines = async () => {
    const { latestNews }: { latestNews: INewsInfo[] } = await latestNewsPromise()

    return (
        <div className="bg-primary text-base-100 font-bold">
            <div className="container mx-auto flex items-center">
                <p className="bg-accent px-2  py-1">সর্বশেষ</p>
                <Marquee>
                    {
                        latestNews.slice(0, 5).map((news: INewsInfo) => <span key={news.id} className="px-5">{news.title}</span>)
                    }
                </Marquee>
            </div>
        </div>
    );
};

export default Headlines;