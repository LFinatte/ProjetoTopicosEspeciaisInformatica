import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Theme } from '../../temas';

const plus = require('../../../assets/plus.png');

//define função para quando pressionar o botao
type Props = {
  onPress: VoidFunction;
};

//botao adicionar tarefa
export function BotaoAdicionar({ onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={plus} style={styles.image} resizeMode="contain" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.primaryDark,
    borderRadius: 47,
    width: 47,
    height: 47,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 0.5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    position: 'absolute',
    right: 40,
    bottom: 40,
  },
  image: {
    width: 14,
    height: 14,
  },
});
