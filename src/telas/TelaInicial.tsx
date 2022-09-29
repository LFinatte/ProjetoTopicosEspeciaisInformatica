import { useReducer } from 'react';
import { Image, StyleSheet, View, SafeAreaView } from 'react-native';
import {
  BotaoAdicionar,
  ModalNovaTarefa,
  CardSemTarefas,
  Timer,
  ListaTarefas,
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
        {false ? (
          <CardSemTarefas />
        ) : (
          <>
            <View style={styles.timerContainer}>
              <Timer />
            </View>
            <ListaTarefas data={state.tarefas} />
          </>
        )}
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
            dispatch(
              TelaInicialAcoes.criarTarefa({
                tarefa: {
                  label,
                  isSelected: false,
                  status: 'INICIAR',
                },
              })
            )
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
    width: 227,
    height: 46,
    alignSelf: 'center',
    marginVertical: 30,
  },
});
