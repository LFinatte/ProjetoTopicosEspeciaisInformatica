import { TelaInicialActionBotao,  TelaInicial,  TelaInicialAcoesReducer} from './types';

export function telaInicialReducer(
  state: TelaInicial,
  action: TelaInicialAcoesReducer
): TelaInicial {
  switch (action.tipo) {
    //se o botao adicionar for clicado
    case TelaInicialActionBotao.BotaoModal:
      return { ...state, modalEstaVisivel: action.payload.modalEstaVisivel };

    //se for criada uma nova tarefa
    case TelaInicialActionBotao.CriarTarefa:
      return {
        ...state,
        modalEstaVisivel: false,
        tarefas: [...state.tarefas, action.payload.tarefa],
      };
    
    //se alguma tarefa for selecionada
    case TelaInicialActionBotao.TarefaSelecionadaIndex:
      return {
        ...state,
        tarefaSelecionadaIndex: action.payload.tarefaSelecionadaIndex,
      };

    // quando mudar status da tarefa
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
