export interface ListagemAlunos {
  id: string;
  nome: string;
  aluno: {
    nome: string;
    sobrenome: string;
    matricula: string;
  }
}
