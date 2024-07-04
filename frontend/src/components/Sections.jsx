/* eslint-disable no-unused-vars */
import { Fragment } from "react";
import "../css/styles_sections.css";
import { NavLink } from "react-router-dom";
export default function Sections(){
    
    return(
        <Fragment>
            <section id='comidas'>
                <div className="card2 container container-sm container-md container-lg container-xl container-xxl margin_t">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner cards">
                        <h2 className="text-center text-light">COMIDAS</h2>
                        <div className="card3 text-center mx-auto">           
                            <p><NavLink to='/comida' className="font_cards"><span className="font_cards card"> CHINA</span></NavLink></p>
                            <p><span className="font_cards card">RAPIDA</span></p>
                            <p><span className="font_cards card">VEGETARIANA</span></p>
                            <p><span className="font_cards card">VEGANA</span></p>
                            <p><span className="font_cards card">MASCOTAS</span></p>
                            <p><span className="font_cards card">RESTAURANTES VARIOS</span></p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='deportes'>
            <div className="card2 container-sm container-md container-lg container-xl container-xxl margin_t">
                <div className="circle2"></div>
                <div className="circle2"></div>
                <div className="card-inner cards">
                    <h2 className="text-center text-light">DEPORTE</h2>
                    <div className="card3 text-center mx-auto">
                        <p><span className="font_cards card">FUTBOL</span></p>
                        <p><span className="font_cards card">TENIS</span></p>
                        <p><span className="font_cards card">VOLEIBOL</span></p>
                        <p><span className="font_cards card">BALONCESTO</span></p>
                        <p><span className="font_cards card">NATACION</span></p>
                        <p><span className="font_cards card">DEPORTES VARIOS</span></p>
                    </div>
                </div>
            </div>
            </section>
            <section id='moda'>
                <div className="card2 container-sm container-md container-lg container-xl container-xxl margin_t">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner cards ">
                        <h2 className="text-center text-light">MODA</h2>
                        <div className="card3 text-center mx-auto ">
                            <p><span className="font_cards card">ROPA</span></p>
                            <p><span className="font_cards card">ACCESORIOS</span></p>
                            <p><span className="font_cards card">CALZADOS</span></p>
                            <p><span className="font_cards card">BOLSOS</span></p>
                            <p><span className="font_cards card">JOYERIA</span></p>
                            <p><span className="font_cards card">MODA VARIADA</span></p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className='section_4'>
                <div className="cardBox container-sm container-md container-lg container-xl container-xxl margin_t">
                <div className="card_section4">
                    <div className="h4">NUESTRA MISIÓN Y VISIÓN</div>
                        <div className="content">
                            <div className="h3">MISIÓN:</div>
                            <p>Conectar a los emprendedores con las oportunidades que necesitan para tener éxito. Esto incluye oportunidades de inversión, colaboración, crecimiento y aprendizaje. La plataforma proporcionará un espacio para que los emprendedores presenten sus proyectos, compartan sus historias y se conecten con una comunidad global de personas interesadas en el emprendimiento.</p>
                            <div className="h3">VISIÓN:</div>
                            <p>Ser el aplicativo líder de emprendimiento en América Latina. Esto significa que la plataforma será el lugar preferido para que los emprendedores encuentren las oportunidades que necesitan para tener éxito. La plataforma será utilizada por emprendedores, inversores, expertos y entusiastas de todo el mundo.</p>
                        </div>
                    </div>
                </div>
            </section> */}
            <section id='belleza'>
                <div className=" card2 container-sm container-md container-lg container-xl container-xxl mt-5">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner cards">
                        <h2 className="text-center text-light">BELLEZA</h2>
                        <div className="card3 text-center mx-auto">
                            <p><span className="font_cards card">MAQUILLAJE</span></p>
                            <p><span className="font_cards card">SPA</span></p>
                            <p><span className="font_cards card">PERFUMES</span></p>
                            <p><span className="font_cards card">CUIDADO DE PIEL</span></p>
                            <p><span className="font_cards card">CUIDADO DE CABELLO</span></p>
                            <p><span className="font_cards card">BELLEZA VARIADA</span></p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='cocina'>
            <div className="card2 container-sm container-md container-lg container-xl container-xxl margin_t">
                <div className="circle2"></div>
                <div className="circle2"></div>
                <div className="card-inner cards">
                    <h2 className="text-center text-light">COCINA</h2>
                    <div className="card3 text-center mx-auto">
                        <p><span className="font_cards card">ELECTRODOMÉSTICOS</span></p>
                        <p><span className="font_cards card">UTENCILIOS</span></p>
                        <p><span className="font_cards card">VAJILLAS</span></p>
                        <p><span className="font_cards card">INGREDIENTES</span></p>
                        <p><span className="font_cards card">ACCESORIOS</span></p>
                        <p><span className="font_cards card">PRODUCTOS VARIOS</span></p>
                    </div>
                </div>
            </div>
            </section>
            <section id='tegnologia'>
                <div className="card2 container-sm container-md container-lg container-xl container-xxl margin_t">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner cards">
                        <h2 className="text-center text-light">TEGNOLOGÍA</h2>
                        <div className="card3 text-center mx-auto">
                            <p><span className="font_cards card">TELÉFONOS</span></p>
                            <p><span className="font_cards card">COMPUTADORES</span></p>
                            <p><span className="font_cards card">CONSOLAS</span></p>
                            <p><span className="font_cards card">AUDIFONOS</span></p>
                            <p><span className="font_cards card">EQUIPOS DE SONIDO</span></p>
                            <p><span className="font_cards card">TEGNOLOGIA VARIADA</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}