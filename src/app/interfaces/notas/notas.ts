export interface Notas {
  id: string | null;
  n1: string;
  n2: string;
  n3: string;
  alunoDisciplina: string | null;
}

export interface ListagemNotas {
  id: string;
  n1: string;
  n2: string;
  n3: string;
  media: string;
  situacao: string;
  notaId: string;
  alunoId: string;
  nome: string;
  sobrenome: string;
  matricula: string;


}
