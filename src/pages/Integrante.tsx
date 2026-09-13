import { useParams } from "react-router";
import { integrantes } from "../data/integrantes";

import imgLinkedin from "../assets/Linkedin.png";
import imgGithub from "../assets/GitHub.png";

function Integrante(){
    const {slug} = useParams()
    console.log(slug)

    const integrante = (integrantes.find((integrante) => integrante.slug === slug))
    if(!integrante){
        return (<></>)
    }
    
    return (
        <div className="py-10 flex justify-center text-center">
            <div className="bg-linear-to-r from-sky-400 to-indigo-500 [box-shadow:5px_5px_10px_0px_rgba(37,_59,_121,_0.3)] h-120 px-5 self-center rounded-2xl grid items-center justify-center">
                <img src={integrante.foto} alt="Foto do integrante" 
                    className=" h-[90%] w-full  object-cover self-center row-[1/5] col-[1/2] rounded-2xl"
                />
                <h2 className="font-['Momo_Trust_Display'] text-white col-[2/3]">{integrante.nome}</h2>
                <p className="font-['Lexend-Deca'] text-white">{integrante.rm}</p>
                <p className="font-['Lexend-Deca'] text-white">{integrante.turma}</p>
                    
                
                <p className="font-['Lexend-Deca'] text-white max-w-[80%] place-self-center text-center">{integrante.sobre}</p>

                <div className="row-[5/6] col-[1/3] flex gap-5">
                    <a 
                        href={integrante.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full flex justify-center items-center bg-indigo-600 rounded-xl h-12 py-1"
                    >
                        <img src={imgGithub} alt="Logo do Github" className="h-6 w-6" />
                    </a>
                    <a 
                        href={integrante.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full flex justify-center items-center bg-indigo-600 rounded-xl h-12 py-1"
                    >
                        <img src={imgLinkedin} alt="Logo do Linkedin" className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Integrante;