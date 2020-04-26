import React from 'react';
import { StyleSheet, View } from 'react-native';
import DeckDetails from './components/DeckDetails';

const App = () => {
  return (
    <View style={styles.container}>
      <DeckDetails />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dde',
    paddingTop: 50,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 2,
    borderColor: 'orange',
  },
});

export default App;
