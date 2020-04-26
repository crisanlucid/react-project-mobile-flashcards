import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TextButton from './TextButton';
import TouchButton from './TouchButton';
import { red, green, white, textGray, gray, darkGray } from '../utils/colors';

const screen = {
  ANSWER: 'answer',
  QUESTION: 'question',
  RESULT: 'result',
};

export class Question extends Component {
  state = {
    screen: screen.QUESTION,
  };
  render() {
    switch (this.state.screen) {
      case screen.QUESTION:
        return (
          <View style={styles.container}>
            <View style={styles.block}>
              <Text style={styles.count}>1 / 3</Text>
            </View>
            <View style={styles.block}>
              <Text style={styles.questionText}>Question</Text>
              <Text style={styles.title}>Does React Native work with Web?</Text>
            </View>
            <TextButton
              css={{ color: red, fontWeight: 'bold' }}
              onPress={() => this.setState({ screen: screen.ANSWER })}>
              Answer
            </TextButton>
            <View>
              <TouchButton
                css={{ btn: { backgroundColor: green, borderColor: white } }}
                onPress={() => this.setState({ screen: screen.RESULT })}>
                Correct
              </TouchButton>
              <TouchButton
                css={{ btn: { backgroundColor: red, borderColor: white } }}
                onPress={() => this.setState({ screen: screen.RESULT })}>
                Incorrect
              </TouchButton>
            </View>
          </View>
        );
      case screen.ANSWER:
        return (
          <View style={styles.container}>
            <View style={styles.block}>
              <Text style={styles.count}>1 / 3</Text>
            </View>
            <View style={styles.block}>
              <Text style={styles.questionText}>Answer</Text>
              <Text style={styles.title}>
                React Native works with Android, iOS, Windows, & Web.
              </Text>
            </View>
            <TextButton
              css={{ color: red, fontWeight: 'bold' }}
              onPress={() => this.setState({ screen: screen.QUESTION })}>
              Question
            </TextButton>
            <View>
              <TouchButton
                css={{ btn: { backgroundColor: green, borderColor: white } }}
                onPress={() => this.setState({ screen: screen.RESULT })}>
                Correct
              </TouchButton>
              <TouchButton
                css={{ btn: { backgroundColor: red, borderColor: white } }}
                onPress={() => this.setState({ screen: screen.RESULT })}>
                Incorrect
              </TouchButton>
            </View>
          </View>
        );
      case screen.RESULT:
        return (
          <View style={[styles.container, { justifyContent: 'center' }]}>
            <View style={styles.block}>
              <Text style={styles.count}>End</Text>
            </View>
            <View style={styles.block}>
              <Text style={styles.title}>Quiz Complete!</Text>
              <Text style={styles.resultTextGood}>2 / 3 correct</Text>
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
                75%
              </Text>
            </View>
            <View style={styles.block}>
              <TouchButton
                css={{ btn: { backgroundColor: green, borderColor: white } }}
                onPress={() => this.setState({ screen: screen.QUESTION })}>
                Restart Quiz
              </TouchButton>
              <TouchButton
                css={{
                  btn: { backgroundColor: gray, borderColor: textGray },
                  text: { color: textGray },
                }}
                onPress={() => this.props.navigation.goBack()}>
                Go to Deck
              </TouchButton>
            </View>
          </View>
        );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
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
  resultTextGood: {
    color: green,
    fontSize: 46,
    textAlign: 'center',
  },
  resultTextBad: {
    color: red,
    fontSize: 46,
    textAlign: 'center',
  },
});

export default Question;
