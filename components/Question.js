import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import TextButton from './TextButtons';
import TouchButton from './TouchButton';

import { red, green, white, textGray, gray, darkGray } from '../utils/colors';
import {
  formatId,
  clearNotification,
  setNotification,
  isWeb,
} from '../utils/helpers';

const screen = {
  ANSWER: 'answer',
  QUESTION: 'question',
  RESULT: 'result',
};

const answer = {
  CORRECT: 'correct',
  INCORRECT: 'incorrect',
};

class Question extends Component {
  componentDidMount() {
    if (!isWeb()) {
      clearNotification().then(setNotification);
      console.log('is mobile...');
    }
  }
  state = {
    screen: screen.QUESTION,
    score: 0,
    currentCard: 1,
    answered: Array(this.props.deck.questions.length).fill(0),
    totalCards: this.props.deck.questions.length,
  };

  handleAnswer = (response) => {
    const { currentCard, totalCards } = this.state;
    if (response === answer.CORRECT) {
      this.setState((currentState) => ({
        score: currentState.score + 1,
      }));
    }

    if (currentCard < totalCards) {
      this.setState((currentState) => ({
        screen: screen.QUESTION, //each time when is answered
        currentCard: currentState.currentCard + 1,
        answered: currentState.answered.map((value, index) =>
          currentState.currentCard === index ? 1 : value,
        ),
      }));
    } else {
      this.setState({ screen: screen.RESULT });
    }
  };

  handleReset = () => {
    this.setState((currentState) => ({
      screen: screen.QUESTION,
      score: 0,
      currentCard: 1,
      answered: Array(currentState.totalCards).fill(0),
      totalCards: currentState.totalCards,
    }));
  };
  render() {
    const { deck, navigation } = this.props;
    const { currentCard, totalCards, score, screen: showPanel } = this.state;
    const card = deck.questions[currentCard - 1];

    if (totalCards === 0) {
      return (
        <View style={styles.pageStyle}>
          <View style={styles.block}>
            <Text style={[styles.count, { textAlign: 'center' }]}>
              No cards in the deck.
            </Text>
            <Text style={[styles.count, { textAlign: 'center' }]}>
              Please add some cards and try again.
            </Text>
          </View>
        </View>
      );
    }

    switch (showPanel) {
      case screen.QUESTION:
      case screen.ANSWER:
        return (
          <View style={styles.pageStyle}>
            <View style={styles.block}>
              <Text style={styles.count}>
                {currentCard} / {totalCards}
              </Text>
            </View>
            <View style={[styles.block, styles.questionContainer]}>
              <Text style={styles.questionText}>
                {showPanel === screen.QUESTION ? 'Question' : 'Answer'}
              </Text>
              <Text style={styles.title}>
                {showPanel === screen.QUESTION ? card.question : card.answer}
              </Text>
            </View>
            {showPanel === screen.QUESTION ? (
              <TextButton
                css={{ color: red }}
                onPress={() => this.setState({ screen: screen.ANSWER })}>
                Answer
              </TextButton>
            ) : (
              <TextButton
                css={{ color: red }}
                onPress={() => this.setState({ screen: screen.QUESTION })}>
                Question
              </TextButton>
            )}
            <View>
              <TouchButton
                css={{
                  btn: { backgroundColor: green, borderColor: white },
                }}
                onPress={() => this.handleAnswer(answer.CORRECT)}
                disabled={this.state.answered[currentCard] === 1}>
                Correct
              </TouchButton>
              <TouchButton
                css={{
                  btn: { backgroundColor: red, borderColor: white },
                }}
                onPress={() => this.handleAnswer(answer.INCORRECT)}
                disabled={this.state.answered[currentCard] === 1}>
                Incorrect
              </TouchButton>
            </View>
          </View>
        );
      case screen.RESULT:
        return (
          <View
            style={[
              styles.container,
              styles.pageStyle,
              { justifyContent: 'center' },
            ]}>
            <View style={styles.block}>
              <Text style={styles.count}>End</Text>
            </View>
            <View style={styles.block}>
              <Text style={styles.title}>Quiz Complete!</Text>
              <Text style={styles.resultTextOk}>
                {score} / {totalCards} correct
              </Text>
            </View>
            <View style={styles.block}>
              <Text style={[styles.count, { textAlign: 'center' }]}>
                Percentage correct
              </Text>
              <Text
                style={{
                  color: 'red',
                  fontSize: 46,
                  textAlign: 'center',
                }}>
                {((score / totalCards) * 100).toFixed(0)}%
              </Text>
            </View>
            <View style={styles.block}>
              <TouchButton
                css={{
                  btn: { backgroundColor: green, borderColor: white },
                }}
                onPress={() => this.handleReset()}>
                Restart Quiz
              </TouchButton>
              <TouchButton
                css={{
                  btn: { backgroundColor: gray, borderColor: textGray },
                  text: { color: textGray },
                }}
                onPress={() => {
                  this.handleReset();
                  navigation.navigate('Home');
                }}>
                Go to Deck
              </TouchButton>
            </View>
          </View>
        );
      default:
        return <div>Something is wrong</div>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageStyle: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    backgroundColor: gray,
    justifyContent: 'space-around',
  },
  block: {
    marginBottom: 20,
  },
  count: {
    fontSize: 24,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
  },
  questionContainer: {
    borderWidth: 1,
    borderColor: darkGray,
    backgroundColor: white,
    borderRadius: 5,
    paddingTop: 20,
    paddingBottom: 20,
  },
  questionText: {
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontSize: 20,
  },
  resultTextOk: {
    color: green,
    fontSize: 46,
    textAlign: 'center',
  },
  resultTextWrong: {
    color: red,
    fontSize: 46,
    textAlign: 'center',
  },
});

const mapStateToProps = (state, { route }) => {
  const title = formatId(route.params.title) || null;
  const deck = state[title];

  return {
    deck,
  };
};
export default connect(mapStateToProps)(Question);
