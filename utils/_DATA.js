const decks = {
  react: {
    id: 'react',
    title: 'React',
    questions: [
      {
        question: 'What is ReactJS?',
        answer:
          'ReactJS is an open-source frontend JavaScript library which is used for building user interfaces',
      },
      {
        question: 'What is JSX?',
        answer:
          'JSX is a syntax notation for JavaScript XML(XML-like syntax extension to ECMAScript)',
      },
      {
        question: 'What is virtual DOM?',
        answer:
          'The virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the “real” DOM',
      },
    ],
  },
  javascript: {
    id: 'javascript',
    title: 'JavaScript',
    questions: [
      {
        question: 'What does the || operator do?',
        answer:
          'The || or Logical OR operator finds the first truthy expression in its operands and returns it',
      },
      {
        question: 'What is the DOM?',
        answer:
          'DOM stands for Document Object Model is an interface (API) for HTML and XML documents',
      },
      {
        question: 'What is Object Destructuring?',
        answer:
          'Object Destructuring is a new and cleaner way of getting or extracting values from an object or an array',
      },
    ],
  },
  redux: {
    id: 'redux',
    title: 'Redux',
    questions: [
      {
        question: 'What is Redux?',
        answer:
          'Redux is an open-source JavaScript library for managing application state',
      },
      {
        question: 'What is a reducer?',
        answer:
          'A reducer is a pure function that takes the current state and action and returns the next state',
      },
      {
        question: 'What is an action creator?',
        answer: 'An action creator is a function that returns an action',
      },
    ],
  },
};

export default decks;
