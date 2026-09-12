type TextoRoadmapProps = {
    texto: string;
};

function TextoRoadmap({ texto }: TextoRoadmapProps) {
    return (
        <p className="">
            {texto}
        </p>
    );
}

export default TextoRoadmap;