"use client";
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.module.css";
function ProductSlider({ images,showNavigation }) {

  return (
    <div className="w-full h-full relative">
      
      <Swiper
      
        slides-per-view="auto"
        space-between="10"
        loop={true}
        cssMode={true}
        navigation={showNavigation}
        pagination={true}
        className="mySwiper"
        modules={[Navigation,Pagination]}
      >
        {images?.map((image) => {
          return (
            <SwiperSlide key={image?.id} className="!W-96 !overflow-hidden  !h-52">
              <Image width={400} height={400} src={image?.image} className="!h-56   w-full object-top object-cover" alt="" />
            </SwiperSlide>
            
          );
        })}
      </Swiper>
    </div>
  );
}

export default ProductSlider;
