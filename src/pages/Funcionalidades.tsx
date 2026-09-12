import CardFuncionalidade from '../components/CardFuncionalidade';
import { funcionalidadesData } from '../data/funcionalidades'; // Importando os dados!

function Funcionalidades() {
    
  return (
    
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-sky-400 mb-16">
          Como a SoulMove funciona?
        </h1>
        
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