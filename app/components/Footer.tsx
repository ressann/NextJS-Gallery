import Link from "next/link"

type Props = {
    topic: string | undefined,
    page: string | undefined,
    nextPage: string | null,
    prevPage: string | null
}

export default function Footer({ topic, page, nextPage, prevPage}: Props) {
    
    if(!prevPage && !nextPage) return

    const pageNums: number[] = []

    if(prevPage && nextPage) {
        for(let i = parseInt(prevPage) + 1; i < (parseInt(nextPage) + 1); i++){
            pageNums.push(i)
        }
    }

    const nextPageArea = nextPage
        ? (
            <Link href={`/results/${topic}/${nextPage}`} className={!prevPage ? "mx-auto" : ""} >
                {!prevPage ? "more" : null} &gt;&gt;&gt;
            </Link>
        )
        : null

    const prevPageArea = prevPage
        ? (
            <>
                <Link href={`/results/${topic}/${nextPage}`} className={!nextPage ? "mx-auto" : ""} >
                    &lt;&lt;&lt; {!nextPage ? "back" : null}
                </Link>

                {pageNums.map((num, i) => (
                    page && num === parseInt(page)
                        ? <span key={i}>{num}</span>
                        : (
                            <Link key={i} href={`/results/${topic}/${num}`} className="underline"
                            >{num}</Link>
                        )
                ))}
            </>
        )
        : null

  return (
    <footer className="flex flex-row justify-between items-centerpx-2 py-4 font-bold w-60 mx-auto">
        {prevPageArea}
        {nextPageArea}
    </footer>
  )
}
