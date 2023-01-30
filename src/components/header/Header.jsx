import React from "react";
import style from './Header.module.scss';
import President from "../../assets/president.jpg";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.headerImg}>
        <img className={style.president} src={President} alt="prezident" />
      </div>
      <div className={style.headerText}>
        <h2>
          Lorem ipsum dolor sit, amet consectetur.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          adipisci, quidem architecto at eius, voluptatum magnam labore vel vero
          sint consequatur incidunt, nobis impedit dolor dolorem ducimus.
          Assumenda quo libero facilis id ipsa laborum, a quasi iure! Ex
          reiciendis cumque ducimus voluptatum tenetur doloribus officiis
          aspernatur ipsum nihil.
        </p>
      </div>
    </div>
  );
};

export default Header;
