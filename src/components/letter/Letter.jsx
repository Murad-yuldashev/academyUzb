import React from "react";
import "./Letter.scss";

function Letter() {
  const data = [
    {
      name: (
        <p>
          <span>Lorem</span> Ipsum Dolor
        </p>
      ),
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      name: (
        <p>
          <span>Lorem</span> Ipsum Dolor
        </p>
      ),
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      name: (
        <p>
          <span>Lorem</span> Ipsum Dolor
        </p>
      ),
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      name: (
        <p>
          <span>Lorem</span> Ipsum Dolor
        </p>
      ),
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      name: (
        <p>
          <span>Lorem</span> Ipsum Dolor
        </p>
      ),
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      name: (
        <p>
          <span>Lorem</span> Ipsum Dolor
        </p>
      ),
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      name: (
        <p>
          <span>Lorem</span> Ipsum Dolor
        </p>
      ),
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      name: (
        <p>
          <span>Lorem</span> Ipsum Dolor
        </p>
      ),
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      name: (
        <p>
          <span>Lorem</span> Ipsum Dolor
        </p>
      ),
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
  ];

  return (
    <div className="AddedWr">
      <h2 className="globalWrapper BgTxt">
        Fights, battles and exploits of partisans
      </h2>
      <div className="letterContainer">
        <div className="boxOne distance">
          <div className="underContainerSmall">
            <div className="box">
              <div className="data">12.10.2022</div>
              <h3 className="veteranName">Lorem ipsum dolor sit amet.</h3>
            </div>
          </div>
          <div className="underContainerBig">
            <div className="box">
              <div className="data">10.10.2022</div>
              <h3 className="veteranName">Lorem ipsum dolor.</h3>
              <p className="textBox">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                voluptates exercitationem deserunt assumenda temporibus sed,
                dicta incidunt impedit nisi nobis.
              </p>
            </div>
          </div>
        </div>
        <div className="boxTwo distance">
          <div className="underContainerBig">
            <div className="box">
              <div className="data">10.10.2022</div>
              <h3 className="veteranName">Lorem ipsum dolor.</h3>
              <p className="textBox">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                voluptates exercitationem deserunt assumenda temporibus sed,
                dicta incidunt impedit nisi nobis.
              </p>
            </div>
          </div>
          <div className="underContainerSmall">
            <div className="box">
              <div className="data">12.10.2022</div>
              <h3 className="veteranName">Lorem ipsum dolor sit amet.</h3>
            </div>
          </div>
        </div>
        <div className="boxThree distance">
          <div className="underContainerBig">
            <div className="box">
              <div className="data">10.10.2022</div>
              <h3 className="veteranName">Lorem ipsum dolor.</h3>
              <p className="textBox">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                voluptates exercitationem deserunt assumenda temporibus sed,
                dicta incidunt impedit nisi nobis.
              </p>
            </div>
          </div>
          <div className="registration">
            <h3 className="veteranName textSubscribe">Subscribe to newsletter</h3>
            <div className="subscrib">
              <input type="email" placeholder="E-mail" />
              <button type="submit">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Letter;
