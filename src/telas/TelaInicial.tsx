import { useReducer } from 'react';
import { Image, StyleSheet, View, SafeAreaView } from 'react-native';
import {
  BotaoAdicionar,
  ModalNovaTarefa,
  Cronometro,
  ListaTarefas,
  Conselho,
} from '../componentes';
import {
  TelaInicialAcoes,
  telaInicialEstadoInicial,
  telaInicialReducer,
} from '../reducers';
import { Theme } from '../temas';

const logoImage = require('../../assets/logo.png');

export function HomeScreen() {
  const [state, dispatch] = useReducer(
    telaInicialReducer,
    telaInicialEstadoInicial
  );
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={logoImage} style={styles.logo} resizeMode="contain" />

        <Conselho />

          <View style={styles.timerContainer}>
            <Cronometro 
              enabled={TelaInicialAcoes.CronometroEstaAtivo(state)}
              opcaoComecar={() => dispatch(TelaInicialAcoes.comecarTarefa())}
              opcaoFinalizar={() => dispatch(TelaInicialAcoes.finalizarTarefa())}
              opcaoParar={() => dispatch(TelaInicialAcoes.pararTarefa())}
            />
          </View>

          <ListaTarefas indexSelecionado={state.tarefaSelecionadaIndex}
            data={state.tarefas}
            onPress={(tarefaSelecionadaIndex: number) =>
              dispatch(
                TelaInicialAcoes.TarefaSelecionadaIndex({ tarefaSelecionadaIndex })
              )
            }
          />

        <BotaoAdicionar
          onPress={() =>
            dispatch(TelaInicialAcoes.botaoModal({ modalEstaVisivel: true }))
          }
        />
        <ModalNovaTarefa
          isVisible={state.modalEstaVisivel}
          onClose={() =>
            dispatch(TelaInicialAcoes.botaoModal({ modalEstaVisivel: false }))
          }
          
          onSubmit={(label: string) =>
            dispatch(TelaInicialAcoes.criarTarefa({ tarefa: { label } }))
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Theme.colors.primary,
  },
  container: {
    flex: 1,
  },
  timerContainer: {
    paddingHorizontal: 20,
  },
  logo: {
    width: 1000,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
  },
});
