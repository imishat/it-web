import Link from "next/link";
import { IoSearch, IoStar } from "react-icons/io5";

function Hero() {
    return (
        <div>
            <div className="hidden sm:flex justify-around sm:h-56 md:h-72 lg:h-96 xl:h-[480px] w-full bg-base-300 bg-[url('https://cdn.kwork.com/images/index/banner-bg-front.jpg?v=2')] object-fill">
        <div className="max-w-xl w-1/2 container mx-auto">
            <div className="sm:h-56 w-[400px] xl:w-[500px] md:h-72 lg:h-96 xl:h-[480px] flex items-center">
            <div>
                <h2 className="text-4xl font-bold">Buy affordable freelance services
on the go</h2>
<div className="flex items-center my-6">
    <div className="flex items-center bg-white w-[400px] xl:w-[500px] border border-gray-400 rounded-l">
        <span className="px-2"><IoSearch size={32} /></span>
    <input placeholder="Try &quot;social media design&quot;" className="px-2 py-3 w-full focus-visible:outline-none" type="text" name="" id="" />
    </div>
    <button className="px-4 bg-green-400 py-3">Search</button>
</div>
<div className="flex items-center gap-2">
    <p>Popular:</p>
    <ul className="flex flex-wrap items-center gap-1">
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
        <div className="w-1/2 max-w-lg relative">
            <div className="absolute bottom-0">
            <img className="w-6/12 mx-auto xl:w-8/12 h-auto" src="https://cdn.kwork.com/images/index/banner-user-4@2x.png?ver=6" alt="" />
            <div className="absolute bottom-5 flex justify-center flex-col left-[35%] w-full">
                <div className="flex items-center gap-1">
                    <span className=""><IoStar className="fill-yellow-600" /></span>
                    <span className=""><IoStar className="fill-yellow-600" /></span>
                    <span className=""><IoStar className="fill-yellow-600" /></span>
                    <span className=""><IoStar className="fill-yellow-600" /></span>
                </div>
                <p className="text-white font-bold">Alex, Front-end Developer</p>
            </div>
            </div>
        </div>
            </div>
        </div>
    );
}

export default Hero;