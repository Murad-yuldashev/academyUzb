import React from "react";
import style from "./navbar.module.scss";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Language from "../languages/Language";

const Navbars = () => {
  return (
    <div className={style.wrapper}>
      {["lg"].map((expand) => (
        <Navbar fixed="top" key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand className={style.boxLogo} href="#">
            <img
              className={style.logo}
              src="https://cs4.pikabu.ru/post_img/2014/06/21/6/1403335275_1122678889.png"
              alt="logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className={style.navBar}>
                <Nav gap={5} className="justify-content-center flex-grow-1 pe-3" style={{gap: '25px'}}>
                  <NavDropdown
                    className="fs-5"
                    title="Prezident nutqlar"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item className="fs-5" href="#action4">Matn</NavDropdown.Item>
                    <NavDropdown.Item className="fs-5" href="#action3">Video</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    className="fs-5"
                    title="Hujjatlar"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item className="fs-5" href="#action4">One</NavDropdown.Item>
                    <NavDropdown.Item className="fs-5" href="#action3">Two</NavDropdown.Item>
                    <NavDropdown.Item className="fs-5" href="#action3">Three</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    className="fs-5" 
                    title="Kitob albomlar"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item className="fs-5" href="#action4">2020</NavDropdown.Item>
                    <NavDropdown.Item className="fs-5" href="#action4">2021</NavDropdown.Item>
                    <NavDropdown.Item className="fs-5" href="#action3">2022</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link className="fs-5" href="#action1">Shaxslar</Nav.Link>
                  <Nav.Link className="fs-5" href="#action2">E'tirof</Nav.Link>
                </Nav>
                <div className={style.language}>
                  <Language />
                </div>
                <div className={style.login}>
                  <a href="#">log in</a>
                  <a href="#">log out</a>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      {/* <nav className={style.containerMenu}>
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
      </nav> */}
    </div>
  );
};

export default Navbars;
