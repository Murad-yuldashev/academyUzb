import React from "react";
import "./AddedStyle.scss";

function Added() {
  const data = [
    {
      id: 1,
      name: <p><span>Lorem</span> Ipsum Dolor</p>,
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      id: 2,
      name: <p><span>Lorem</span> Ipsum Dolor</p>,
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      id: 3,
      name: <p><span>Lorem</span> Ipsum Dolor</p>,
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      id: 4,
      name: <p><span>Lorem</span> Ipsum Dolor</p>,
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      id: 5,
      name: <p><span>Lorem</span> Ipsum Dolor</p>,
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      id: 6,
      name: <p><span>Lorem</span> Ipsum Dolor</p>,
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      id: 7,
      name: <p><span>Lorem</span> Ipsum Dolor</p>,
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      id: 8,
      name: <p><span>Lorem</span> Ipsum Dolor</p>,
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      id: 9,
      name: <p><span>Lorem</span> Ipsum Dolor</p>,
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
  ];

  return (
    <>
      <div className="AddedWrapper">
        <h2 className="globalWrapper BgTxt">Recently Added</h2>
        <div className="addCl globalWrapper">
          {data.map((value) => (
            <div key={value.id} className="add">
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
