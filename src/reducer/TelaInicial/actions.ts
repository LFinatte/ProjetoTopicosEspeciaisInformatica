import { BotaoModalPayload, TelaInicialActionsBotao, BotaoModalActions, CriarTarefaAction,
  CriarTarefaPayload } from "./types";

function botaoModal(payload: BotaoModalPayload) : BotaoModalActions {
  return {
    type: TelaInicialActionsBotao.BotaoModal,
    payload,
  };
}

function criarTarefa(payload: CriarTarefaPayload): CriarTarefaAction {
  return {
    type: TelaInicialActionsBotao.CriarTarefa,
    payload,
  };
}

export const TelaInicialActions = {
  botaoModal,
  criarTarefa,
};
            