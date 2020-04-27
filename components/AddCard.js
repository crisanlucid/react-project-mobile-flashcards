import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import TouchButton from './TouchButton';
import { connect } from 'react-redux';
import { handleAddCard } from '../actions';
import { blue, white, gray } from '../utils/colors';
import { formatId } from '../utils/helpers';

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
  handleSubmit = () => {
    const { dispatch, id, navigation } = this.props;
    const card = {
      question: this.state.question,
      answer: this.state.answer,
    };

    //persistance
    dispatch(handleAddCard(id, card));

    this.setState({ question: '', answer: '' });
    navigation.goBack();
  };
  render() {
    const { answer, question } = this.state;
    const cardCss = { btn: { backgroundColor: blue, borderColor: white } };
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
              autoFocus={true}
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
        <TouchButton
          css={cardCss}
          onPress={this.handleSubmit}
          disabled={this.state.question === '' || this.state.answer === ''}>
          Submit
        </TouchButton>
      </View>
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
    borderColor: gray,
    backgroundColor: white,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
    height: 40,
  },
});

const mapStateToProps = (state, { route }) => {
  const id = formatId(route.params['title']) || undefined;

  return {
    id,
  };
};

export default connect(mapStateToProps)(AddCard);
