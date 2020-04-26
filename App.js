import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import AddDeck from './components/AddDeck';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AddDeck />
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
