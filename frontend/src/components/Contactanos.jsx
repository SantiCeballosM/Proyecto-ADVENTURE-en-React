import "../css/styles_contactanos.css";
import "../css/fontello.css";
export default function Contactanos(){
    return (
        <div className="container-bar ">
            <input type="checkbox" id="btn-social" />
            <label htmlFor="btn-social" className="custom-button">
                <span className="icon-vcard"></span>
            </label>
            <div className="icon-social">
                <a href="" className="icon-facebook">
                    <span id="title">
                        Facebook</span>
                </a>
                <a href="https://wa.me/+573133065028" className="icon-whatsapp">
                    <span id="title">
                        Whatsapp</span>
                </a>
                <a href="" className="icon-instagram">
                    <span id="title">
                        Instagram</span>
                </a>
                <a href="" className="icon-gplus">
                    <span id="title">
                        Google+</span>
                </a>
                <a href="" className="icon-github-squared">
                    <span id="title">
                        GitHub</span>
                </a>
            </div>
        </div>
    );
}