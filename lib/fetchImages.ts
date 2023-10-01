import type { ImagesResults } from "@/models/Images";
import env from './env'
import axios from "axios";


export default async function fetchImages(url: string): Promise<ImagesResults | undefined> {
    try {

        const res = await axios.get(url, {
            headers: {
                Authorization: env.PEXELS_API_KEY
            }
        })

        if(!res.data) throw new Error("Fetch images error\n")

        return res.data 
    } catch (error) {
        console.log(error)
    }
}