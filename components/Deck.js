import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Deck = (props) => {
  const { deck } = props;
  console.log({ deck });
  return (
    <View style={styles.deckContainer}>
      {typeof deck === 'string' ? (
        <View>
          <Text style={styles.cardText}>{deck}</Text>
        </View>
      ) : (
        <View style={styles.deckContainer}>
          <View>
            <Text style={styles.deckText}>{deck.title}</Text>
          </View>
          <View>
            <Text style={styles.cardText}>{deck.questions.length} cards</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  deckContainer: {
    alignItems: 'center',
    flexBasis: 120,
  },
  deckText: {
    fontSize: 24,
  },
  cardText: {
    fontSize: 18,
    color: 'gray',
  },
});

export default Deck;
