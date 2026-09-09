import { Link } from "react-router";

function MenuFooter() {
    return (
        <nav className="footer__menu">
            <Link to="/" className="">
                Início
            </Link>

            <Link to="/sobre" className="">
                A SoulMove
            </Link>

            <Link to="/funcionalidades" className="">
                Como Funciona
            </Link>

            <Link to="/roadmap" className="">
                Visão de Futuro
            </Link>

            <Link to="/integrantes" className="">
                Nosso Time
            </Link>

            <Link to="/faq" className="">
                FAQ
            </Link>

            <Link to="/contato" className="">
                Contato
            </Link>
        </nav>
    );
}

export default MenuFooter;
