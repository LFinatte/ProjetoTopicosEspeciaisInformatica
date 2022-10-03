import { Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { EstadoTarefaType } from '../../reducers';


export type Props = {
  estaSelecionado?: boolean;
  label: string;
  status?: EstadoTarefaType;
  onPress: VoidFunction;
};

const imagemCheck = require('../../../assets/tiny-check.png');

export function ItemTarefa({
  estaSelecionado = false,
  label,
  status = EstadoTarefaType.Iniciar,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, estaSelecionado && styles.containerSelected]}
    >
      <Text style={styles.label}>{label}</Text>
      {status === EstadoTarefaType.EmProgresso && (
        <Text style={styles.statusText}>Em Progresso</Text>
      )}
      {status === EstadoTarefaType.Finalizar && <Image source={imagemCheck} style={styles.imagem}/>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 4,
    borderLeftWidth: 5,
    borderLeftColor: 'transparent',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  containerSelected: {
    borderLeftWidth: 5,
    borderLeftColor: '#fff',
  },
  label: {
    fontSize: 14,
    color: '#fff',
  },
  statusText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },

  imagem:{
    height: 20,
    width:20,
  }
});
