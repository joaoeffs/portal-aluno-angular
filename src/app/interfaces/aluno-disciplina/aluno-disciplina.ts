export interface AlunoDisciplina {
  id: string | null;
  disciplina: string | null;
  aluno: string | null;
}

export interface AlunoDisciplinaForm {
  id: string | null;
  alunoDisciplina: {
    id: string;
    disciplina: string | null;
    aluno: {
      id: string
    }
  }
}
