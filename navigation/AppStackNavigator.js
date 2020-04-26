import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import Question from '../components/Question';
import DeckDetails from '../components/DeckDetails';
import AddCard from '../components/AddCard';

const Stack = createStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={TabNavigator}
        options={{ title: 'Decks' }}
      />
      <Stack.Screen
        name='DeckDetails'
        component={DeckDetails}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name='AddCard'
        component={AddCard}
        options={{ title: 'Add Card' }}
      />
      <Stack.Screen
        name='Question'
        component={Question}
        options={({ route }) => ({
          title: route.params.isempty
            ? 'Empty Quiz'
            : route.params.score
            ? route.params.title
            : 'Quiz',
        })}
      />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
