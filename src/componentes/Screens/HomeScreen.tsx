import { Image, Text, View, StyleSheet, SafeAreaView } from "react-native";
/*SafeArea = não ficar em cima icones iphone*/
import { Theme } from "../../themes";
import { NoTasksCard, FabButton, NewTaskModal } from '..';


const logo = require('../../../assets/logo.png');


export function HomeScreen(){
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} resizeMode="contain"/>
        <NoTasksCard/>
        <FabButton/>
        <NewTaskModal/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: Theme.colors.primary,
    flex: 1,
  },

  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },

  logo: {
    width: 227,
    height: 46,
    alignSelf: 'center',
    marginBottom: 20,
  },
})