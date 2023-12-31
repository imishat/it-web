"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/all-category`).then((res) => {
      setCategories(res.data?.data?.result);
    });
  }, []);
  // Swiper breakpoints
  const breakpoints = {
    // when window width is >= 320px
    100: {
      slidesPerView: 3,
      spaceBetween: 2,
    },
    // when window width is >= 320px
    420: {
      slidesPerView: 3,
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
      <div>{/* <h2 className="text-xl font-bold">Categories</h2> */}</div>
      <div>
        <Swiper
          autoplay={{
            delay: 2500,

            disableOnInteraction: false,
          }}
          breakpoints={breakpoints}
          slides-per-view="auto"
          space-between="10"
          className="mySwiper !gap-2 !flex"
        >
          {categories?.map((category, i) => {
            return (
              <SwiperSlide key={i} className="border !h-auto sm:!h-32">
                <Link
                  href={`/shop/${category?.id}`}
                  className="flex relative h-full justify-center items-center"
                >
                  <img
                    className="w-full object-cover h-full"
                    src={category?.picture}
                    alt=""
                  />
                  <div className="absolute top-0 w-full h-full left-0 px-2 py-1 font-bold ">
                    <p className="absolute left-0 bottom-1 text-xs sm:text-sm md:text-lg backdrop-blur-md backdrop-brightness-110 rounded-full px-2 py-0 bg-blue-50">
                      {category?.name}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Categories;
