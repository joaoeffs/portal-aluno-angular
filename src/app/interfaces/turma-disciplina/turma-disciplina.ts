export interface TurmaDisciplina {
  id: string | null;
  turmaId: string;
  disciplinaId: string;
}

export interface ListagemTurmaDisciplina {
  id: string;
  turma: {
    turmaId: string;
    nome: string;
    nomeAbreviado: string;
    anoLetivo: string;
  }
  disciplina: {
    disciplinaId: string;
    nome: string;
    codigo: string;
    professor: {
      professorId: string;
      nome: string;
    }
  }
}
