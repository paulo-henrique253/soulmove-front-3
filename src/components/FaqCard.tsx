type FaqCardProps = {
    pergunta: string,
    resposta: string,
}

function FaqCard({pergunta, resposta}: FaqCardProps) {
return(
    <div>
        <button>{pergunta}</button>
        <p>{resposta}</p>
    </div>
)
}

export default FaqCard