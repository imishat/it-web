"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
function Categories() {
    const categories = [
        {
            id:1,
            image:'https://cdn.kwork.com/files/category/collage/categories_first_level/en/t3/seo_guest.webp',
            title:'Alex, Front-end Developer',
            stars:4
        },
        {
            id:2,
            image:'https://cdn.kwork.com/files/category/collage/categories_first_level/en/t3/reklama-pr_guest.webp',
            title:'Alex, Front-end Developer',
            stars:5
        },
        {
            id:3,
            image:'https://cdn.kwork.com/files/category/collage/categories_first_level/en/t3/programming_guest.webp',
            title:'Alex, Front-end Developer',
            stars:5
        },
        {
            id:4,
            image:'https://cdn.kwork.com/files/category/collage/categories_first_level/en/t3/design_guest.webp?ver=1615534203',
            title:'Alex, Front-end Developer',
            stars:5
        },
        {
            id:5,
            image:'https://cdn.kwork.com/files/category/collage/categories_first_level/en/t3/writing-translations_guest.webp?ver=1615534286',
            title:'Alex, Front-end Developer',
            stars:5
        },
        {
            id:6,
            image:'https://cdn.kwork.com/files/category/collage/categories_first_level/en/t3/business_guest.webp?ver=1615534340',
            title:'Alex, Front-end Developer',
            stars:5
        },
        {
            id:7,
            image:'https://cdn.kwork.com/files/category/collage/categories_first_level/en/t3/audio-video_guest.webp?ver=1615534330',
            title:'Alex, Front-end Developer',
            stars:5
        }
    ]
    // Swiper breakpoints
    const breakpoints = {
        // when window width is >= 320px
        420: {
          slidesPerView: 1,
          spaceBetween: 2,
        },
        // when window width is >= 480px
        680: {
          slidesPerView: 3,
          spaceBetween: 3,
        },
        // when window width is >= 640px
        840: {
          slidesPerView: 4,
          spaceBetween: 5,
        },
        // when window width is >= 840px
        1240: {
          slidesPerView: 5,
          spaceBetween: 6,
        },
        // when window width is >= 1040px
        1440: {
          slidesPerView: 6,
          spaceBetween: 12,
        },
      };
    return (
        <div className="w-full lg:px-12 px-3 mx-auto container my-6">
            <div>
                {/* <h2 className="text-xl font-bold">Categories</h2> */}
            </div>
            <div>
            <Swiper autoplay={{
            delay: 2500,
            
            disableOnInteraction: false,
          }} 
          breakpoints={breakpoints}
          slides-per-view="auto" space-between="10"
          className="mySwiper !gap-2 !flex">
                    {
                        categories?.map((category,i)=>{
                            return <SwiperSlide key={i} className="border !h-32">
                                <div className="flex h-full justify-center items-center">
                                <img src={category?.image} alt="" />
                                </div>
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </div>
    );
}

export default Categories;