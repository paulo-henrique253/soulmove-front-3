import { Link } from "react-router";

function MenuNavegacao() {
    return (
        <nav>
            <Link to="/">
                Início
            </Link>

            <Link to="/sobre">
                A SoulMove
            </Link>

            <Link to="/funcionalidades">
                Como Funciona
            </Link>

            <Link to="/roadmap">
                Visão de Futuro
            </Link>

            <Link to="/integrantes">
                Nosso Time
            </Link>

            <Link to="/faq">
                FAQ
            </Link>

            <Link to="/contato">
                Contato
            </Link>
        </nav>);
}

export default MenuNavegacao;