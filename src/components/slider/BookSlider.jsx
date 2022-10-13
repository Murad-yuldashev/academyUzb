import "./BookSlider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";

const BookSlider = () => {
  return (
    <>
      <div className="container py-4 px-4 justify-content-center bg-dark">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="myCaruosel"
          slidesPerView={5}
          spaceBetween={30}
        >
          <SwiperSlide>
            <h1>Slide 1</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Slide 2</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Slide 3</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Slide 4</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Slide 5</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Slide 6</h1>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default BookSlider;
