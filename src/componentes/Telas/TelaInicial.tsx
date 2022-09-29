import {useReducer} from 'react'
/*SafeArea = não ficar em cima icones iphone*/
import { Image, View, StyleSheet, SafeAreaView } from "react-native";
import { CardSemTarefa, BotaoMais, ModalNovaTarefa, Cronometro, ListaTarefas } from '..';
import { TelaInicialActions, telaInicialEstadoInicial,telaInicialReducer } from "../../reducer";
import { Theme } from "../../themes";

const logo = require('../../../assets/logo.png');

export function HomeScreen(){

  const [state, dispatch] = useReducer(
    telaInicialReducer,
    telaInicialEstadoInicial
  );

  return (
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* logo do app */}
        <Image source={logo} style={styles.logo} resizeMode="contain"/>
        {/* 'if' de qual tela vai aparecer */}
        {false ? (
          <CardSemTarefa/>
          ) : (
          <>
          {/* exibe cronometro */}
            <View style={styles.timerContainer}>
              <Cronometro />
            </View>

          {/* passa lista de tarefas, tarefa e o status da tarefa */}
          <ListaTarefas data={state.Tarefas}/>
          </>
        )}

        {/* quando clicar no botão mais abre o modal */}
        <BotaoMais 
          onPress={() => 
            dispatch(TelaInicialActions.botaoModal({modalNovaTarefaVisivel: true}))}
        />   

        <ModalNovaTarefa
          eVisivel = {state.modalNovaTarefaVisivel}
          onClose = {()=> dispatch(TelaInicialActions.botaoModal({modalNovaTarefaVisivel: false}))}
          onSubmit={(label: string) => dispatch(TelaInicialActions.criarTarefa({task: {
            label,
            isSelected: false,
            status: 'PRONTO'},
            })
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: Theme.colors.primary,
    flex: 1,
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