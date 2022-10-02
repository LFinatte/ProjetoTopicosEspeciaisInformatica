import { TelaInicialActionBotao,  TelaInicial,  TelaInicialAcoesReducer} from './types';

export function telaInicialReducer(
  state: TelaInicial,
  action: TelaInicialAcoesReducer
): TelaInicial {
  switch (action.tipo) {
    case TelaInicialActionBotao.BotaoModal:
      return { ...state, modalEstaVisivel: action.payload.modalEstaVisivel };

    case TelaInicialActionBotao.CriarTarefa:
      return {
        ...state,
        modalEstaVisivel: false,
        tarefas: [...state.tarefas, action.payload.tarefa],
      };

    case TelaInicialActionBotao.TarefaSelecionadaIndex:
      return {
        ...state,
        tarefaSelecionadaIndex: action.payload.tarefaSelecionadaIndex,
      };

    case TelaInicialActionBotao.SetStatusTarefa:
      const tarefas = [...state.tarefas];
      tarefas[state.tarefaSelecionadaIndex].status = action.payload.statusTarefa;
      return {
        ...state,
        tarefas,
      };

    default:
      return { ...state };
  }
}

export const telaInicialEstadoInicial = {
  tarefas: [],
  modalEstaVisivel: false,
};
