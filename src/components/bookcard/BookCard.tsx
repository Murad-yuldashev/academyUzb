import { FC } from "react";
import React, { useState } from "react";
import style from './BookCard.module.scss';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: require("../../assets/book.jpg"),
    altText: "Image 1",
    caption: "Book one",
    key: 1,
  },
  {
    src: require("../../assets/book_1.jpg"),
    altText: "Image 2",
    caption: "Book two",
    key: 2,
  },
  {
    src: require("../../assets/book_2.jpg"),
    altText: "Image 3",
    caption: "Book three",
    key: 3,
  },
  {
    src: require("../../assets/book_1.jpg"),
    altText: "Image 4",
    caption: "Book four",
    key: 4,
  },
];

interface BookCardProps {}

const BookCard: FC<BookCardProps> = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: any) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className={style.carouselImg} src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div className={style.carouselContainer}>
      <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
      className={style.carouselBox}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
        className={style.carouselBtn}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
        className={style.carouselBtn}
      />
    </Carousel>
    </div>
  );
};

export default BookCard;
