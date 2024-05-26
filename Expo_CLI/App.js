import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={textFont.fonts}>My name is Owusu Vincent</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const textFont = StyleSheet.create({
  fonts: {
    fontSize: 24,
    //fontWeight: 'bold',
    color: '#000000'
  }
})