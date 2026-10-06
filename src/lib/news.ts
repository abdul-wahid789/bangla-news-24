import { ICategory, IFullNews, INewsInfo, INewsSection } from "@/types/news"

const BASE_URL = `https://news-api-v2.vercel.app/api`

export async function categoriesPromise(): Promise<{ categories: ICategory[]; error: string; }> {
    const url = `${BASE_URL}/categories`

    try {
        const res = await fetch(url)
        const data = await res.json()
        return { categories: data.data, error: "" }
    } catch (error) {
        return { categories: [], error: String(error) }
    }
}

export async function latestNewsPromise(): Promise<{ latestNews: INewsInfo[], error: string }> {
    const url = `${BASE_URL}/news`

    try {
        const res = await fetch(url)
        const data = await res.json()
        return { latestNews: data.data, error: "" }
    } catch (error) {
        return { latestNews: [], error: String(error) }
    }
}
export async function mostReadPromise(): Promise<{ mostRead: INewsInfo[], error: string }> {
    const url = `${BASE_URL}/news/most-read`

    try {
        const res = await fetch(url)
        const data = await res.json()
        return { mostRead: data.data, error: "" }
    } catch (error) {
        return { mostRead: [], error: String(error) }
    }
}
export async function newsSectionsPromise(): Promise<{ newsSections: INewsSection[], error: string }> {
    const url = `${BASE_URL}/news/sections`

    try {
        const res = await fetch(url)
        const data = await res.json()
        return { newsSections: data.data, error: "" }
    } catch (error) {
        return { newsSections: [], error: String(error) }
    }
}



export async function categoryNewsPromise(category: string, page: string = "1"): Promise<{ news: INewsInfo[], error: string }> {
    const url = `${BASE_URL}/category/${category}`
    try {
        const res = await fetch(url)
        const data = await res.json()
        return { news: data.data, error: "" }
    } catch (error) {
        return { news: [], error: String(error) }
    }
}

export async function fullNewsPromise(articleID: string): Promise<IFullNews | string> {
    const url = `${BASE_URL}/article/${articleID}`
    try {
        const res = await fetch(url)
        const data = await res.json()
        return data.data
    } catch (error) {
        return String(error)
    }
}