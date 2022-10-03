//definindo tipo de cada funcao
export enum TelaInicialActionBotao {
  BotaoModal = 'BOTAO_MODAL',
  CriarTarefa = 'CRIAR_TAREFA',
  TarefaSelecionadaIndex = 'TAREFA_SELECIONADA_INDEX',
  SetStatusTarefa = 'SET_STATUS_TAREFA',
}

//estados da taefa
export enum EstadoTarefaType {
  Iniciar = 'INICIAR',
  EmProgresso = 'EM_PROGRESSO',
  Finalizar = 'FINALIZAR',
}

//selecionar tarefa
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

//criar uma nova tarefa
export type CriarTarefaPayload = {
  tarefa: TarefasType;
};

export type CriarTarefaAcao = {
  tipo: TelaInicialActionBotao.CriarTarefa;
  payload: CriarTarefaPayload;
};

//definir qual tarefa esta selecionada
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

//exportando açoes definidas
export type TelaInicialAcoesReducer = BotaoModalAcao | CriarTarefaAcao | TarefaSelecionadaIndexAcao
| SetStatusTarefaAcao;
