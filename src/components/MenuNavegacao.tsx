import { Link } from "react-router";

function MenuNavegacao() {

    const estilosLink = `
    font-['Momo_Trust_Display']
    text-white
    hover:opacity-80
    `

    return (
        <nav>
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