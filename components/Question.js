import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TextButton from './TextButton';
import TouchButton from './TouchButton';

const screen = {
  ANSWER: 'answer',
  QUESTION: 'question',
  RESULT: 'result',
};

export class Question extends Component {
  state = {
    screen: screen.ANSWER,
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
              <Text style={styles.title}>
                Q: Does React Native work with Web?
              </Text>
            </View>
            <TextButton
              css={{ color: 'red', fontWeight: 'bold' }}
              onPress={() => this.setState({ screen: screen.ANSWER })}>
              Answer
            </TextButton>
            <View>
              <TouchButton
                css={{ btn: { backgroundColor: 'green' } }}
                onPress={() => console.log('answer correct')}>
                Correct
              </TouchButton>
              <TouchButton
                css={{ btn: { backgroundColor: 'red' } }}
                onPress={() => console.log('answer incorrect')}>
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
              <Text style={styles.title}>
                A: React Native works with Android, iOS, Windows, & Web.
              </Text>
            </View>
            <TextButton
              css={{ color: 'red', fontWeight: 'bold' }}
              onPress={() => this.setState({ screen: screen.QUESTION })}>
              Question
            </TextButton>
            <View>
              <TouchButton
                css={{ btn: { backgroundColor: 'green' } }}
                onPress={() => console.log('answer correct!')}>
                Correct
              </TouchButton>
              <TouchButton
                css={{ btn: { backgroundColor: 'red' } }}
                onPress={() => console.log('answer incorrect!')}>
                Incorrect
              </TouchButton>
            </View>
          </View>
        );
      case screen.RESULT:
        return (
          <View style={[styles.container, { justifyContent: 'center' }]}>
            <View style={styles.block}>
              <Text style={styles.title}>Quiz Complete!</Text>
            </View>
            <View style={styles.block}>
              <Text style={[styles.count, { textAlign: 'center' }]}>
                Percentage correct
              </Text>
            </View>
            <View style={styles.block}>
              <Text
                style={{
                  color: 'red',
                  fontSize: 46,
                  textAlign: 'center',
                }}>
                50%
              </Text>
            </View>
          </View>
        );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  block: {
    marginBottom: 20,
  },
  count: {
    fontSize: 26,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Question;
