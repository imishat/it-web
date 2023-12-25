'use strict';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { IoStar } from "react-icons/io5";
import { Autoplay } from "swiper";
import "swiper/css";

function HeroSlider() {
    const data = [
        {
            id:1,
            image:'https://cdn.kwork.com/images/index/banner-user-6.png?ver=6',
            title:'Alex, Front-end Developer',
            stars:4
        },
        {
            id:2,
            image:'https://cdn.kwork.com/images/index/banner-user-7.png?ver=6',
            title:'Alex, Front-end Developer',
            stars:5
        },
        {
            id:3,
            image:'https://cdn.kwork.com/images/index/banner-user-1.png?ver=6',
            title:'Alex, Front-end Developer',
            stars:5
        },
        {
            id:4,
            image:'https://cdn.kwork.com/images/index/banner-user-4@2x.png?ver=6',
            title:'Alex, Front-end Developer',
            stars:5
        }
    ]
    return (
        
      <div>
      <Swiper autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }} modules={[Autoplay]}
          className="mySwiper">
       {
        data?.map(item=>{
            return  <SwiperSlide key={item?.id} className="!w-96 sm:!h-56 md:!h-72 lg:!h-96 xl:!h-[480px]">
            <img className="w-96 mx-auto xl:w-96 h-full absolute bottom-0" src={item?.image} alt="" />
            <div className="absolute bottom-0 flex justify-center flex-col left-[25%] w-full">
                <div className="flex items-center gap-1">
                   {
                    [...Array(item?.stars).keys()].map((star,i)=> <span key={i} className=""><IoStar className="fill-yellow-600" /></span>)
                   }
                </div>
                <p className="text-white font-bold">{item?.title}</p>
            </div> 
        </SwiperSlide>
        })
       }
       
      </Swiper>
      </div>
    );
}

export default HeroSlider;