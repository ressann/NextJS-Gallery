import Gallary from "@/app/components/Gallary"


type Props = {
    params: {
        search : (string | undefined)[]
    }
}

export async function generateMetadata({ params: { search } }: Props) {
  const topic = search?.[0] ?? 'curated'
  const page = search?.[1] ?? '1'
  return {
        title: `Search results for "${topic} and ${page}"`
    }
}

export default function page({ params: { search }}: Props) {
    const topic = search?.[0] ?? 'curated'
    const page = search?.[1] ?? '1'
    
  return (
    <Gallary topic={topic} page={page}/>
  )
}
