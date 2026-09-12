type TituloPaginaProps = {
    texto: string;
};

function TituloPagina({ texto }: TituloPaginaProps) {
    return (
        <h1
            className="font-['Momo_Trust_Display']
                    text-4xl
                    md:text-5xl
                    font-extrabold
                    text-center 
                    text-sky-400 
                    mb-16"
        >
            {texto}
        </h1>
    );
}

export default TituloPagina;

