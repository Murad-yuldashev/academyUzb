import { FC } from "react";
import style from "./BookCard.module.scss";


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

const BookCard: FC<BookCardProps> = () => {
  return (
    <>
    
    </>
  )
};

export default BookCard;
