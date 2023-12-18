"use client";

import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import Partners from "../Partners/Partners";
import HeroSlider from "./HeroSlider";
// Import Swiper React components

function Hero() {
  const images = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
  ];
  return (
    <div>
      <div className="hidden backdrop-blur-lg relative lg:flex justify-around sm:h-56 md:h-72 lg:h-96 xl:h-[480px] w-full bg-base-300' object-fill">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 object-cover z-1 min-w-full min-h-full max-w-none w-full h-full"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* video overlay */}
        <span className="absolute left-0 top-0 h-full w-full backdrop-blur"></span>
        <div className="w-full flex justify-between xl:justify-around z-10 container mx-auto">
          <div className="sm:h-56 w-[400px] xl:w-[500px] md:h-72 lg:h-96 xl:h-[480px] flex items-center">
            <div>
              <h2 className="text-4xl font-bold">
                Buy affordable Online Work services
              </h2>
              <div className="flex items-center my-6 ">
                <div className="flex items-center z-10 bg-white w-[400px] xl:w-[500px] border border-gray-400 rounded-l">
                  <span className="px-2">
                    <IoSearch size={32} />
                  </span>
                  <input
                    placeholder='Try "social media design"'
                    className="px-2 py-3 w-full focus-visible:outline-none"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <button className="px-4 bg-green-400 py-3">Search</button>
              </div>
              <div className="flex items-center gap-2">
                <p>Popular:</p>
                <ul className="flex flex-wrap items-center gap-1">
                  <li>
                    <Link
                      className="bg-blue-50 border border-blue-200 px-2 py-1"
                      href={`#`}
                    >
                      Web Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="bg-blue-50 border border-blue-200 px-2 py-1"
                      href={`#`}
                    >
                      Logo Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="bg-blue-50 border border-blue-200 px-2 py-1"
                      href={`#`}
                    >
                      Social Media Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="bg-blue-50 border border-blue-200 px-2 py-1"
                      href={`#`}
                    >
                      Wordpress
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-1/2 max-w-lg relative">
          <div className="absolute bottom-0">
            <div className="w-96">
              <HeroSlider />
            </div>
          </div>
        </div>
        </div>
       
      </div>
      <Partners />
    </div>
  );
}

export default Hero;
