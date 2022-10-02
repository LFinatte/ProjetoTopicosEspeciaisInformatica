export enum TelaInicialActionBotao {
  BotaoModal = 'BOTAO_MODAL',
  CriarTarefa = 'CRIAR_TAREFA',
  TarefaSelecionadaIndex = 'TAREFA_SELECIONADA_INDEX',
  SetStatusTarefa = 'SET_STATUS_TAREFA',
}

export enum EstadoTarefaType {
  Iniciar = 'INICIAR',
  EmProgresso = 'EM_PROGRESSO',
  Finalizar = 'FINALIZAR',
}

export type TarefasType = {
  isSelected?: boolean;
  label: string;
  status?: EstadoTarefaType;
};

export type TelaInicial = {
  modalEstaVisivel: boolean;
  tarefas: TarefasType[];
  tarefaSelecionadaIndex?: number;
};

export type BotaoModalPayload = Pick<TelaInicial, 'modalEstaVisivel'>;

export type BotaoModalAcao = {
  tipo: TelaInicialActionBotao.BotaoModal;
  payload: BotaoModalPayload;
};

export type CriarTarefaPayload = {
  tarefa: TarefasType;
};

export type CriarTarefaAcao = {
  tipo: TelaInicialActionBotao.CriarTarefa;
  payload: CriarTarefaPayload;
};

export type TarefaSelecionadaIndexPayload = {
  tarefaSelecionadaIndex: number;
};

export type TarefaSelecionadaIndexAcao = {
  tipo: TelaInicialActionBotao.TarefaSelecionadaIndex;
  payload: TarefaSelecionadaIndexPayload;
};

export type SetStatusTarefaPayload = {
  statusTarefa: EstadoTarefaType;
};

export type SetStatusTarefaAcao = {
  tipo: TelaInicialActionBotao.SetStatusTarefa;
  payload: SetStatusTarefaPayload;
};

export type TelaInicialAcoesReducer = BotaoModalAcao | CriarTarefaAcao | TarefaSelecionadaIndexAcao
| SetStatusTarefaAcao;
