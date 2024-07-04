import { Fragment } from "react";
import "../css/fontello.css";
export default function Footer(){
    return(
        <Fragment>
            <footer className="bg-dark text-center text-white">
                <div className="container p-4">
                    <section className="mb-4">
                    <a className="btn btn-primary btn-floating m-1" href="#!" role="button"><i className="fab icon-facebook"></i></a>
                    <a className="btn btn-success btn-floating m-1" href="#!" role="button"><i className="fab icon-whatsapp"></i></a>
                    <a className="btn btn-warning btn-floating m-1" href="#!" role="button"><i className="fab icon-instagram"></i></a>
                    <a className="btn btn-danger btn-floating m-1" href="#!" role="button"><i className="fab icon-gplus"></i></a>
                    <a className="btn btn-secondary btn-floating m-1" href="#!" role="button"><i className="fab icon-github-squared"></i></a>
                    </section>
                    <section className="">
                    </section>
                    <section className="mb-4">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                        distinctio earum repellat quaerat voluptatibus placeat nam,
                        commodi optio pariatur est quia magnam eum harum corrupti dicta,
                        aliquam sequi voluptate quas.
                    </p>
                    </section>
                    <section className="">
                    {/* <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                            <a href="#!" className="text-white">Link 1</a>
                            </li>
                            <li>
                            <a href="#!" className="text-white">Link 2</a>
                            </li>
                            <li>
                            <a href="#!" className="text-white">Link 3</a>
                            </li>
                            <li>
                            <a href="#!" className="text-white">Link 4</a>
                            </li>
                        </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                            <a href="#!" className="text-white">Link 1</a>
                            </li>
                            <li>
                            <a href="#!" className="text-white">Link 2</a>
                            </li>
                            <li>
                            <a href="#!" className="text-white">Link 3</a>
                            </li>
                            <li>
                            <a href="#!" className="text-white">Link 4</a>
                            </li>
                        </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                            <a href="#!" className="text-white">Link 1</a>
                            </li>
                            <li>
                            <a href="#!" className="text-white">Link 2</a>
                            </li>
                            <li>
                            <a href="#!" className="text-white">Link 3</a>
                            </li>
                            <li>
                            <a href="#!" className="text-white">Link 4</a>
                            </li>
                        </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                            <a href="#!" className="text-white">Link 1</a>
                            </li>
                            <li>
                            <a href="#!" className="text-white">Link 2</a>
                            </li>
                            <li>
                            <a href="#!" className="text-white">Link 3</a>
                            </li>
                            <li>
                            <a href="#!" className="text-white">Link 4</a>
                            </li>
                        </ul>
                        </div>
                    </div> */}
                    </section>
                </div>
                <div className="text-center p-3" >
                    © 2023 Copyright:
                    <a className="text-white" href="https://wa.me/+573133065028">Adventure</a>
                </div>
            </footer>
        </Fragment>
    );
}