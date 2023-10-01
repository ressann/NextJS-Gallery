'use client'

import { useRouter } from "next/navigation"
import { ChangeEvent, useState } from "react"

export default function Search() {
    const [search,setSearch] = useState('')
    const router = useRouter()

    const handleSearch = (e: ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setSearch(prev =>prev = e.target.value)
        search !== '' ? router.push(`/results/${search}`) : router.push('')
    }

  return (
    <div className="w-full  flex justify-center items-center">
        <form className="sm:w-[60%] w-full pr-2">
            <input type="text"
                value={search}
                onChange={handleSearch}
                placeholder="search images"
                className="px-2 py-2 outline-none rounded-sm w-full text-slate-500"
            />
        </form>
    </div>
  )
}
