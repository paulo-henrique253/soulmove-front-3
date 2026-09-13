import MenuNavegacao from "./MenuNavegacao";
import SoulMove_Pequena from "../assets/SoulMove_Pequena.png"

function Header() {
    function trocarMenu(){
        const menu = document.querySelector("#menu")
        menu?.classList.toggle("hidden")
    }
    return (
        <header className="
        w-full
        bg-linear-to-r
         from-sky-400
         to-indigo-500
         flex
         flex-col
         items-center
         justify-center
         gap-4
         p-4

         md:flex-row
         md:justify-between
         md:px-8
         ">

            <button className="
            text-white
            absolute
            right-4
            top-2
            cursor-pointer
            bg-transparent
            text-3xl

            md:hidden
            "
            onClick={trocarMenu}
            >☰</button>

            <img src={SoulMove_Pequena} alt="" className="block h-auto w-[clamp(120px,18vw,180px)]"/>

            <MenuNavegacao trocarMenu = {trocarMenu} />

        </header>
    );
}

export default Header;