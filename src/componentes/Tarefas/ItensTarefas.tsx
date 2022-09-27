import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";

//define informacoes da tarefa
export type Props = {
  label: string;
  estado?: 'PRONTO' | 'EM_PROGRESSO' | 'FINALIZADO';
  estaAtivo?: boolean;
};

const check = require('../../../assets/tiny-check.png');
//define status inicial 
export function ItensTarefas ({
  estaAtivo = false, 
  label, 
  estado = 'PRONTO',
}: Props){
  return (
    <TouchableOpacity 
    onPress={()=>{}}
    style={[styles.container, estaAtivo && styles.containerAtivo]}>
      <Text style={styles.label}>{label}</Text>
      {/* design dependendo do status */}
      {estado == 'EM_PROGRESSO' && (<Text style={styles.status}>Em Progresso</Text>)}
      {estado == 'FINALIZADO' && <Image style={{height: 20, width: 20}} resizeMode='contain' source={check}></Image>} 
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create ({
  container:{
    backgroundColor: 'rgba(0, 0, 0, .15)',
    borderRadius: 4,
    borderLeftWidth: 5,
    borderLeftColor: 'transparent',
    padding: 20,
    flexDirection: "row",
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  containerAtivo:{
    borderLeftWidth: 5,
    borderLeftColor: '#fffS',
  },

  label:{
    color: '#fff',
    fontSize: 14,
  },

  status:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  }
})