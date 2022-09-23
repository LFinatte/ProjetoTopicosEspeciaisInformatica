import { Image, Text, View, StyleSheet, SafeAreaView } from "react-native";
/*SafeArea = não ficar em cima icones iphone*/
import { Theme } from "../../themes";
import { CardSemTarefa, BotaoMais, ModalNovaTarefa, Botao } from '..';
import {useState} from 'react'


const logo = require('../../../assets/logo.png');


export function HomeScreen(){

  // definindo estado das variaveis como falso para não exibir os componentes inicialmente
  const [modalNovaTarefaVisivel, setModalNovaTarefaVisivel] = useState(false);
  
  return (
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} resizeMode="contain"/>
        <CardSemTarefa/>
        <BotaoMais onPress={() => setModalNovaTarefaVisivel(true) }/>
     {/*definindo estado do modal*/}
     <ModalNovaTarefa eVisivel={modalNovaTarefaVisivel} fechar={() => setModalNovaTarefaVisivel(false)}/>   
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
    paddingVertical: 40,
    paddingHorizontal: 20,
  },

  logo: {
    width: 227,
    height: 46,
    alignSelf: 'center',
    marginBottom: 20,
  },
})