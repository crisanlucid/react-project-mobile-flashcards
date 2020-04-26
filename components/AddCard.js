import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import TouchButton from './TouchButton';

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  };
  handleQuestionChange = (question) => {
    this.setState({ question });
  };
  handleAnswerChange = (answer) => {
    this.setState({ answer });
  };
  render() {
    const { answer, question } = this.state;
    const cardCss = { btn: { backgroundColor: 'blue' } };
    return (
      <View style={styles.container}>
        <View>
          <View style={[styles.block]}>
            <Text style={styles.title}>Add a question</Text>
          </View>
          <View style={[styles.block]}>
            <TextInput
              style={styles.input}
              value={question}
              onChangeText={this.handleQuestionChange}
              placeholder='Question'
            />
          </View>
          <View style={[styles.block]}>
            <TextInput
              style={styles.input}
              value={answer}
              onChangeText={this.handleAnswerChange}
              placeholder='Answer'
            />
          </View>
        </View>
        <TouchButton css={cardCss} onPress={() => console.log('card added')}>
          Submit
        </TouchButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'green',
    justifyContent: 'space-around',
  },
  block: {
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
    height: 40,
  },
});

export default AddCard;
