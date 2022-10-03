import {
  TelaInicialActionBotao,
  CriarTarefaAcao,
  CriarTarefaPayload,
  TelaInicial,
  BotaoModalAcao,
  BotaoModalPayload,
  TarefaSelecionadaIndexAcao,
  TarefaSelecionadaIndexPayload,
  SetStatusTarefaPayload,
  SetStatusTarefaAcao,
  EstadoTarefaType,
} from './types';

//carregar modal quando clicar no botao
function botaoModal(payload: BotaoModalPayload): BotaoModalAcao {
  return {
    tipo: TelaInicialActionBotao.BotaoModal,
    payload,
  };
}

function criarTarefa(payload: CriarTarefaPayload): CriarTarefaAcao {
  return {
    tipo: TelaInicialActionBotao.CriarTarefa,
    payload,
  };
}

//recuperando index de cada tarefa 
function TarefaSelecionadaIndex(
  payload: TarefaSelecionadaIndexPayload
): TarefaSelecionadaIndexAcao {
  return {
    tipo: TelaInicialActionBotao.TarefaSelecionadaIndex,
    payload,
  };
}

//desativando tarefa depois de finalizada
function CronometroEstaAtivo(state: TelaInicial): boolean {
  return (
    state.tarefaSelecionadaIndex >= 0 &&
    state.tarefas[state.tarefaSelecionadaIndex].status !== EstadoTarefaType.Finalizar
  );
}

//definindo status atual da tarefa
function SetStatusTarefa(payload: SetStatusTarefaPayload): SetStatusTarefaAcao {
  return {
    tipo: TelaInicialActionBotao.SetStatusTarefa,
    payload,
  };
}

//status possiveis para tarefa
function comecarTarefa() {
  return SetStatusTarefa({ statusTarefa: EstadoTarefaType.EmProgresso });
}

function finalizarTarefa() {
  return SetStatusTarefa({ statusTarefa: EstadoTarefaType.Finalizar });
}

function pararTarefa() {
  return SetStatusTarefa({ statusTarefa: EstadoTarefaType.Iniciar });
}

export const TelaInicialAcoes = {
  botaoModal,
  criarTarefa,
  TarefaSelecionadaIndex,
  CronometroEstaAtivo,
  SetStatusTarefa,
  comecarTarefa,
  finalizarTarefa,
  pararTarefa,
};

