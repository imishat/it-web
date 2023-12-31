"use client";
import { useForm } from "react-hook-form";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
// Import Swiper React components

function Hero() {
  // router
  const router= useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const images = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
  ];
  // loading
  const [loading,setLoading] = useState(false)

  // handle search
  const handleSearch = (data) =>{
    setLoading(true)
    router.push(`/shop?search=${data?.search}`)
  }
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
              <h2 className="text-4xl font-bold capitalize text-white">
                Buy affordable Online Work services
              </h2>
              <form onSubmit={handleSubmit(handleSearch)} className="flex items-center my-6 ">
                <div className="flex items-center z-10 bg-white w-[400px] xl:w-[500px] border border-gray-400 rounded-l">
                  <span className="px-2">
                    <IoSearch size={32} />
                  </span>
                  <input
                    placeholder='Try "social media design"'
                    className="px-2 py-3 w-full focus-visible:outline-none"
                    type="search"
                    {...register('search',{required:true})}
                    id=""
                  />
                </div>
                <button className="px-4 bg-[#E77C01] border border-transparent py-3">{loading?'Searching...':'Search'}</button>
              </form>
              <div className="flex items-center gap-2">
                <p className="font-bold text-white">Popular:</p>
                <ul className="flex flex-wrap items-center gap-1">
                  <li>
                    <Link
                      className="bg-blue-50 border text-[#E77C01] border-blue-200 px-2 py-1"
                      href={`/shop?search=Web Design`}
                    >
                      Web Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="bg-blue-50 border text-[#E77C01] border-blue-200 px-2 py-1"
                      href={`/shop?search=Logo Design`}
                    >
                      Logo Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="bg-blue-50 border text-[#E77C01] border-blue-200 px-2 py-1"
                      href={`/shop?search=Social Media Design`}
                    >
                      Social Media Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="bg-blue-50 border text-[#E77C01] border-blue-200 px-2 py-1"
                      href={`/shop?search=Wordpress`}
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
              {/* <HeroSlider /> */}
            </div>
          </div>
        </div>
        </div>
       
      </div>
    </div>
  );
}

export default Hero;
