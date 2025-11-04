import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';


export default () => {
  return (
    <div className="container">
    <Swiper
      spaceBetween={25}
      slidesPerView={3}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
    </div>
  );
};