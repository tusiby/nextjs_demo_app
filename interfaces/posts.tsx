export interface IPost {
    id: number | string,
    name: string, 
    description?: string, 
    shortDescription: string 
    image: string,
    price: number,
    relatedProducts?: any[]
}