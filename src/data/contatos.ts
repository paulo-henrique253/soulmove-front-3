export type ContatoFormData = {
  nome: string;
  email: string;
  telefone?: string;
  mensagem: string;
};

export const contatoPadrao: ContatoFormData = {
  nome: "",
  email: "",
  telefone: "",
  mensagem: "",
};