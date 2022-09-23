import { View, StyleSheet, Text, Image } from "react-native";

const check = require('../../../assets/big-check.png');

console.log(check);
export function NoTasksCard() {
  return(
    <>
      <View style={styles.container}>
          <Image source={check} style={styles.image}/>
          <Text style={styles.text}>Sem Tarefas</Text>
      </View>

      <Text style={styles.smallText}>Você está livre para aproveitar seu dia!</Text>
    </>
  );
}

const styles = StyleSheet.create({
   container: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 4,
  },
  
  image: {
    marginVertical: 10,
  },

  text: {
    color: '#fff',
    fontSize: 20,
  },

  smallText: {
    width: 150,
    color: '#fff',
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
    paddingVertical: 20,
  }

});