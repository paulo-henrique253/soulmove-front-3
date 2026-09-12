import CardFuncionalidade from '../components/CardFuncionalidade';
import TituloPagina from '../components/TituloPagina';
import { funcionalidadesData } from '../data/funcionalidades'; // Importando os dados!

function Funcionalidades() {
    
  return (
    
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-12">

        <TituloPagina texto="Como a SoulMove funciona?"/>
        
        <div className="space-y-8">
          {funcionalidadesData.map((funcionalidade, index) => (
            <CardFuncionalidade 
               key={funcionalidade.id} 
               inverterOrdem={index % 2 === 1}
               titulo={funcionalidade.titulo}
               descricao={funcionalidade.descricao}
               imagemPrincipalSrc={funcionalidade.imagemPrincipalSrc}
               imagemPrincipalAlt={funcionalidade.imagemPrincipalAlt}
               imagemSecundarioSrc={funcionalidade.imagemSecundariaSrc}
               imagemSecundarioAlt={funcionalidade.imagemSecundariaAlt}
            />
          ))}
        </div>
      </main>

    </div>
  );
}

export default Funcionalidades;