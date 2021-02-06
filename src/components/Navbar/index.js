import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import logo from "../../images/laniuuu.svg";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} width="100" alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            <strong>Inicio</strong>
          </NavLink>
          <NavLink to="/about" activeStyle>
            <strong>Nosotros</strong>
          </NavLink>
          <NavLink to="/services" activeStyle>
            <strong>Servicios</strong>
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            <strong>Contactos</strong>
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            <strong>Iniciar sesión</strong>
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
