export enum TelaInicialActionsBotao {
  BotaoModal = 'BOTAO_MODAL',
  CriarTarefa = 'CRIAR_TAREFA',
};

export type TarefasType = {
  label: string;
  estado?: 'PRONTO' | 'EM_PROGRESSO' | 'FINALIZADO';
  estaAtivo?: boolean;
};

export type TelaInicialType = {
  modalNovaTarefaVisivel: boolean;
  tarefas: TarefasType[];
};

//define tipo botao
export type BotaoModalPayload = Pick<TelaInicialType, 'modalNovaTarefaVisivel'>;

//define ação do botao
export type BotaoModalActions = {
  type: TelaInicialActionsBotao.BotaoModal,
  payload: BotaoModalPayload ;
}

export type ICreateTaskPayload = {
  task: TarefasType;
};

export type ICreateTaskAction = {
  type: TelaInicialActionsBotao.CriarTarefa;
  payload: ICreateTaskPayload;
};

//acoes que o botao faz na tela inicial
export type TelaInicialActionsType = BotaoModalActions;