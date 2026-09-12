type TextoRoadmapProps = {
    texto: string;
};

function TextoRoadmap({ texto }: TextoRoadmapProps) {
    return (
        <p className="
                text-center
                text-black
                font-['Lexend_Deca']
                font-normal
                leading-[1.8]
                max-w-120

                md:max-w-176

                xl:w-full
                xl:max-w-none
                xl:self-center
                xl:text-left
        ">
            {texto}
        </p>
    );
}

export default TextoRoadmap;