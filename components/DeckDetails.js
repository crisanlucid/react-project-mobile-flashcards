import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Deck from './Deck';
import TouchButton from './TouchButton';
import TextButton from './TextButton';
import { connect } from 'react-redux';
import { removeDeck } from '../actions/index';
import { formatId } from '../utils/helpers';

class DeckDetails extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.deck !== undefined;
  }

  handleDelete = (id) => {
    //todo: dispatch remove Deck
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    const cardCss = {
      btn: { backgroundColor: 'white' },
      text: { color: 'black' },
    };

    const quizCss = {
      btn: { backgroundColor: 'black' },
      text: { color: 'white' },
    };

    const { navigation, deck } = this.props;

    return (
      <View style={styles.container}>
        <Deck deck={deck} />
        <View>
          <TouchButton
            css={cardCss}
            onPress={() =>
              navigation.navigate('AddCard', { title: deck.title })
            }>
            Add Card
          </TouchButton>
          <TouchButton
            css={quizCss}
            onPress={() =>
              navigation.navigate('Question', {
                isEmpty: 1,
                score: 0,
                title: 'Quiz',
              })
            }>
            Start Quiz
          </TouchButton>
          <TextButton
            css={{ color: 'red' }}
            onPress={() => this.handleDelete(deck.id)}>
            Delete Deck
          </TextButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: 'green',
  },
});

const mapStateToProps = (state, { route }) => {
  const title = route.params['title'] || 'No title';
  const deck = state[formatId(title)];

  return {
    deck,
  };
};

export default connect(mapStateToProps)(DeckDetails);
