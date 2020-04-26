import React from 'react';
import { Text, View } from 'react-native';
import Deck from './Deck';

const DeckList = () => {
  return (
    <View>
      <Deck />
      <Deck />
      <Deck />
    </View>
  );
};

export default DeckList;
