/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Fragment } from "react";
import "../css/styles.css";
import Header from "../components/Header";
import Grid_Principal from "../components/Grid_Principal";
import Contactanos from "../components/Contactanos";
import Sections from "../components/Sections";
import Footer from "../components/Footer";
export default function Index(props){
    // const [perfil, setPerfil] =>{
    // }
    return(
        <Fragment>
            <Header/>
            <Grid_Principal/>
            <Contactanos/>
            <Sections/>
            <Footer/>
        </Fragment>
    );
}


