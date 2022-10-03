import { FC } from "react";
import { Card, Col, Row } from "antd";
import Book from '../../assets/book.jpg'

interface BookCardProps {}

const BookCard: FC<BookCardProps> = () => {
  return (
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
};

export default BookCard;
