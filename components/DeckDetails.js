import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Deck from './Deck';
import TouchButton from './TouchButton';
import TextButton from './TextButton';

const DeckDetails = (props) => {
  const cardCss = {
    btn: { backgroundColor: 'white' },
    text: { color: 'black' },
  };

  const quizCss = {
    btn: { backgroundColor: 'black' },
    text: { color: 'white' },
  };

  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Deck />
      <View>
        <TouchButton
          css={cardCss}
          onPress={() => navigation.navigate('AddCard')}>
          Add Card
        </TouchButton>
        <TouchButton
          css={quizCss}
          onPress={() =>
            navigation.navigate('Question', {
              isEmpty: 1,
              score: 0,
            })
          }>
          Start Quiz
        </TouchButton>
        <TextButton
          css={{ color: 'red' }}
          onPress={() => console.log('deck deleted')}>
          Delete Deck
        </TextButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: 'green',
  },
});

export default DeckDetails;
