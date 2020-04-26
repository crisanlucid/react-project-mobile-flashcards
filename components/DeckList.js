import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Deck from './Deck';
import { gray } from '../utils/colors';

const DeckList = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mobile Flashcards</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DeckDetails', { title: 'title_1' })
        }>
        <Deck />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DeckDetails', { title: 'title_1' })
        }>
        <Deck />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DeckDetails', { title: 'title_1' })
        }>
        <Deck />
      </TouchableOpacity>
    </View>
  );
};

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
    marginBottom: 16,
    color: 'black',
  },
});

export default DeckList;
