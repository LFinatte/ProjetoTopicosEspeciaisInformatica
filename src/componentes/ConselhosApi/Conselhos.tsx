import {Text, StyleSheet} from "react-native";
import axios from "axios";


export function Conselho(){
    let resultado = `Seja bem vindo`;

    conselho()

    return <Text style={styles.conselho} >{resultado}</Text>

    function conselho() {
        axios.get('https://api.adviceslip.com/advice').then(it => {
            resultado = it.data.slip.advice;

            document.getElementsByClassName("css-text-1rynq56").item(0).innerHTML = resultado
        })
    }
}

const styles = StyleSheet.create({
  conselho:{
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderColor: '#fff',
    borderWidth: 1,
    margin: 20,
  },
})