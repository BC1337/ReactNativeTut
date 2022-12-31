import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    <View style={styles.button}>
      <Button 
       onPress={() => {
        alert('You tapped the button!');
      }}
       title="Tap Me"
      />
    </View>
    </View>
    <View style={styles.second}>
      <Text style={styles.test}> Lmao new mobile website is LIT fam</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
  },
  second:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  test: {
    color: 'white',
    fontSize: 20,
  },
});
