import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { Theme } from '../../themes'

// tipando a propriedade
type Props = {
  variacao?:'primary' | 'light';
  label?: string;
  icone?: any;
}

export function Botao({variacao, label, icone}:Props){
  //ter um botao de cada cor, any para aceitar mais de uma propriedade 
  let TouchableOpacityStyles: any = {backgroundColor:Theme.colors.primary};
  let textStyles = {color:'#fff'};

  if (variacao == 'light'){
    TouchableOpacityStyles = { 
    backgroundColor: '#fff',  
    elevation: 0.5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity:0.1,
    shadowRadius:5, };
    textStyles = {color: Theme.colors.primaryDark}
  }

  return(
    <TouchableOpacity style={[styles.button, TouchableOpacityStyles]}>
      {!!label && <Text style={[styles.text, textStyles]}>{label}</Text>}
      {!!icone && <Image source={icone} resizeMode='contain' style={styles.icone}/>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create ({
  
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 4,
  },

  text: {
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#fff',
  },

  icone: {
    height: 20,
    width: 20,
  }
  
})