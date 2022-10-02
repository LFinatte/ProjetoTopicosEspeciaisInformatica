import { StyleSheet, FlatList } from 'react-native';
import { ItemTarefa, Props as ItemTarefaPropriedades } from './ItemTarefa';

type Props = {
  indexSelecionado?: number;
  data: Omit<ItemTarefaPropriedades, 'onPress'>[];
  onPress: (index: number) => void;
};

export function ListaTarefas({ indexSelecionado, data, onPress }: Props) {
  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.container}
      renderItem={({ item, index }) => (
        <ItemTarefa
          {...item}
          estaSelecionado={index === indexSelecionado}
          onPress={() => onPress(index)}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
