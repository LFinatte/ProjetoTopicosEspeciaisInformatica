import { useEffect, useMemo, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Botao } from '../Botoes';

const imagemPlay = require('../../../assets/play.png');
const imagemPause = require('../../../assets/pause.png');
const imagemParar = require('../../../assets/stop.png');
const imagemRecomecar = require('../../../assets/restart.png');
const strongCheckImage = require('../../../assets/strong-check.png');

enum CronometroStatus {
  Parar = 'PARAR',
  EmProgresso = 'EM_PROGRESSO',
  Finalizar = 'FINALIZAR',
}

const CRONOMETRO_SEGUNDOS = 5;

type Props = {
  enabled?: boolean;
  opcaoComecar?: VoidFunction;
  opcaoFinalizar?: VoidFunction;
  opcaoParar?: VoidFunction;
};

export function Cronometro({
  enabled = false,
  opcaoComecar,
  opcaoFinalizar,
  opcaoParar,

}: Props) {
  const [estaParado, setParado] = useState(CronometroStatus.Parar);
  const [estaRodando, setRodando] = useState(false);
  const [segundosCronometro, setSegundosCronometro] = useState(CRONOMETRO_SEGUNDOS);

  function comecar() {
    if (opcaoComecar) opcaoComecar();
    setRodando(true);
    setSegundosCronometro(CRONOMETRO_SEGUNDOS);
    setParado(CronometroStatus.EmProgresso);
  }

  function rodando() {
    setRodando(true);
    setParado(CronometroStatus.EmProgresso);
  }

  function pausado() {
    setRodando(false);
    setParado(CronometroStatus.EmProgresso);
  }

  function parado() {
    if (opcaoParar) opcaoParar();
    setRodando(false);
    setSegundosCronometro(CRONOMETRO_SEGUNDOS);
    setParado(CronometroStatus.Parar);
  }

  function recomecar() {
    setRodando(true);
    setSegundosCronometro(CRONOMETRO_SEGUNDOS);
    setParado(CronometroStatus.EmProgresso);
  }

  function finalizar() {
    setRodando(false);
    setParado(CronometroStatus.Finalizar);
    //TODO: finalizar
  }

  function terminar() {
    if (opcaoFinalizar) opcaoFinalizar();
    setRodando(false);
    setSegundosCronometro(CRONOMETRO_SEGUNDOS);
    setParado(CronometroStatus.Parar);
  }

  useEffect(() => {
    if (!estaRodando) return;
    const cronometro = setInterval(() => {
      const segundos = segundosCronometro - 1;
      setSegundosCronometro(segundos);
      if (segundos === 0) {
        finalizar();
        clearInterval(cronometro);
      }
    }, 1000);
    return () => clearInterval(cronometro);
  }, [estaRodando, segundosCronometro]);

  const aux = segundosCronometro % 3600;
  const minutos = String(Math.floor(aux / 60)).padStart(2, '0');
  const segundos = String(Math.ceil(aux % 60)).padStart(2, '0');

  const cronometroStatus = useMemo(() => {
    if (estaParado === CronometroStatus.Parar) {
      return 'Iniciar';
    }
    if (estaParado === CronometroStatus.EmProgresso) {
      if (!estaRodando && segundosCronometro > 0) {
        return 'Pausar';
      }
      return 'Em Progresso';
    }
    if (estaParado === CronometroStatus.Finalizar) {
      return 'Finalizar!';
    }
  }, [estaParado, estaRodando, segundosCronometro]);

  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>{cronometroStatus}</Text>
      <Text style={styles.timerText}>
        {minutos}:{segundosCronometro}
      </Text>
      <View style={styles.controls}>
        {estaParado === CronometroStatus.Parar && (
          <View style={{ width: '65%' }}>
            <Botao
              disabled={!enabled}
              variant="light"
              label="START"
              onPress={comecar}
            />
          </View>
        )}
        {estaParado === CronometroStatus.EmProgresso && (
          <>
            <Botao variant="light" icon={imagemPlay} onPress={rodando} />
            <View style={{ paddingHorizontal: 10 }}>
              <Botao variant="light" icon={imagemPause} onPress={pausado} />
            </View>
            <Botao variant="light" icon={imagemParar} onPress={parado} />
          </>
        )}
        {estaParado === CronometroStatus.Finalizar && (
          <>
            <Botao variant="light" icon={imagemRecomecar} onPress={recomecar} />
            <View style={{ paddingLeft: 5 }}>
              <Botao
                variant="light"
                icon={strongCheckImage}
                onPress={terminar}
              />
            </View>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 240,
    paddingVertical: 20,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 4,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statusText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  timerText: {
    fontSize: 75,
    fontWeight: 'bold',
    color: '#fff',
  },
  controls: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});