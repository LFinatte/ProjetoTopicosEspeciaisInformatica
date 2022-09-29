import { Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

export type Props = {
  isSelected?: boolean;
  label: string;
  status?: 'INICIAR' | 'EM_PROGRESSO' | 'FINALIZAR';
};

const imagemCheck = require('../../../assets/tiny-check.png');

export function ItemTarefa({
  isSelected = false,
  label,
  status = 'INICIAR',
}: Props) {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={[styles.container, isSelected && styles.containerSelected]}
    >
      <Text style={styles.label}>{label}</Text>
      {status === 'EM_PROGRESSO' && (
        <Text style={styles.statusText}>In progress</Text>
      )}
      {status === 'FINALIZAR' && <Image source={imagemCheck} />}
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
});
