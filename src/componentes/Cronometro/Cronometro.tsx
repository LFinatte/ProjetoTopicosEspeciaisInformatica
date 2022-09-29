import { View, Text, StyleSheet } from 'react-native';
import { Botao } from '../Botoes';

const imagemComecar = require('../../../assets/play.png');
const imagemPausar = require('../../../assets/pause.png');
const imagemParar = require('../../../assets/stop.png');
const imagemRecomecar = require('../../../assets/restart.png');
const checkNegrito = require('../../../assets/strong-check.png');

type Props = {
  step?: 'COMECAR' | 'EM_PROGRESSO' | 'FINALIZAR';
};

export function Timer({ step = 'COMECAR' }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>Ready</Text>
      <Text style={styles.timerText}>24:59</Text>
      <View style={styles.controls}>
        {step === 'COMECAR' && (
          <View style={{ width: '65%' }}>
            <Botao variant="light" label="COMECAR" />
          </View>
        )}
        {step === 'EM_PROGRESSO' && (
          <>
            <Botao variant="light" icon={imagemComecar} />
            <View style={{ paddingHorizontal: 10 }}>
              <Botao variant="light" icon={imagemPausar} />
            </View>
            <Botao variant="light" icon={imagemParar} />
          </>
        )}
        {step === 'FINALIZAR' && (
          <>
            <Botao variant="light" icon={imagemRecomecar} />
            <View style={{ paddingLeft: 5 }}>
              <Botao variant="light" icon={checkNegrito} />
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
