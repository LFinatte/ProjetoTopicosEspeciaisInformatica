import { StyleSheet, FlatList } from 'react-native';
import { ItemTarefa, Props as ItemTarefaPropriedades } from './ItemTarefa';

type Props = {
  data: ItemTarefaPropriedades[];
};

export function ListaTarefas({ data }: Props) {
  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => <ItemTarefa {...item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
