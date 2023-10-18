export interface Disciplina {
  id: string | null;
  nome: string;
  codigo: string;
  professor: string;
}

export interface ListagemDisciplina {
  id: string;
  nome: string;
  codigo: string;
  professor: {
    id: string;
    nome: string;
    sobrenome: string;
  }
}
