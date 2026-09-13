import ImagemInterativa from "./ImagemInterativa";

type CardFuncionalidadeProps = {
    inverterOrdem: boolean;
    titulo: string;
    descricao: string;
    imagemPrincipalSrc: string;
    imagemPrincipalAlt: string;
    imagemSecundarioSrc: string;
    imagemSecundarioAlt: string;
};

function CardFuncionalidade( { inverterOrdem = false, titulo, descricao, imagemPrincipalSrc, imagemPrincipalAlt, imagemSecundarioSrc, imagemSecundarioAlt}: CardFuncionalidadeProps ) {
        
    
    return (
            <section className={`flex flex-col ${inverterOrdem ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between gap-12 py-12 border-b border-gray-100 last:border-0`}>
                <div className="flex-1 space-y-5 w-full">
                    <h2 className="font-['Momo_Trust_Display'] text-4xl font-bold ">
                        {titulo}
                    </h2>

                    <p className="font-['Lexend_Deca'] text-lg leading-relaxed">
                        {descricao}
                    </p>

                    <p className="hidden lg:inline-block font-['Lexend_Deca'] px-4 py-2 text-sky-400 font-semibold text-sm">
                        Interaja com a imagem!
                    </p>
                </div>

                <div className="flex-1 flex justify-center w-full md:justify-end">
                    <ImagemInterativa 
                    principalSrc={imagemPrincipalSrc}
                    principalAlt={imagemPrincipalAlt}
                    secundarioSrc={imagemSecundarioSrc}
                    secundarioAlt={imagemSecundarioAlt}
                    />
                </div>
            </section>
        );
}

export default CardFuncionalidade;