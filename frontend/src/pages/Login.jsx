/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import facebook from "../images/facebook.png";
import google from "../images/google.png";
// import Logo_ciaf_login from "../images/logo_ciaf_login.jpg";
import "../css/styles_login_registrarse.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, navigate } from "react";
import Validation from "../js/LoginValidation";
import Cookies from 'js-cookie';
import axios from "axios";
function Login(props) {
  const [values, setValues] = useState({
    email: "",
    password: "",
    
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  
  const handleSubmit = (event) => {
     event.preventDefault();
    setErrors(Validation(values));
    if (values.email[0] !== "" || values.password[0] !== "") {
      axios
        .post("http://localhost:5000/login", values)
        .then((res) => {
          console.log(res.data["response"] )
          if(res.data["response"] === 200){
            Cookies.set("useName",res.data["data"][0]["full_name"])
            navigate('/index_perfil')
          }else{
            alert("Falla, intentalo nuevamente")
          }
        })
        .catch((err) => console.log(err));

   }
  };
  return (
    <div className="container w-100 mt-5 rounded shadow overflow_login">
      <div className="circle3"></div>
      <div className="circle3"></div>
      <div className="row align-items-stretch">
        <div className="col imagen_login d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">
          {/* <img src={Logo_ciaf_login} alt="" className="img-fluid" /> */}
        </div>
        <div className="col container_login bg-white p-5 rounded-end">
          {/* <div className="text-end">
            <h2 className="fw-bold fs-2">ADVENTURE</h2>
          </div> */}
          <h2 className="fw-bold text-center py-5">Bienvenido</h2>
          {/* LOGIN */}
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Ingresa tu correo electrónico"
                onChange={handleInput}
              />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </div>
            <div className="mb-4">
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Ingresa tu contraseña"
                onChange={handleInput}
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Iniciar Sesión
              </button>
            </div>
            <div className="my-3">
              <span>
                No tienes cuenta?
                <NavLink to={"/register"} className="boton">
                  Registrate
                </NavLink>
              </span>{" "}
              <br />
              <span>
                <a href="#">Recuperar contraseña</a>
              </span>
            </div>
          </form>

          {/* LOGIN CON REDES SOCIALES */}
          {/* <div className="container w-100 my-5">
            <div className="row text-center">
              <div className="col-12">Iniciar Sesión con: </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="d-flex">
                  <button className="btn btn-outline-primary w-100 my-2">
                    <div className="row align-items-center">
                      <div className="col-2 d-none d-md-block">
                        <img src={facebook} width="32" alt="Facebook" />
                      </div>
                      <div className="col-12 col-md-10  text-center">
                        Facebook
                      </div>
                    </div>
                  </button>
                  <button className="btn btn-outline-danger w-100 my-2">
                    <div className="row align-items-center">
                      <div className="col-2 d-none d-md-block">
                        <img src={google} width="32" alt="Google" />
                      </div>
                      <div className="col-12 col-md-10 text-center">Google</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
