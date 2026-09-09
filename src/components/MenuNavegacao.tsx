import { Link } from "react-router";

function MenuNavegacao() {

    const estilosLink = `
    font-['Momo_Trust_Display']
    text-white
    hover:opacity-80
    text-[clamp(.95rem,2.5vw,.95rem)]
    font-normal
    no-underline
    whitespace-nowrap

    md:text-[1.1rem]
    `

    return (
        <nav className="
        absolute
        right-0
        top-12
        flex
        flex-col
        gap-8
        rounded-2xl
        p-5
        bg-indigo-500
        
        md:static
        md:flex-row
        nd:gap-5
        md:rounded-none
        md:bg-transparent
        md:p-0
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
        </nav>);
}

export default MenuNavegacao;