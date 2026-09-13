type FaqCardProps = {
    pergunta: string,
    resposta: string,
}

function FaqCard({pergunta, resposta}: FaqCardProps) {
return(
    <div className="w-75 md:w-90 bg-linear-to-t from-indigo-500 to-sky-400 rounded-2xl p-4">
        <button className="w-full bg-white rounded-4xl px-5 py-3 font-['Momo_Trust_Display'] text-lg">{pergunta}</button>
        <p className="px-3 pt-3 text-center font-['Lexend_Deca'] text-black">{resposta}</p>
    </div>
)
}

export default FaqCard