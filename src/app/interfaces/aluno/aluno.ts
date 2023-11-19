export interface ListagemAlunos {
  id: string;
  nome: string;
  sobrenome: string;
  matricula: string;
  aluno: {
    nome: string;
    sobrenome: string;
    matricula: string;
  }
}
