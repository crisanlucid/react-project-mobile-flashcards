import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Deck from './Deck';
import TouchButton from './TouchButton';
import TextButton from './TextButtons';
import { connect } from 'react-redux';
import { handleRemoveCard } from '../actions';
import { formatId } from '../utils/helpers';
import { blue, white, darkGray } from '../utils/colors';

class DeckDetails extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.deck !== undefined;
  }

  handleDelete = (id) => {
    const { navigation, dispatch } = this.props;
    dispatch(handleRemoveCard(id));
    navigation.goBack();
  };

  render() {
    const cardCss = {
      btn: { backgroundColor: white, borderColor: darkGray, borderWidth: 1 },
      text: { color: 'black' },
    };

    const quizCss = {
      btn: { backgroundColor: blue },
      text: { color: white },
    };

    const { navigation, deck } = this.props;

    return (
      <View style={styles.container}>
        <Deck id={deck.id} />
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
                isEmpty: deck.title.length < 1,
                title: deck.title,
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
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
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
