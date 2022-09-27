import { View, StyleSheet, FlatList } from "react-native";
import { ItensTarefas, Props as ItensTarefasProps  } from "./ItensTarefas";

type Props = {
  data: ItensTarefasProps[]
}

export function ListaTarefas ({data}: Props){
  return (
    <FlatList 
    // a partir das tarefas vai renderizar a lista
      data={data}
      contentContainerStyle={styles.container} 
      // passando tudo que está no data definido na lista de tarefas da Tela inicial
      renderItem={({ item }) => <ItensTarefas {...item} />} 
    />
  );
}

const styles = StyleSheet.create ({
  container:{
    paddingVertical: 20,
  }
});