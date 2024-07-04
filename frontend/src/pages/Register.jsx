/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import facebook from "../images/facebook.png";
import google from "../images/google.png";
// import Logo_ciaf_login from "../images/logo_ciaf_login.jpg";
import "../css/styles_login_registrarse.css";
import "../css/styles.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import Validation from "../js/RegisterValidation";
import axios from "axios";

function Register(props) {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
    birthdate: "",
    phone_number: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    console.log({
      fullname: values.fullname,
      email: values.email,
      password: values.password,
      birthdate: values.birthdate,
      phone_number: values.phone_number,
    });
    console.log(values.fullname)
    if (
      values.fullname !== ""&&
      values.email !=="" &&
      values.password !==""  &&
      values.birthdate !==""  &&
      values.phone_number !=="" 
    ) {
      console.log("ok")
      axios
        .post("http://localhost:5000/register", {
          fullname: values.fullname,
          email: values.email,
          password: values.password,
          birthdate: values.birthdate,
          phone_number: values.phone_number,
        })
        .then((res) => {
          console.log(res);
          navigate("/login");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <Fragment>
      <div className="container-fluid w-100 mt-3 rounded container-sm container-md container-lg container-xl container-xxl">
        <div className="circle3"></div>
        <div className="circle3"></div>
        <div className="row align-items-stretch ">
          <div className=" bg-Regis col-12 text-center container_complete">
            <div className="col imagen_login d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"></div>
            {/* <div className="text-end">
              <h2 className="fw-bold fs-2 text-center">ADVENTURE</h2>
            </div> */}
            {/* <h2 className="fw-bold text-center py-5 ">Regístrate</h2> */}
            <div className=" pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3">
                <span>Persona Natural</span>
                <span>Emprendedor</span>
              </h6>
              <input
                className="checkbox"
                type="checkbox"
                id="reg-log"
                name="reg-log"
              />
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="container w-100 rounded shadow">
                        <div className="row align-items-stretch ">
                          <div className="col imagen_login d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">
                            {/* <img src={Logo_ciaf_login} alt="" className="img-fluid" /> */}
                          </div>

                          <div className="col container_login bg-white p-4 rounded-end ">
                            {/* <div className="text-end">
                              <h2 className="fw-bold fs-2">ADVENTURE</h2>
                            </div> */}
                            <h2 className="fw-bold text-center">
                              Regístrar persona natural
                            </h2>
                            {/* REGISTRO */}
                            <form
                              action=""
                              onSubmit={handleSubmit}
                              className="formu form1 mt-5"
                            >
                              <div className="mb-4 row">
                                <label
                                  htmlFor="staticEmail"
                                  className="col-sm-2 col-form-label"
                                >
                                  Nombre
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    name="fullname"
                                    onChange={handleInput}
                                  />
                                  {errors.fullname && (
                                    <span className="text-danger">
                                      {errors.fullname}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="mb-4 row">
                                <label
                                  htmlFor="staticEmail"
                                  className="col-sm-2 col-form-label"
                                >
                                  Email
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="EJ: Correo@gmail.com"
                                    name="email"
                                    onChange={handleInput}
                                  />
                                  {errors.email && (
                                    <span className="text-danger">
                                      {errors.email}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="mb-4 row">
                                <label
                                  htmlFor="staticEmail"
                                  className="col-sm-2 col-form-label"
                                >
                                  Contraseña
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="password"
                                    className="form-control"
                                    placeholder="EJ: Contraseña1233"
                                    name="password"
                                    onChange={handleInput}
                                  />
                                  {errors.password && (
                                    <span className="text-danger">
                                      {errors.password}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="mb-4 row">
                                <label
                                  htmlFor="staticEmail"
                                  className="col-sm-2 col-form-label"
                                >
                                  Nacimiento
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="date"
                                    className="form-control"
                                    name="birthdate"
                                    onChange={handleInput}
                                  />
                                  {errors.birthdate && (
                                    <span className="text-danger">
                                      {errors.birthdate}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="mb-4 row">
                                <label
                                  htmlFor="staticEmail"
                                  className="col-sm-2 col-form-label"
                                >
                                  N°Celular
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Numero de celular"
                                    name="phone_number"
                                    onChange={handleInput}
                                  />
                                  {errors.phone_number && (
                                    <span className="text-danger">
                                      {errors.phone_number}
                                    </span>
                                  )}
                                </div>
                              </div>

                              <div className="d-grid">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Registrarse
                                </button>
                              </div>
                              <div className="my-3">
                                <span>
                                  ¿Ya tienes una cuenta?{" "}
                                  <NavLink className="boton" to="/login">
                                    Iniciar Sesión
                                  </NavLink>
                                </span>{" "}
                                <br />
                                <span>
                                  <a href="#">Olvidé mi contraseña</a>
                                </span>
                              </div>
                            </form>

                            {/* REGISTRO CON REDES SOCIALES */}
                            {/* <div className="container w-100 my-5">
                              <div className="row text-center">
                                <div className="col-12">Registrarse con: </div>
                              </div>
                              <div className="row">
                                <div className="col-12">
                                  <div className="d-flex">
                                    <button className="btn btn-outline-primary w-100 my-2">
                                      <div className="row align-items-center">
                                        <div className="col-2 d-none d-md-block">
                                          <img
                                            src={facebook}
                                            width="32"
                                            alt="Facebook"
                                          />
                                        </div>
                                        <div className="col-12 col-md-10  text-center">
                                          Facebook
                                        </div>
                                      </div>
                                    </button>
                                    <button className="btn btn-outline-danger w-100 my-2">
                                      <div className="row align-items-center">
                                        <div className="col-2 d-none d-md-block">
                                          <img
                                            src={google}
                                            width="32"
                                            alt="Google"
                                          />
                                        </div>
                                        <div className="col-12 col-md-10 text-center">
                                          Google
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-back">
                    <div className="center-wrap">
                      <div className="container w-100 rounded shadow">
                        <div className="row align-items-stretch ">
                          <div className="col imagen_login d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">
                            {/* <img src={Logo_ciaf_login} alt="" className="img-fluid" /> */}
                          </div>
                          <div className="col container_login bg-white p-4 rounded-end ">
                            {/* <div className="text-end">
                              <h2 className="fw-bold fs-2">ADVENTURE</h2>
                            </div> */}
                            <h2 className="fw-bold text-center">
                              Regístrar Emprendedor
                            </h2>
                            {/* REGISTRO */}
                            <form
                              action=""
                              onSubmit={handleSubmit}
                              className="formu form1 mt-5"
                            >
                              <div className="mb-4 row">
                                <label
                                  htmlFor="staticEmail"
                                  className="col-sm-2 col-form-label"
                                >
                                  Nombre
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    name="fullname"
                                    onChange={handleInput}
                                  />
                                  {errors.fullname && (
                                    <span className="text-danger">
                                      {errors.fullname}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="mb-4 row">
                                <label
                                  htmlFor="staticEmail"
                                  className="col-sm-2 col-form-label"
                                >
                                  Email
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="EJ: Correo@gmail.com"
                                    name="email"
                                    onChange={handleInput}
                                  />
                                  {errors.email && (
                                    <span className="text-danger">
                                      {errors.email}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="mb-4 row">
                                <label
                                  htmlFor="staticEmail"
                                  className="col-sm-2 col-form-label"
                                >
                                  Contraseña
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="password"
                                    className="form-control"
                                    placeholder="EJ: Contraseña1233"
                                    name="password"
                                    onChange={handleInput}
                                  />
                                  {errors.password && (
                                    <span className="text-danger">
                                      {errors.password}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="mb-4 row">
                                <label
                                  htmlFor="staticEmail"
                                  className="col-sm-2 col-form-label"
                                >
                                  Nacimiento
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="date"
                                    className="form-control"
                                    name="birthdate"
                                    onChange={handleInput}
                                  />
                                  {errors.birthdate && (
                                    <span className="text-danger">
                                      {errors.birthdate}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="mb-4 row">
                                <label
                                  htmlFor="staticEmail"
                                  className="col-sm-2 col-form-label"
                                >
                                  N°Celular
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Numero de celular"
                                    name="phone_number"
                                    onChange={handleInput}
                                  />
                                  {errors.phone_number && (
                                    <span className="text-danger">
                                      {errors.phone_number}
                                    </span>
                                  )}
                                </div>
                              </div>

                              <div className="d-grid">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Registrarse
                                </button>
                              </div>
                              <div className="my-3">
                                <span>
                                  ¿Ya tienes una cuenta?{" "}
                                  <NavLink className="boton" to="/login">
                                    Iniciar Sesión
                                  </NavLink>
                                </span>{" "}
                                <br />
                                <span>
                                  <a href="#">Olvidé mi contraseña</a>
                                </span>
                              </div>
                            </form>


                            {/* REGISTRO CON REDES SOCIALES */}
                            {/* <div className="container w-100 my-5">
                              <div className="row text-center">
                                <div className="col-12">Registrarse con: </div>
                              </div>
                              <div className="row">
                                <div className="col-12">
                                  <div className="d-flex">
                                    <button className="btn btn-outline-primary w-100 my-2">
                                      <div className="row align-items-center">
                                        <div className="col-2 d-none d-md-block">
                                          <img
                                            src={facebook}
                                            width="32"
                                            alt="Facebook"
                                          />
                                        </div>
                                        <div className="col-12 col-md-10  text-center">
                                          Facebook
                                        </div>
                                      </div>
                                    </button>
                                    <button className="btn btn-outline-danger w-100 my-2">
                                      <div className="row align-items-center">
                                        <div className="col-2 d-none d-md-block">
                                          <img
                                            src={google}
                                            width="32"
                                            alt="Google"
                                          />
                                        </div>
                                        <div className="col-12 col-md-10 text-center">
                                          Google
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Register;
