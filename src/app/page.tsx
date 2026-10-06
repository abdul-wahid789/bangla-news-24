import Marquee from "react-fast-marquee";
import { latestNewsPromise, mostReadPromise, newsSectionsPromise } from "@/lib/news";
import { INewsInfo } from "@/types/news";
import Image from "next/image";
import Link from "next/link";
import { banglaDateFormater } from "@/lib/date";

export default async function Home() {
  const { latestNews }: { latestNews: INewsInfo[] } = await latestNewsPromise()
  const highlightNews = latestNews[0]

  const { mostRead } = await mostReadPromise()

  const { newsSections } = await newsSectionsPromise()

  return (
    <section>

      {/* news section  */}

      <section className="grid grid-cols-3 my-5 gap-5">
        <Link href={`article/${highlightNews.id}`}>
          <section className="card bg-base-100 shadow-sm hover:ring-accent hover:ring-1">
            <figure>
              <Image
                src={highlightNews.imageUrl}
                alt={highlightNews.imageAlt}
                width={500} height={500}
              />
            </figure>
            <div className="card-body">
              <p className="text-accent">প্রধান খবর</p>
              <h2 className="card-title">{highlightNews.title}</h2>
              <p className="line-clamp-3">{highlightNews.description}</p>

            </div>
          </section>
        </Link>

        <section className="border rounded-md border-black/20 divide-y flex flex-col divide-black/20 overflow-hidden">
          {
            latestNews.slice(1, 5).map(news => <div key={news.id}
              className="p-5 cursor-pointer hover:bg-base-200">
              <p className="text-accent ">প্রধান খবর</p>
              <h2 className="text-lg font-bold">{news.title}</h2>
            </div>)
          }

        </section>


        {/* most read  */}


        <section className="ml-10">
          <h3 className="text-lg font-bold mb-5">সর্বাধিক পঠিত</h3>
          <div className="space-y-4">
            {
              mostRead.slice(0, 11).map((news, i) => <div key={news.id}
                className="flex items-center gap-3"
              >
                <p className="text-accent font-bold text-lg">{i + 1}</p>
                <h2 className="font-bold">{news.title}</h2>
              </div>)
            }
          </div>
        </section>


        {/* other news category  */}

        {
          newsSections.filter(section => section.articles
            .some(news => news.type === 'article'))
            .map(newsSection => <section key={newsSection.curationId}
              className="col-span-2">
              <h1 className="border-b-2 border-accent font-bold text-2xl">{newsSection.title}</h1>
              <div className="grid grid-cols-3 gap-3 my-5">
                {
                  newsSection.articles.map(news => <section key={news.id}
                    className="card bg-base-100 shadow-sm
                hover:ring-accent hover:ring-1">
                    <figure>
                      <Image
                        src={news.imageUrl}
                        alt={news.imageAlt}
                        width={500} height={500}
                      />
                    </figure>
                    <div className="card-body">
                      <p className="text-accent">{news.category}</p>
                      <h2 className="card-title">{news.title}</h2>
                      <p className="line-clamp-2 leading-relaxed flex-none">{news.description}</p>
                      <p className="text-xs text-black/50">{banglaDateFormater(news.lastPublished)}</p>

                    </div>
                  </section>)
                }
              </div>
            </section>)
        }

      </section>
    </section>

  );
}
