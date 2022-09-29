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

    default:
      return { ...state };
  }
}

export const telaInicialEstadoInicial = {
  tarefas: [],
  modalEstaVisivel: false,
};
