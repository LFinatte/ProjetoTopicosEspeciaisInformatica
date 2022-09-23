import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Theme } from '../../themes'

// tipando a propriedade
type Props = {
  label: string;
}

export function Botao({label}:Props){
  return(
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create ({
  button: {
    backgroundColor: Theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 4,
  },

  text: {
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#fff',
  }
})