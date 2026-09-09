import MenuFooter from "./MenuFooter";

function Footer() {
    return (
        <footer className="
        w-full
        flex
        flex-col
        justify-center
        items-center
        gap-6
        p-4
        bg-linear-to-r
        from-sky-400
        to-indigo-500

        md:gap-6
        md-p8
        ">

            <MenuFooter />

            <p className="
            text-center
            font-['Lexend_Deca']
            text-[clamp(.7rem,2vw,.95rem)]
            text-white
            ">
                © 2026 Antípoda. Todos os direitos reservados.
            </p>
        </footer>
    );
}

export default Footer;
