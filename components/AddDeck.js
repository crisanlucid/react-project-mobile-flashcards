import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import TouchButton from './TouchButton';
import { connect } from 'react-redux';
import { handleAddDeck } from '../actions';
import Constants from 'expo-constants';
import { textGray, white, blue, gray } from '../utils/colors';

class AddDeck extends Component {
  state = {
    text: '',
  };
  handleChange = (text) => {
    this.setState({ text });
  };
  handleCreateDeckClick = () => {
    const { dispatch, navigation } = this.props;

    dispatch(handleAddDeck(this.state.text));
    this.setState(() => ({ text: '' }));
    navigation.goBack();
  };
  render() {
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ height: Constants.statusBarHeight }} />
        <View style={styles.block}>
          <Text style={styles.title}>Title of the deck</Text>
        </View>
        <View style={styles.block}>
          <TextInput
            autoFocus={true}
            style={styles.input}
            value={text}
            onChangeText={this.handleChange}
          />
        </View>
        <TouchButton
          css={{ btn: { backgroundColor: blue, borderColor: white } }}
          onPress={this.handleCreateDeckClick}
          disabled={text.length < 1}>
          Create Deck
        </TouchButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    backgroundColor: gray,
  },
  block: {
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: textGray,
  },
  input: {
    borderWidth: 1,
    borderColor: textGray,
    backgroundColor: white,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
    height: 40,
    textAlign: 'center',
  },
});

export default connect()(AddDeck);
