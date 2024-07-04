/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "../css/styles_Header.css";
import { Link as ScrollLink, Element } from "react-scroll";
import { NavLink } from "react-router-dom";
import '../images/Logo.png'
import getCookie from "../js/getCookies";
function Header_Perfil(props) {
  const userName = getCookie("useName")
  const decodedStr = decodeURIComponent(userName.replace(/\+/g, ' '));

  return (
    <header className="header fixed-top">
      <nav className="navbar  navbar-expand-lg navbar-dark bg-dark ">
        <div className="container">
          <a className="navbar-brand Logo" href="#">
            Adventure
          </a>

          {/* BOTON HAMBURGUESA */}
          <button
            className="navbar-toggler"
            onClick={() => {
              const toggle = document.querySelector(".navbar-collapse");
              toggle.classList.toggle("show");
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* BARRA DE NAVEGACION */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="text-decoration-none">
                  <a href="" className="nav-link text-decoration-none">
                    Inicio
                  </a>
                </NavLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  to="categorias"
                  smooth={true}
                  duration={500}
                  offset={-150}
                >
                  <a className="nav-link" href="#">
                    Categorias
                  </a>
                </ScrollLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contáctenos
                </a>
              </li>
            </ul>
          </div>

          {/* BOTON DE INICIAR SESION */}
          <div className="d-flex dropdown ml-2">
            <button
              className="btn btn-success dropdown-toggle"
              type="button"
              id="perfilDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {decodedStr}
            </button>
            <div className="dropdown-menu" aria-labelledby="perfilDropdown">
              <a className="dropdown-item" href="#">
                Configurar Perfil
              </a>
              <NavLink
              className="dropdown-item"
              to={'/'}>
                Cerrar Sesión
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header_Perfil;
