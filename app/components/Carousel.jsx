/* This Code Shuffles the images. This works well, becase the infinite scroll bug loops through, 
so when the gallery images are shuffled, in will make the feed look diferent each time it loops through :) */
"use client";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Carousel({ images }) {
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    setShuffledImages(shuffle(images));
  }, []);

  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          dynamicBullets: true,
        }}
        navigation
      >
        {shuffledImages.map((image, index) => (
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
