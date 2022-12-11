import React from "react";
import "./Letter.scss";
import { data } from "../../data/data";
import Card from "../card/Card";
import { FaTelegramPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Letter() {

  const navigate = useNavigate();

  return (
    <div className="Letter">
      <h2 className="globalWrapper BgTxt">
        Fights, battles and exploits of partisans
      </h2>
      <div className="letterContainer">
        {data.map((value) => (
          <Card
            onClick={() => navigate(`/pdf:${value.id}`)}
            key={value.id}
            date={value.date}
            title={value.title}
            text={value.text}
          />
        ))}
        <div className="registration">
          <p className="textSubscribe">Subscribe to newsletter</p>
          <div className="subscrib">
            <input type="text" placeholder="E-mail" />
            <a href="#"><FaTelegramPlane fontSize={37} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Letter;
