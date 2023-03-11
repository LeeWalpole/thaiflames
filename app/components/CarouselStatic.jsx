import Image from "next/image";
// import React, { useRef, useState, useEffect } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Carousel({ images }) {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{
          dynamicBullets: true,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.gallery_image_url}
              alt={image.gallery_image_alt}
              width={image.gallery_image_width}
              height={image.gallery_image_height}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default Carousel;
