import type { ImagesResults } from "@/models/Images"
import fetchImages from "@/lib/fetchImages"
import ImgContainer from "./ImgContainer"
import addBlurredDataUrl from "@/lib/getBase64"
import getPrevNextPages from "@/lib/getPrevNextpages"
import Footer from "./Footer"


type Props ={
  topic?: string | undefined,
  page?: string | undefined
}

export default async function Gallary({ topic, page }: Props) {

    let url
    if(topic === 'curated' && page){
      url = `https://api.pexels.com/v1/curated?page=${page}`
    }else if(topic ==='curated'){
      url = `https://api.pexels.com/v1/curate`
    }else if(!page){
      url = `https://api.pexels.com/v1/search?query=${topic}`
    }else {
      url = `https://api.pexels.com/v1/search?query=${page}&page=${page}`
    }

    
    const images : ImagesResults | undefined = await fetchImages(url)
    
    if(!images || images.per_page === 0) return <h2>images not found!</h2>
    
    const photosWithBlur = await addBlurredDataUrl(images)

    const { prevPage, nextPage } = getPrevNextPages(images)

    const footerProps = { topic, page, nextPage, prevPage }

  return (<>
    <section 
        className=" grid grid-cols-gallery place-items-center auto-rows-[10px]"
    >

        { photosWithBlur.map(img=>(
            <ImgContainer key={img.id} photo={img}/>
        ))}

    </section>
    <Footer {...footerProps}/>
  </>
  )
}
