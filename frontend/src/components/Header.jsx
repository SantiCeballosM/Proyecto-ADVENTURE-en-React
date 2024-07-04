/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "../css/styles_Header.css";
import { Link as ScrollLink, Element } from 'react-scroll';
import { NavLink } from "react-router-dom";

function Header(props) {

  return (
    <header className="header fixed-top">
      <nav className="navbar  navbar-expand-lg navbar-dark bg-dark ">
        <div className="container">
          <a className="navbar-brand " href="#">
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
                <NavLink to="/"  className="text-decoration-none">
                  <a href="" className="nav-link text-decoration-none">
                    Inicio
                  </a>
                </NavLink>
              </li>
              <li className="nav-item">
                <ScrollLink to='categorias' smooth={true} duration={500} offset={-150}>
                  <a className="nav-link" href="#">
                    Categorias
                  </a>
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink to='categorias' smooth={true} duration={500} offset={-150}>
                  <a className="nav-link" href="#">
                    Nosotros
                  </a>
                </ScrollLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contáctenos
                </a>
              </li>
            </ul>
          </div>

          {/* BOTON DE INICIAR SESION */}
            <NavLink 
            className="btn btn-success"
            to={'/login'}
            >
              Iniciar Sesion
            </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
