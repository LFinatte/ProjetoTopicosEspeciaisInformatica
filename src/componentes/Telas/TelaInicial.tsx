import { Image, Text, View, StyleSheet, SafeAreaView } from "react-native";
/*SafeArea = não ficar em cima icones iphone*/
import { Theme } from "../../themes";
import { CardSemTarefa, BotaoMais, ModalNovaTarefa, Botao, Cronometro, ListaTarefas } from '..';
import {useState, useReducer} from 'react'


const logo = require('../../../assets/logo.png');


export function HomeScreen(){

  // definindo estado das variaveis como falso para não exibir os componentes inicialmente
  const [modalNovaTarefaVisivel, setModalNovaTarefaVisivel] = useState(false);
  
  return (
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* logo do app */}
        <Image source={logo} style={styles.logo} resizeMode="contain"/>
        {/* 'if' de qual tela vai aparecer */}
        {false ? <CardSemTarefa/> : (
          <>
          {/* exibe cronometro */}
          <Cronometro />

          {/* passa lista de tarefas, tarefa e o status da tarefa */}
          <ListaTarefas data={[
            {
              estaAtivo: true, 
              label:'Create a project', 
              estado: 'EM_PROGRESSO'
            },
            {
              estaAtivo: false, 
              label:'Create a project', 
              estado: 'PRONTO'
            },
            {
              estaAtivo: false, 
              label:'Create a project', 
              estado: 'PRONTO'
            }
          ]}/>
          </>
        )}

        {/* quando clicar no botão mais abre o modal */}
        <BotaoMais onPress={() => setModalNovaTarefaVisivel(true) }/>

        {/*quando clicar na imagem de fechar, fecha o modal*/}
        <ModalNovaTarefa 
          eVisivel={modalNovaTarefaVisivel} 
          fechar={() => setModalNovaTarefaVisivel(false)}
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
    paddingHorizontal: 20,
  },

  logo: {
    width: 227,
    height: 46,
    alignSelf: 'center',
    marginVertical: 30,
  },
})