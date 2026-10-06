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


    <section className="grid grid-cols-1 lg:grid-cols-3 my-5 gap-5 mx-5 ">

      {/* news section  */}


      <Link href={`/`}
      className="card bg-base-100 shadow-sm h-fit
      hover:ring-accent hover:ring-1">
        <figure>
          <Image
            src={highlightNews.imageUrl}
            alt={highlightNews.imageAlt}
            width={500} height={500}
            className="w-full h-80 object-cover"
          />
        </figure>
        <div className="card-body">
          <p className="text-accent">প্রধান খবর</p>
          <h2 className="card-title">{highlightNews.title}</h2>
          <p className="line-clamp-3">{highlightNews.description}</p>
        </div>
      </Link>

      <section className="border rounded-md border-black/20 h-fit
      divide-y flex flex-col divide-black/20 overflow-hidden">
        {
          latestNews.slice(1, 5).map(news => <Link href={`/article/${news.id}`} key={news.id}
            className='block p-5 cursor-pointer hover:bg-base-200'>
            <p className="text-accent ">প্রধান খবর</p>
            <h2 className="text-lg font-bold">{news.title}</h2>
          </Link>)
        }

      </section>


      {/* most read  */}


      <section className="lg:ml-10 border rounded-2xl p-4 border-black/20 ">
        <h3 className="text-2xl font-bold mb-5">সর্বাধিক পঠিত</h3>
        <div>
          {
            mostRead.slice(0, 11).map((news, i) => <Link href={`/article/${news.id}`} key={i}
              className="flex items-center gap-3 my-3 hover:text-accent">
              <p className="text-accent font-bold text-lg">{i + 1}</p>
              <h2 className="font-bold">{news.title}</h2>
            </Link>)
          }
        </div>
      </section>


      {/* other news category  */}


      <section className="lg:col-span-2">

        {
          newsSections.filter(section => section.articles
            .some(news => news.type === 'article'))
            .map(newsSection => <section key={newsSection.curationId}>
              <h1 className="border-b-2 border-accent font-bold text-2xl">{newsSection.title}</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5">
                {
                  newsSection.articles.map(news => <Link key={news.id} href={`/article/${news.id}`}>
                    <section className="card bg-base-100 shadow-sm
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
                        <h2 className="card-title line-clamp-1">{news.title}</h2>
                        <p className="line-clamp-2 leading-relaxed flex-none">{news.description}</p>
                        <p className="text-xs text-black/50">{banglaDateFormater(news.lastPublished)}</p>

                      </div>
                    </section>
                  </Link>)
                }
              </div>
            </section>)
        }
      </section>



    </section>


  );
}
