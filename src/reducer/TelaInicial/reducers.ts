import { TelaInicialActionsBotao, TelaInicialType, TelaInicialActionsType } from "./types";

export function telaInicialReducer(state: TelaInicialType, action: TelaInicialActionsType) : TelaInicialType{

    switch (action.type) {
      case TelaInicialActionsBotao.BotaoModal:
        return{...state, modalNovaTarefaVisivel: action.payload.modalNovaTarefaVisivel};

      case TelaInicialActionsBotao.CriarTarefa:
        return {
          ...state,
          modalNovaTarefaVisivel: false,
          tasks: [...state.tarefas, action.payload.tarefas],
      };

      default:
        return {...state};
    }
}

export const telaInicialEstadoInicial = {
  eVisivel:false,
  tarefas: [],

};