import { View, StyleSheet, Text, Image } from "react-native";
import React from 'react';

const imgSemTarefa = require('../../../assets/lampada-eletrica.png');

export function CardSemTarefa() {
  return(
    <>
      <View style={styles.container}>
          <Image source={imgSemTarefa} resizeMode="contain" style={styles.image}/>
          <Text style={styles.text}>SEM TAREFAS</Text>
      </View>

      <Text style={styles.smallText}>VOCÊ ESTÁ LIVRE PARA APROVEITAR SEU DIA!</Text>
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
    width: '100%',
  height: 200,
  },

  text: {
    color: '#fff',
    fontSize: 20,
  },

  smallText: {
    color: '#fff',
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
    paddingVertical: 40,
  }

});