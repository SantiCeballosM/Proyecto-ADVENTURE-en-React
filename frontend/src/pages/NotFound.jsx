import { Fragment } from "react"
import { NavLink } from "react-router-dom";
export default function NotFound(){
    return(
        <Fragment>
            <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span className="text-danger">Uyyyyyy!</span> Pagina <b>NO</b> encontrada</p>
                <p className="lead">
                    Aqui es a donde tienes que ir :3
                    <br />
                    <b>↓</b>

                </p>

                <NavLink
                to='/'
                className="btn btn-primary"
                >
                    Ir a la pagina principal
                </NavLink>
            </div>
            </div>
        </Fragment>
    );
}