type TituloPaginaProps = {
    texto: string;
};

function TituloPagina({ texto }: TituloPaginaProps) {
    return (
        <h1
            className=""
        >
            {texto}
        </h1>
    );
}

export default TituloPagina;

