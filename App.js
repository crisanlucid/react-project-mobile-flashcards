import React from 'react';
import { StyleSheet, View } from 'react-native';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import DeckDetails from './components/DeckDetails';
import AddCard from './components/AddCard';
import Question from './components/Question';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <DeckList /> */}
      {/* <AddDeck /> */}
      {/* <DeckDetails /> */}
      {/* <AddCard /> */}
      <Question />
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
