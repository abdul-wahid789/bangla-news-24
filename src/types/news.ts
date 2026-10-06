export interface ICategory {
    slug: string
    title: string
    topicId: null | string
    url: string
    scrapable: boolean
}

export interface INewsInfo {
    id: string
    title: string
    description: string
    link: string
    imageUrl: string
    imageAlt: string
    category: string
    type: string
    isLive: boolean
    firstPublished: null | string
    lastPublished: null | string
    source: string
}


export interface INewsSection {
    title: string
    curationId: string
    curationType: string
    link: null
    count: number
    articles: INewsInfo[]
}

interface bodyImage {
    type: 'image'
    url: string
    width: number
    height: number
    caption: string
    altText: string

}
interface bodyText {
    type: 'text'
    text: string
}
interface subheading {
    type: 'subheading'
    text: string
}


export interface IFullNews {
    id: string
    title: string
    link: string
    firstPublished: string
    lastPublished: string
    byline: {
        name: string
        role: string
    }[]
    tags: string[]
    body: (bodyText | bodyImage | subheading)[]
}


