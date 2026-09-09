import { Link } from "react-router";

function MenuFooter() {
    const estilosLink = `
    text-white
    font-['Momo_Trust_Display']
    font-normal
    text-[clamp(.75rem,2.5vw,1rem)]
    no-underline
    whitespace-nowrap
    hover:opacity-80 `;

    return (
        <nav className="
        flex
        flex-wrap
        justify-center
        items-center
        gap-4
        md:gap-6
        ">
            <Link to="/" className={estilosLink}>
                Início
            </Link>

            <Link to="/sobre" className={estilosLink}>
                A SoulMove
            </Link>

            <Link to="/funcionalidades" className={estilosLink}>
                Como Funciona
            </Link>

            <Link to="/roadmap" className={estilosLink}>
                Visão de Futuro
            </Link>

            <Link to="/integrantes" className={estilosLink}>
                Nosso Time
            </Link>

            <Link to="/faq" className={estilosLink}>
                FAQ
            </Link>

            <Link to="/contato" className={estilosLink}>
                Contato
            </Link>
        </nav>
    );
}

export default MenuFooter;
