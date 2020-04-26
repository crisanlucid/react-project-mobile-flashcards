import React from 'react';
import { StyleSheet, View } from 'react-native';
import AddDeck from './components/AddDeck';

const App = () => {
  return (
    <View style={styles.container}>
      <AddDeck />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50,
  },
});

export default App;
