
import type { Photo } from "@/models/Images";
import Image from "next/image";

type Props = {
    photo: Photo
}

export default function ImgContainer ({ photo }: Props){

    const widthHeightRatio = photo.height / photo.width
    const gallaryHeight = Math.ceil(250 * widthHeightRatio)
    const photoSpans = Math.ceil(gallaryHeight / 10) + 1

    return (
        <div
            className="w-[250px] justify-self-center"
            style={{ gridRow: `span ${photoSpans}`}}
        >
            <div className="rounded-xl overflow-hidden">
                <Image
                    src={photo.src.large}
                    alt={photo.alt}
                    width={250}
                    height={gallaryHeight}
                    blurDataURL={photo.blurredDataUrl}
                    sizes="250px"
                    className=" object-cover hover:opacity-50 "
                />
            </div>
        </div>
    )
}