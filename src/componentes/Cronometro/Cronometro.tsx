import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { Botao } from '../Botao';

const comecar = require('../../../assets/play.png');
const pausar = require('../../../assets/pause.png');
const parar = require('../../../assets/stop.png');
const recomecar = require('../../../assets/restart.png');
const terminar = require('../../../assets/strong-check.png');

// definindo tipos dos botoes
type Props = {
  estado?:'COMECAR' | 'EM_PROGRESSO' | 'FINALIZADO';
}

export function Cronometro({ estado = 'COMECAR' }: Props){
  return(
    <View style={styles.container}>
      <Text style={styles.status}>COMEÇAR</Text>
      <Text style={styles.cronometro}>25:00</Text>
      <View style={styles.controles}>
        {/* qual botao ira aparecer */}
        {estado == 'COMECAR' && (
          <View style={{width:'80%'}}>
            <Botao variacao='light' label='START'/>        
          </View>
        )}

        {estado == 'EM_PROGRESSO' && (
          // encapsular elementos em um unico filho
          <> 
            <Botao variacao='light' icone={comecar} />
            <View style={{paddingHorizontal: 10}}>
              <Botao variacao='light' icone={pausar}/>
            </View>
          <Botao variacao='light' icone={parar}/>
         </>
        )}     
        {estado == 'FINALIZADO' &&(
          <> 
            <Botao variacao='light' icone={recomecar}/>
            <View style={{paddingHorizontal: 5}}>
              <Botao variacao='light' icone={terminar}/>
            </View>
          </>
        )}   
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 240,
    backgroundColor: 'rgba(255, 255, 255, .05)',
    borderRadius: 4,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingVertical: 20,
  },

  status: {
    fontSize:20,
    fontWeight:'bold',
    color: '#fff'
  },

  cronometro:{
    fontSize: 75,
    fontWeight: 'bold',
    color: '#fff'
  },

  controles: {
    width: '80%',
    height: 60,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

})