import IntegranteCard from "../components/IntegranteCard";
import { integrantes } from "../data/integrantes";

function Integrantes(){
  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch px-4 py-12 gap-8 max-w-7xl mx-auto">
      {integrantes.map((integrante) => (
        <IntegranteCard
          key={integrante.slug}
          nome={integrante.nome}
          slug={integrante.slug}
          rm={integrante.rm}
          turma={integrante.turma}
          github={integrante.github}
          linkedin={integrante.linkedin}
          foto={integrante.foto}
          sobre={integrante.sobre}
        />
      ))}
    </div>
  );
}

export default Integrantes;