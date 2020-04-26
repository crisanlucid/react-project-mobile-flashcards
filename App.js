import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppStackNavigator';
import { blue } from './utils/colors';

function FlashcardStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: 50 }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const App = () => {
  return (
    <View style={styles.container}>
      <FlashcardStatusBar backgroundColor={blue} barStyle='light-content' />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dde',
  },
});

export default App;
