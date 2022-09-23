import { TouchableOpacity, StyleSheet, Image } from "react-native"
import { Theme } from "../../themes"

const imagemAdicionar = require('../../../assets/plus.png')

type Props = {
  onPress: VoidFunction;
}

export function BotaoMais({onPress}: Props){
  return(
    <TouchableOpacity activeOpacity={0.5} style={styles.container} onPress={onPress}>
      <Image source={imagemAdicionar} style={styles.image} resizeMode="contain"/>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create ({
  container: {
    backgroundColor: Theme.colors.primaryDark,
    borderRadius: 47,
    width: 47,
    height: 47,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 0.5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity:0.1,
    position: 'absolute',
    right: 30,
    bottom: 30,
  },

  image: {
    width: 14,
    height:14,
  }
})