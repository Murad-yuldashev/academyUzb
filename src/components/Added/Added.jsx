import React from "react";
import "./AddedStyle.scss";

function Added() {
  const data = [
    {
      name: <p><span>Lorem</span> Ipsum Dolor</p>,
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      name: <p><span>Lorem</span> Ipsum Dolor</p>,
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      name: <p><span>Lorem</span> Ipsum Dolor</p>,
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      name: <p><span>Lorem</span> Ipsum Dolor</p>,
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      name: <p><span>Lorem</span> Ipsum Dolor</p>,
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      name: <p><span>Lorem</span> Ipsum Dolor</p>,
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      name: <p><span>Lorem</span> Ipsum Dolor</p>,
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      name: <p><span>Lorem</span> Ipsum Dolor</p>,
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      name: <p><span>Lorem</span> Ipsum Dolor</p>,
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
  ];

  return (
    <>
      <div className="AddedWr">
        <h2 className="globalWrapper BgTxt">Recently Added</h2>
        <div className="addCl globalWrapper">
          {data.map((value) => (
            <div className="add">
              <div className="name">
                {/* {value.name.Asdas()} <span></span> */}
                {value.name}
              </div>
              <div className="country">{value.country}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Added;
