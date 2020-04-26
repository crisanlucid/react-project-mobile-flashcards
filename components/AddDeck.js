import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import TouchButton from './TouchButton';

export class AddDeck extends Component {
  state = {
    text: '',
  };
  handleChange = (text) => {
    this.setState({ text });
  };
  render() {
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.block}>
          <Text style={styles.title}>Title of the deck</Text>
        </View>
        <View style={styles.block}>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={this.handleChange}
          />
        </View>
        <TouchButton
          btnStyle={{ backgroundColor: 'gray' }}
          onPress={() => console.log('deck created')}>
          Create Deck
        </TouchButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { padding: 20, width: '100%' },
  block: {
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
    height: 40,
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 200,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 5,
    justifyContent: `center`,
    alignItems: `center`,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default AddDeck;
