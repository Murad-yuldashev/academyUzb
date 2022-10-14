import { FC } from "react";
<<<<<<< HEAD
import { Card, Row, Col } from 'antd';

import Book from '../../assets/book.jpg'
=======
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
>>>>>>> 263286caa6c731a48691eb93071ee6526a823502

interface BookCardProps {}

const BookCard: FC<BookCardProps> = () => {
  return (
<<<<<<< HEAD
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src={Book}
              />
            }
          ></Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src={Book}
              />
            }
          ></Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src={Book}
              />
            }
          ></Card>
        </Col>
      </Row>
    </div>
  );
=======
    <>
    
    </>
  )
>>>>>>> 263286caa6c731a48691eb93071ee6526a823502
};

export default BookCard;
