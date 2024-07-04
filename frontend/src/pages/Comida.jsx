import "../css/styles_emprendimientos.css";
import "../css/logos_emprendimientos.css";
import "../components/Header";
import { Fragment } from "react";
import Header from "../components/Header";

function Comida() {
  return (
    <Fragment>
      <Header />
      <div className="container-fluid">
        <div className="mt-6  text-center mx-auto text-emprendimientos">
          <h1 className="text-center">COMIDA CHINA</h1>
        </div>
        <div className="mt-4 parent2 container_emprendimientos">
          <div className="shops">
            <div className="card5">
              <div className="content">
                <div className="back">
                  <div className="back-content dragon_dorado">
                    <strong className="font-emprendimeintos text-center bg-white">
                      Dragón Rojo
                    </strong>
                    <h3 className="text-center bg-text-cards-emprendimientos">
                      Donde la magia del wok se encuentra con el arte de los
                      sabores orientales.
                    </h3>
                  </div>
                </div>
                <div className="front">
                  <div className="img">
                    <div className="circle"></div>
                    <div className="circle" id="right"></div>
                    <div className="circle" id="bottom"></div>
                  </div>

                  <div className="front-content ">
                    <h4 className="title_front_empre">MÁS DETALLES</h4>
                    <div className="d-flex">
                      {/* Ubicación y Horario */}
                      <div className="location-section mr-3 title_front_empre">
                        <h5 className="text-white title_front_empre">Ubicación y Horario</h5>
                        <p>Dirección: Calle X, Número Y</p>
                        <p>Horario: Lunes a Domingo, 10 AM - 8 PM</p>
                      </div>

                      {/* Reseñas de Clientes */}
                      <div className="reviews-section title_front_empre">
                        <h5 className="text-white title_front_empre">Reseñas de Clientes</h5>
                        <p>
                          Excelente comida, ambiente acogedor. ¡Volveré pronto!
                        </p>
                        <p>El mejor restaurante chino en la ciudad.</p>
                      </div>
                    </div>

                    <div className="socials-container d-flex justify-content-center">
                      <a href="" className="icon-facebook icon ">
                        <span id="title"></span>
                      </a>
                      <a
                        href="https://wa.me/+573133065028"
                        className="icon-whatsapp icon"
                      >
                        <span id="title"></span>
                      </a>
                      <a href="" className="icon-instagram icon">
                        <span id="title"></span>
                      </a>
                      <a href="" className="icon-gplus icon">
                        <span id="title"></span>
                      </a>
                      <a href="" className="icon-github-squared icon">
                        <span id="title"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shops">
            <div className="card5">
                <div className="content">
                  <div className="back">
                    <div className="back-content gran_muralla">
                      <strong className="font-emprendimeintos text-center bg-white">
                        Gran Muralla
                      </strong>
                      <h3 className="text-center bg-text-cards-emprendimientos">
                        Un Festín de Sabores Milenarios en Cada Bocado. 
                      </h3>
                    </div>
                  </div>
                  <div className="front">
                    <div className="img">
                      <div className="circle"></div>
                      <div className="circle" id="right"></div>
                      <div className="circle" id="bottom"></div>
                    </div>

                    <div className="front-content ">
                      <h4 className="title_front_empre">MÁS DETALLES</h4>
                      <div className="d-flex">
                        {/* Ubicación y Horario */}
                        <div className="location-section mr-3 title_front_empre">
                          <h5 className="text-white title_front_empre">Ubicación y Horario</h5>
                          <p>Dirección: Calle X, Número Y</p>
                          <p>Horario: Lunes a Domingo, 10 AM - 8 PM</p>
                        </div>

                        {/* Reseñas de Clientes */}
                        <div className="reviews-section title_front_empre">
                          <h5 className="text-white title_front_empre">Reseñas de Clientes</h5>
                          <p>
                            Excelente comida, ambiente acogedor. ¡Volveré pronto!
                          </p>
                          <p>El mejor restaurante chino en la ciudad.</p>
                        </div>
                      </div>

                      <div className="socials-container d-flex justify-content-center">
                        <a href="" className="icon-facebook icon ">
                          <span id="title"></span>
                        </a>
                        <a
                          href="https://wa.me/+573133065028"
                          className="icon-whatsapp icon"
                        >
                          <span id="title"></span>
                        </a>
                        <a href="" className="icon-instagram icon">
                          <span id="title"></span>
                        </a>
                        <a href="" className="icon-gplus icon">
                          <span id="title"></span>
                        </a>
                        <a href="" className="icon-github-squared icon">
                          <span id="title"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="shops">
            <div className="card5 ">
                <div className="content">
                  <div className="back ">
                    <div className="back-content bambu_garden">
                      <strong className="font-emprendimeintos text-center bg-white">
                        Bambú Garden
                      </strong>
                      <h3 className="text-center bg-text-cards-emprendimientos ">
                        Donde cada bocado es una experiencia oriental única
                      </h3>
                    </div>
                  </div>
                  <div className="front">
                    <div className="img">
                      <div className="circle"></div>
                      <div className="circle" id="right"></div>
                      <div className="circle" id="bottom"></div>
                    </div>

                    <div className="front-content ">
                      <h4 className="title_front_empre">MÁS DETALLES</h4>
                      <div className="d-flex">
                        {/* Ubicación y Horario */}
                        <div className="location-section mr-3 title_front_empre">
                          <h5 className="text-white title_front_empre">Ubicación y Horario</h5>
                          <p>Dirección: Calle X, Número Y</p>
                          <p>Horario: Lunes a Domingo, 10 AM - 8 PM</p>
                        </div>

                        {/* Reseñas de Clientes */}
                        <div className="reviews-section title_front_empre">
                          <h5 className="text-white title_front_empre">Reseñas de Clientes</h5>
                          <p>
                            Excelente comida, ambiente acogedor. ¡Volveré pronto!
                          </p>
                          <p>El mejor restaurante chino en la ciudad.</p>
                        </div>
                      </div>

                      <div className="socials-container d-flex justify-content-center">
                        <a href="" className="icon-facebook icon ">
                          <span id="title"></span>
                        </a>
                        <a
                          href="https://wa.me/+573133065028"
                          className="icon-whatsapp icon"
                        >
                          <span id="title"></span>
                        </a>
                        <a href="" className="icon-instagram icon">
                          <span id="title"></span>
                        </a>
                        <a href="" className="icon-gplus icon">
                          <span id="title"></span>
                        </a>
                        <a href="" className="icon-github-squared icon">
                          <span id="title"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="shops">
            <div className="card5 ">
                <div className="content">
                  <div className="back ">
                    <div className="back-content el_palacio_de_oriente">
                      <strong className="font-emprendimeintos text-center bg-white">
                        El Palacio de Oriente
                      </strong>
                      <h3 className="text-center bg-text-cards-emprendimientos ">
                        Cada plato es un festín de sabores exquisitos.
                      </h3>
                    </div>
                  </div>
                  <div className="front">
                    <div className="img">
                      <div className="circle"></div>
                      <div className="circle" id="right"></div>
                      <div className="circle" id="bottom"></div>
                    </div>

                    <div className="front-content ">
                      <h4 className="title_front_empre">MÁS DETALLES</h4>
                      <div className="d-flex">
                        {/* Ubicación y Horario */}
                        <div className="location-section mr-3 title_front_empre">
                          <h5 className="text-white title_front_empre">Ubicación y Horario</h5>
                          <p>Dirección: Calle X, Número Y</p>
                          <p>Horario: Lunes a Domingo, 10 AM - 8 PM</p>
                        </div>

                        {/* Reseñas de Clientes */}
                        <div className="reviews-section title_front_empre">
                          <h5 className="text-white title_front_empre">Reseñas de Clientes</h5>
                          <p>
                            Excelente comida, ambiente acogedor. ¡Volveré pronto!
                          </p>
                          <p>El mejor restaurante chino en la ciudad.</p>
                        </div>
                      </div>

                      <div className="socials-container d-flex justify-content-center">
                        <a href="" className="icon-facebook icon ">
                          <span id="title"></span>
                        </a>
                        <a
                          href="https://wa.me/+573133065028"
                          className="icon-whatsapp icon"
                        >
                          <span id="title"></span>
                        </a>
                        <a href="" className="icon-instagram icon">
                          <span id="title"></span>
                        </a>
                        <a href="" className="icon-gplus icon">
                          <span id="title"></span>
                        </a>
                        <a href="" className="icon-github-squared icon">
                          <span id="title"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="shops">
            <div className="card5 ">
                  <div className="content">
                    <div className="back ">
                      <div className="back-content El_Templo_del_Sésamo">
                        <strong className="font-emprendimeintos text-center bg-white">
                          El Templo del Sésamo
                        </strong>
                        <h3 className="text-center bg-text-cards-emprendimientos ">
                          Donde cada plato es una adoración al sabor y la frescura.
                        </h3>
                      </div>
                    </div>
                    <div className="front">
                      <div className="img">
                        <div className="circle"></div>
                        <div className="circle" id="right"></div>
                        <div className="circle" id="bottom"></div>
                      </div>

                      <div className="front-content ">
                        <h4 className="title_front_empre">MÁS DETALLES</h4>
                        <div className="d-flex">
                          {/* Ubicación y Horario */}
                          <div className="location-section mr-3 title_front_empre">
                            <h5 className="text-white title_front_empre">Ubicación y Horario</h5>
                            <p>Dirección: Calle X, Número Y</p>
                            <p>Horario: Lunes a Domingo, 10 AM - 8 PM</p>
                          </div>

                          {/* Reseñas de Clientes */}
                          <div className="reviews-section title_front_empre">
                            <h5 className="text-white title_front_empre">Reseñas de Clientes</h5>
                            <p>
                              Excelente comida, ambiente acogedor. ¡Volveré pronto!
                            </p>
                            <p>El mejor restaurante chino en la ciudad.</p>
                          </div>
                        </div>

                        <div className="socials-container d-flex justify-content-center">
                          <a href="" className="icon-facebook icon ">
                            <span id="title"></span>
                          </a>
                          <a
                            href="https://wa.me/+573133065028"
                            className="icon-whatsapp icon"
                          >
                            <span id="title"></span>
                          </a>
                          <a href="" className="icon-instagram icon">
                            <span id="title"></span>
                          </a>
                          <a href="" className="icon-gplus icon">
                            <span id="title"></span>
                          </a>
                          <a href="" className="icon-github-squared icon">
                            <span id="title"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
          <div className="shops">
            <div className="card5 ">
                    <div className="content">
                      <div className="back ">
                        <div className="back-content jardin_de_sabores">
                          <strong className="font-emprendimeintos text-center bg-white">
                            Jardin de sabores
                          </strong>
                          <h3 className="text-center bg-text-cards-emprendimientos ">
                            La frescura se combina con la creatividad para cultivar experiencias gastronómicas inolvidables.
                          </h3>
                        </div>
                      </div>
                      <div className="front">
                        <div className="img">
                          <div className="circle"></div>
                          <div className="circle" id="right"></div>
                          <div className="circle" id="bottom"></div>
                        </div>

                        <div className="front-content ">
                          <h4 className="title_front_empre">MÁS DETALLES</h4>
                          <div className="d-flex">
                            {/* Ubicación y Horario */}
                            <div className="location-section mr-3 title_front_empre">
                              <h5 className="text-white title_front_empre">Ubicación y Horario</h5>
                              <p>Dirección: Calle X, Número Y</p>
                              <p>Horario: Lunes a Domingo, 10 AM - 8 PM</p>
                            </div>

                            {/* Reseñas de Clientes */}
                            <div className="reviews-section title_front_empre">
                              <h5 className="text-white title_front_empre">Reseñas de Clientes</h5>
                              <p>
                                Excelente comida, ambiente acogedor. ¡Volveré pronto!
                              </p>
                              <p>El mejor restaurante chino en la ciudad.</p>
                            </div>
                          </div>

                          <div className="socials-container d-flex justify-content-center">
                            <a href="" className="icon-facebook icon ">
                              <span id="title"></span>
                            </a>
                            <a
                              href="https://wa.me/+573133065028"
                              className="icon-whatsapp icon"
                            >
                              <span id="title"></span>
                            </a>
                            <a href="" className="icon-instagram icon">
                              <span id="title"></span>
                            </a>
                            <a href="" className="icon-gplus icon">
                              <span id="title"></span>
                            </a>
                            <a href="" className="icon-github-squared icon">
                              <span id="title"></span>
                            </a>
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

export default Comida;
