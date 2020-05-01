import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppStackNavigator';
import { blue } from './utils/colors';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import reducer from './reducers';
import Constants from 'expo-constants';
import { setNotification, isWeb } from './utils/helpers';

const store = createStore(
  reducer /* preloadedState, */,
  compose(
    applyMiddleware(thunk, logger),
    // window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //   window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

function FlashcardStatusBar({ backgroundColor, ...props }) {
  return (
    <View
      style={{
        backgroundColor,
        height: Constants.statusBarHeight,
      }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

class App extends Component {
  componentDidMount() {
    if (!isWeb()) {
      setNotification();
    }
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <FlashcardStatusBar backgroundColor={blue} barStyle='light-content' />
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
});

export default App;
