import {
  TelaInicialActionBotao,
  CriarTarefaAcao,
  CriarTarefaPayload,
  BotaoModalAcao,
  BotaoModalPayload,
} from './types';

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

export const TelaInicialAcoes = {
  botaoModal,
  criarTarefa,
};
