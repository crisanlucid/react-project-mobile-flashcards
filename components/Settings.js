import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { gray, white, red, textGray } from '../utils/colors';
import { connect } from 'react-redux';
import TouchButton from './TouchButton';
import { handleResetDecks } from '../actions';

class Settings extends Component {
  handleResetDecks = () => {
    const { navigation, dispatch } = this.props;
    dispatch(handleResetDecks());
    navigation.goBack();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Settings </Text>
        <View style={styles.block}>
          <View style={styles.blockContainer}>
            <Text style={styles.blockText}>
              Will reset the data back to the original data set.
            </Text>
            <View style={{ height: 20 }} />
            <TouchButton
              css={{ btn: { backgroundColor: red, borderColor: white } }}
              onPress={this.handleResetDecks}>
              Reset Data
            </TouchButton>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    backgroundColor: gray,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 15,
    color: textGray,
  },
  block: {
    marginBottom: 20,
  },
  blockContainer: {
    borderWidth: 1,
    borderColor: '#aaa',
    backgroundColor: white,
    borderRadius: 5,
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  blockText: {
    fontSize: 18,
    color: textGray,
    textAlign: 'center',
  },
});

export default connect()(Settings);
