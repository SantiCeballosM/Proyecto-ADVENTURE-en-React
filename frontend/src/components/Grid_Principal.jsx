/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { Link as ScrollLink, Element } from 'react-scroll';
import "../css/styles_Grid_Principal.css";
export default function Grid_Principal(props){
    return(
        <div className="Grid_Principal sr container-fluid  bg_grid_principal container-sm container-md container-lg container-xl container-xxl ">
            <div className="circle2"></div>
            <div className="circle2"></div>
            <h1 id="categorias" className="text-light  text-center">CATEGORÍAS</h1>
            <div className="parent">
                <ScrollLink to='comidas' smooth={true} duration={500} offset={-150}>
                    <div className="card text-center boton_categoria"><p className="heading font boton_categoria"><a className="boton_categoria text-decoration-none " href="#comidas">COMIDA</a></p></div>
                </ScrollLink>
                <ScrollLink to='belleza' smooth={true} duration={500} offset={-150}>
                    <div className="card text-center"><p className="heading font"><a className="text-decoration-none boton_categoria" href="#belleza">BELLEZA</a></p></div>
                </ScrollLink>
                <ScrollLink to='deportes' smooth={true} duration={500} offset={-150}>
                    <div className="card text-center"><p className="heading font"><a className="text-decoration-none boton_categoria" href="#deportes">DEPORTE</a></p></div>
                </ScrollLink>
                <ScrollLink to='cocina' smooth={true} duration={500} offset={-150}>
                    <div className="card text-center"><p className="heading font"><a className="text-decoration-none boton_categoria" href="#cocina">COCINA</a></p></div>
                </ScrollLink>
                <ScrollLink to='moda' smooth={true} duration={500} offset={-150}>
                    <div className="card text-center"><p className="heading font"><a className="text-decoration-none boton_categoria" href="#moda">MODA</a></p></div>
                </ScrollLink>
                <ScrollLink to='tegnologia' smooth={true} duration={500} offset={-150}>
                    <div className="card text-center"><p className="heading font"><a className="text-decoration-none boton_categoria" href="#tegnologia">TECNOLOGÍA</a></p></div>
                </ScrollLink>
            </div>
        </div>
    );
}