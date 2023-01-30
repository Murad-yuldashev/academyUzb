import React, { useRef, useState } from "react";
import "./BookSlider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { Card, Button } from "react-bootstrap";
import Book from "../../assets/book.jpg";
import Book1 from "../../assets/book_1.jpg";
import Book2 from "../../assets/book_2.jpg";

import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

const BookSlider = () => {
  return (
    <div className="caruoselContainer">
      <div className="caruoselBox container py-5 px-5">
        <h1 className="headerCaruosel">Partisan Album</h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card className="p-0 overflow-hidden h-100 shadow">
              <div className="overflow-hidden rounded p-0 bg-light">
                <Card.Img variant="top" src={Book} />
              </div>
              <Card.Body>
                <h4 className="color-dark">Tohir Malik</h4>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="p-0 overflow-hidden h-100 shadow">
              <div className="overflow-hidden rounded p-0 bg-light">
                <Card.Img variant="top" src={Book1} />
              </div>
              <Card.Body>
                <h4 className="color-dark">Tohir Malik</h4>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="p-0 overflow-hidden h-100 shadow">
              <div className="overflow-hidden rounded p-0 bg-light">
                <Card.Img variant="top" src={Book2} />
              </div>
              <Card.Body>
                <h4 className="color-dark">Tohir Malik</h4>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="p-0 overflow-hidden h-100 shadow">
              <div className="overflow-hidden rounded p-0 bg-light">
                <Card.Img variant="top" src={Book2} />
              </div>
              <Card.Body>
                <h4 className="color-dark">Tohir Malik</h4>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="p-0 overflow-hidden h-100 shadow">
              <div className="overflow-hidden rounded p-0 bg-light">
                <Card.Img variant="top" src={Book} />
              </div>
              <Card.Body>
                <h4 className="color-dark">Tohir Malik</h4>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="p-0 overflow-hidden h-100 shadow">
              <div className="overflow-hidden rounded p-0 bg-light">
                <Card.Img variant="top" src={Book1} />
              </div>
              <Card.Body>
                <h4 className="color-dark">Tohir Malik</h4>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="p-0 overflow-hidden h-100 shadow">
              <div className="overflow-hidden rounded p-0 bg-light">
                <Card.Img variant="top" src={Book2} />
              </div>
              <Card.Body>
                <h4 className="color-dark">Tohir Malik</h4>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="p-0 overflow-hidden h-100 shadow">
              <div className="overflow-hidden rounded p-0 bg-light">
                <Card.Img variant="top" src={Book1} />
              </div>
              <Card.Body>
                <h4 className="color-dark">Tohir Malik</h4>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="p-0 overflow-hidden h-100 shadow">
              <div className="overflow-hidden rounded p-0 bg-light">
                <Card.Img variant="top" src={Book} />
              </div>
              <Card.Body>
                <h4 className="color-dark">Tohir Malik</h4>
              </Card.Body>
            </Card>
          </SwiperSlide>
        </Swiper>

        {/* <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="myCaruosel"
          slidesPerView={5}
          spaceBetween={30}
        >
          <SwiperSlide>
            <Card className="p-0 overflow-hidden h-100 shadow">
              <div className="overflow-hidden rounded p-0 bg-light">
                 <Card.Img variant="top" src={Book} />
              </div>
              <Card.Body>
                <h4 className="color-dark">Tohir Malik</h4>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="p-0 overflow-hidden h-100 shadow">
              <div className="overflow-hidden rounded p-0 bg-light">
                 <Card.Img variant="top" src={Book1} />
              </div>
              <Card.Body>
                <h4 className="color-dark">Tohir Malik</h4>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="p-0 overflow-hidden h-100 shadow">
              <div className="overflow-hidden rounded p-0 bg-light">
                 <Card.Img variant="top" src={Book2} />
              </div>
              <Card.Body>
                <h4 className="color-dark">Tohir Malik</h4>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="p-0 overflow-hidden h-100 shadow">
              <div className="overflow-hidden rounded p-0 bg-light">
                 <Card.Img variant="top" src={Book} />
              </div>
              <Card.Body>
                <h4 className="color-dark">Tohir Malik</h4>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="p-0 overflow-hidden h-100 shadow">
              <div className="overflow-hidden rounded p-0 bg-light">
                 <Card.Img variant="top" src={Book1} />
              </div>
              <Card.Body>
                <h4 className="color-dark">Tohir Malik</h4>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="p-0 overflow-hidden h-100 shadow">
              <div className="overflow-hidden rounded p-0 bg-light">
                 <Card.Img variant="top" src={Book2} />
              </div>
              <Card.Body>
                <h4 className="color-dark">Tohir Malik</h4>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="p-0 overflow-hidden h-100 shadow">
              <div className="overflow-hidden rounded p-0 bg-light">
                 <Card.Img variant="top" src={Book} />
              </div>
              <Card.Body>
                <h4 className="color-dark">Tohir Malik</h4>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="p-0 overflow-hidden h-100 shadow">
              <div className="overflow-hidden rounded p-0 bg-light">
                 <Card.Img variant="top" src={Book1} />
              </div>
              <Card.Body>
                <h4 className="color-dark">Tohir Malik</h4>
              </Card.Body>
            </Card>
          </SwiperSlide>  
        </Swiper> */}
      </div>
    </div>
  );
};

export default BookSlider;
