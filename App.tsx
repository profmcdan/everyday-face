import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hello from './components/Hello';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>React Everyday!</Text>
        <Hello  name="Daniel" enthusiasmLevel={3}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
