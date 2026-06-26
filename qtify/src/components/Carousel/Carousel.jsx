import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = ({ items, renderItem }) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={16}
      slidesPerView={7}        // always 7 cards visible
      slidesPerGroup={2}       // move 2 cards per click
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>{renderItem(item)}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
