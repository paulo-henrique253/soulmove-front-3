import MenuNavegacao from "./MenuNavegacao";
import SoulMove_Pequena from "../assets/SoulMove_Pequena.png"

function Header() {
    return (
        <header>

            <button>☰</button>

            <img src={SoulMove_Pequena} alt="" />

            <MenuNavegacao />

        </header>
    );
}

export default Header;