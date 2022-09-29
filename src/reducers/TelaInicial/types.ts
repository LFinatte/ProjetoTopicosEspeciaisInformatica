export enum TelaInicialActionBotao {
  BotaoModal = 'BOTAO_MODAL',
  CriarTarefa = 'CRIAR_TAREFA',
}

export type TarefasType = {
  isSelected?: boolean;
  label: string;
  status?: 'INICIAR' | 'EM_PROGRESSO' | 'FINALIZAR';
};

export type TelaInicial = {
  modalEstaVisivel: boolean;
  tarefas: TarefasType[];
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

export type TelaInicialAcoesReducer = BotaoModalAcao | CriarTarefaAcao;
