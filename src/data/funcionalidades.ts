import layoutSmCarteira from "../assets/layout_sm_carteira.png";
import layoutSmConfiguracoes from "../assets/layout_sm_configuracoes.png";
import layoutSmCalculadora from "../assets/layout_sm_calculadora.png";
import layoutSmRotas from "../assets/layout_sm_rotas.png";
import layoutSmMissoes from "../assets/layout_sm_missoes.png";
import layoutSmComprovacao from "../assets/layout_sm_comprovacao.png";
import layoutSmBilhetagem from "../assets/layout_sm_bilhetagem.png";
import layoutSmConversao from "../assets/layout_sm_conversao.png";

export const funcionalidadesData = [
  {
    id: 1,
    titulo: "Sua jornada sustentável em um só lugar",
    descricao: "A SoulMove possui uma carteira digital integrada onde o usuário acompanha seus pontos, saldo, histórico de atividades e progresso dentro da plataforma. Os pontos acumulados em sua jornada podem ser convertidos de forma prática em saldo para o seu bilhete de transporte público.",
    imagemPrincipalSrc: layoutSmCarteira,
    imagemPrincipalAlt: "Layout da carteira da SoulMove",
    imagemSecundariaSrc: layoutSmConfiguracoes,
    imagemSecundariaAlt: "Layout das configurações da SoulMove",
  },
  {
    id: 2,
    titulo: "Veja o impacto das suas escolhas",
    descricao: "A plataforma conta com uma calculadora de pegada de carbono integrada a sistemas de rotas inteligentes, permitindo comparar diferentes formas de deslocamento e visualizar o impacto ambiental gerado por cada trajeto. A funcionalidade sugere alternativas utilizando transporte público, mostrando tempo de viagem, impacto ambiental e opções mais sustentáveis para o deslocamento.",
    imagemPrincipalSrc: layoutSmRotas,
    imagemPrincipalAlt: "Layout das rotas inteligentes da SoulMove",
    imagemSecundariaSrc: layoutSmCalculadora,
    imagemSecundariaAlt: "Layout da calculadora de carbono da SoulMove",
  },
  {
    id: 3,
    titulo: "Complete missões e gere impacto real",
    descricao: "O sistema de missões oferece desafios diários e semanais relacionados à mobilidade sustentável, incentivando o uso do transporte público. Para validar as atividades realizadas, a plataforma conta com métodos de comprovação como histórico do bilhete, QR Codes, pagamentos digitais e envio de imagens dentro dos meios de transporte.",
    imagemPrincipalSrc: layoutSmMissoes,
    imagemPrincipalAlt: "Layout das missões da SoulMove",
    imagemSecundariaSrc: layoutSmComprovacao,
    imagemSecundariaAlt: "Layout do sistema de comprovação da SoulMove",
  },
  {
    id: 5,
    titulo: "Transforme pontos em mobilidade",
    descricao: "Os pontos acumulados na SoulMove podem ser convertidos em saldo para o transporte público. O sistema facilita a recarga do seu Bilhete Único de forma prática: basta gerar o seu boleto de recarga na Loja Virtual da SPTrans, colar o código de barras no aplicativo e confirmar o pagamento com o seu saldo. Em até 1 dia útil, seu crédito estará liberado para validação em ônibus, metrôs ou trens.",
    imagemPrincipalSrc: layoutSmBilhetagem,
    imagemPrincipalAlt: "Layout da bilhetagem integrada com SPTRANS da SoulMove",
    imagemSecundariaSrc: layoutSmConversao,
    imagemSecundariaAlt: "Layout do sistema de conversão de pontos da SoulMove",
  }
];