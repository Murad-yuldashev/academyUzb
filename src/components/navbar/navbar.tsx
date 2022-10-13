import { FC } from "react";
import style from "./navbar.module.scss";
import President from "../../assets/president.jpg";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <div className={style.wrapper}>
      <nav className={style.containerMenu}>
        <div className={style.boxLogo}>
          <img
            className={style.logo}
            src="https://cs4.pikabu.ru/post_img/2014/06/21/6/1403335275_1122678889.png"
            alt="logo"
          />
        </div>
        <ul className={style.menuBox}>
          <li>Nutqlar</li>
          <li>Xujjatlar</li>
          <li>G'alaba bog'</li>
          <li>Arxiv</li>
        </ul>
      </nav>
      <div className={style.header}>
        <div className={style.headerImg}>
          <img className={style.president} src={President} alt="prezident" />
        </div>
        <div className={style.headerText}>
          <h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur, eligendi.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            adipisci, quidem architecto at eius, voluptatum magnam labore vel
            vero sint consequatur incidunt, nobis impedit dolor dolorem ducimus.
            Assumenda quo libero facilis id ipsa laborum, a quasi iure! Ex
            reiciendis cumque ducimus voluptatum tenetur doloribus officiis
            aspernatur ipsum nihil. Vel ab officia dolores, laudantium quod est
            id enim doloribus. Sequi nobis provident, deserunt possimus corrupti
            delectus eos quisquam tempore repudiandae explicabo!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
