import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Deck from './Deck';
import { gray, textGray } from '../utils/colors';
import { handleInitialData } from '../actions/index';

class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    const { navigation, decks } = this.props;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Mobile Flashcards</Text>
        {Object.values(decks).map((deck) => {
          return (
            <TouchableOpacity
              key={deck.title}
              onPress={() =>
                navigation.navigate('DeckDetails', {
                  deck: deck,
                  title: deck.title,
                })
              }>
              <Deck id={deck.id} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
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
    marginBottom: 16,
    color: textGray,
  },
});

const mapStateToProps = (decks) => ({ decks });

export default connect(mapStateToProps)(DeckList);
