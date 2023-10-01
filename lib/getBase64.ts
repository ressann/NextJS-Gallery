import { ImagesResults, Photo } from "@/models/Images";
import axios from "axios";
import { getPlaiceholder } from "plaiceholder";


async function getBase64(imageUrl: string) {
    try{
        const res = await axios.get(imageUrl)

        if(!res.data){
            throw new Error(`Failed to fetch image!`)
        }

        const buffer = await res.data.arrayBuffer()

        const { base64 } = await getPlaiceholder(Buffer.from(buffer))
        
        return base64
    }catch(err){
        if( err instanceof Error) console.log(err.stack)
    }
}

export default async function addBlurredDataUrl(images: ImagesResults): Promise<Photo[]> {
     const base64Promise = images.photos.map(photo => getBase64(photo.src.large))

     const base64Results = await Promise.all(base64Promise)

     const photosWithBlur: Photo[] = images.photos.map((photo, i)=>{
        photo.blurredDataUrl = base64Results[i]
        return  photo;
     })

     return photosWithBlur
}