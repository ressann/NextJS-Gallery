
import Search from "./Search";
import LinkHomepage from "./LinkHomepage";


export default function Navbar() {
  return (
    <nav 
        className="w-full flex items-center justify-around py-4 text-white bg-[#000] mb-4 sticky top-0 z-[10]"
    >
        <LinkHomepage/>
        <Search/>
    </nav>
  )
}
