type TextoDestaqueProps = {
    texto: string;
};

function TextoDestaque({ texto }: TextoDestaqueProps) {
    return (
        <p className="">
            {texto}
        </p>
    );
}

export default TextoDestaque;