import React, { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { FaRegWindowClose } from "react-icons/fa";
import { RiArrowDownSFill } from 'react-icons/ri';
import style from "./navbar.module.scss";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

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
          <li className={style.parentMenu}><Link to='/'>Prezident nutqlar</Link><RiArrowDownSFill/>
            <ul className={style.dropdown}>
              <li><a href="">Matn</a></li>
              <li className={style.parentMenu}><Link to='/video'>Video</Link><RiArrowDownSFill/>
                {/* <ul className={style.subDropdown}>
                  <li><a href="">2020</a></li>
                  <li><a href="">2021</a></li>
                  <li><a href="">2022</a></li>
                </ul> */}
              </li>
            </ul>
          </li>
          <li className={style.parentMenu}><Link to='/document'>Hujjatlar</Link><RiArrowDownSFill/>
            <ul className={style.dropdown}>
              <li><a href="">2020</a></li>
              <li><a href="">2021</a></li>
              <li><a href="">2022</a></li>
              <li><a href="">2023</a></li>
            </ul>
          </li>
          <li className={style.parentMenu}><Link to='/bookpage'>Kitob albomlar</Link><RiArrowDownSFill/>
            <ul className={style.dropdown}>
              <li><a href="">2020</a></li>
              <li><a href="">2021</a></li>
              <li><a href="">2022</a></li>
              <li><a href="">2023</a></li>
              <li><a href="">2024</a></li>
            </ul>
          </li>
          <li><Link to='/person'>Shaxslar</Link></li>
          <li><Link to='/confession'>E'tirof</Link></li>
        </ul>
        <div className={style.navbarLogin}>
          <a href="#login" className="p__opensans">
            Log In / Register
          </a>
        </div>
        {/* <div className={style.navbarSmallscreen}>
          <GiHamburgerMenu fontSize={27} onClick={() => setToggleMenu(true)} />
          {toggleMenu && (
            <div className={style.navbarSmallscreenOverlay}>
              <FaRegWindowClose className={style.overClose} fontSize={27} onClick={() => setToggleMenu(false)} />
              <ul className={style.menuBoxSmallscreen}>
                <li><a href="#president">Prezident nutqlar</a></li>
                <li><a href="#document">Hujjatlar</a></li>
                <li><a href="#book">Kitob albomlar</a></li>
                <li><a href="#people">Shaxslar</a></li>
                <li><a href="#confession">E'tirof</a></li>
              </ul>
            </div>
          )}
        </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
