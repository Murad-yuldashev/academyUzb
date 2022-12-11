import React from "react";
import "./Card.scss";

const Card = ({ date, title, text, onClick }) => {


  return (
    <div className="CardWrapper">
      <div onClick={onClick} className="letterContainer">
        <div className="boxOne distance">
          <div
            style={{
              background: text ? "#60594fdc" : "#4f5860",
              height: text ? "446px" : "240px",
            }}
            className="underContainerBig"
          >
            <div className="box">
              <div className="data">{date}</div>
              <h3 className="veteranName">{title}</h3>
              <p style={{ dislay: text ? "flex" : "none" }} className="textBox">
                {text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
