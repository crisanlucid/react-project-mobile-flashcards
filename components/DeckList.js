import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Deck from './Deck';
import { gray, textGray } from '../utils/colors';
import { handleInitialData } from '../actions';

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
        {Object.values(decks).map((deck, index) => {
          return (
            <TouchableOpacity
              key={`${deck.id}_${index}`}
              onPress={() =>
                navigation.navigate('DeckDetails', {
                  title: deck.title,
                })
              }>
              <Deck id={deck.id} />
            </TouchableOpacity>
          );
        })}
        {Object.values(decks).length === 0 && (
          <TouchableOpacity onPress={() => navigation.navigate('AddDeck')}>
            <Text style={styles.subTitle}>No Deck</Text>
          </TouchableOpacity>
        )}
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
  subTitle: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 15,
    color: textGray,
  },
});

const mapStateToProps = (decks) => ({ decks });

export default connect(mapStateToProps)(DeckList);
