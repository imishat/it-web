import Link from "next/link";
import { IoSearch } from "react-icons/io5";

function Hero() {
    return (
        <div>
            <div className="hidden sm:block sm:h-56 md:h-72 lg:h-96 xl:h-[480px] w-full bg-base-300 bg-[url('https://cdn.kwork.com/images/index/banner-bg-front.jpg?v=2')] object-fill">
        <div className="w-1/2">
            <div className="sm:h-56 md:h-72 lg:h-96 xl:h-[480px] flex items-center">
            <div>
                <h2 className="text-5xl">Buy affordable freelance services
on the go</h2>
<div className="flex items-center my-6">
    <div className="flex items-center bg-white w-96 border border-gray-400 rounded-l">
        <span className="px-2"><IoSearch size={32} /></span>
    <input className="px-2 py-2 w-full focus-visible:outline-none" type="text" name="" id="" />
    </div>
    <button className="px-4 bg-green-400 py-2">Search</button>
</div>
<div className="flex items-center gap-4">
    <p>Popular:</p>
    <ul className="flex flex-wrap items-center gap-2">
        <li><Link className="bg-blue-50 border border-blue-200 px-2 py-1" href={`#`}>Web Design</Link></li>
        <li><Link className="bg-blue-50 border border-blue-200 px-2 py-1" href={`#`}>Logo Design</Link></li>
        <li><Link className="bg-blue-50 border border-blue-200 px-2 py-1" href={`#`}>Social Media Design</Link></li>
        <li><Link className="bg-blue-50 border border-blue-200 px-2 py-1" href={`#`}>Wordpress</Link></li>
    </ul>
</div>
            </div>
            </div>
            <div></div>
        </div>
            </div>
        </div>
    );
}

export default Hero;