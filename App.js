import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import DeckList from './components/DeckList';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DeckList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50,
  },
});
