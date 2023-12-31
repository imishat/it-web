"use client";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.module.css";
function ProductSlider({ images, showNavigation,product }) {

  return (
    <div className="w-full h-full relative">
      <Swiper
        slides-per-view="auto"
        space-between="10"
        loop={true}
        cssMode={true}
        navigation={showNavigation}
        pagination={true}
        speed={1200}
        className="mySwiper !w-full"
        modules={[Navigation, Pagination]}
      >
        {images?.map((image, i) => {
          return (
            <SwiperSlide key={i} className=" !w-full md:!W-96 !overflow-hidden select-none !h-52">
                <Link className="inline-block w-full" href={`/product/${product?.id}`}>

              <Image
                width={400}
                height={400}
                src={image?.url}
                className="!h-56 select-none  w-full object-top "
                alt=""
                />
                </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ProductSlider;
