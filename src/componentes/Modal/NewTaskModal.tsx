import { Modal, View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput } from "react-native"
import { Theme } from "../../themes";

const imagemFechar = require('../../../assets/close.png');

export function NewTaskModal(){
  return(
    <>
      <Modal transparent>
        <SafeAreaView style = {styles.safeArea}>
          <View style = {styles.container}>

            <View style = {styles.header}>
              <Text style = {styles.headerText}>Nova Tarefa</Text>
              {/* hitSlop: acessbilidade pra fechar o botão */}
              <TouchableOpacity hitSlop={{top: 20, left:20, right:20, bottom: 20}}>
                <Image source={imagemFechar} style={styles.imageClose}  resizeMode='contain'/>
              </TouchableOpacity>
            </View>

            <View style={styles.modalContent}>
              <TextInput placeholder="ADICIONAR TAREFA" placeholderTextColor={'rgba(0, 0, 0, .5)'} style={styles.textInput}></TextInput>
            </View>

          </View>
        </SafeAreaView>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    width: '80%',
    height: 200,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    elevation: 0.5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity:0.1,
    shadowRadius:5,
  },

  safeArea:{
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .3)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    height: 50,
    width: '100%',
    backgroundColor: Theme.colors.primary,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },

  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  imageClose: {
    height: 14,
    width:14,
  },

  textInput: {
    borderBottomWidth: 1,
    paddingVertical: 10,
  },

  modalContent: {
    padding: 15,
  }
});