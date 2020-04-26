import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import Question from '../components/Question';
import DeckDetails from '../components/DeckDetails';
import AddCard from '../components/AddCard';
import { blue, lightBlue } from '../utils/colors';
const Stack = createStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      options={{
        headerStyle: {
          backgroundColor: lightBlue,
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name='Home'
        component={TabNavigator}
        options={{
          title: 'Decks',
          headerTintColor: blue,
          headerStyle: {
            backgroundColor: lightBlue,
          },
        }}
      />
      <Stack.Screen
        name='DeckDetails'
        component={DeckDetails}
        options={({ route }) => ({
          title: route.params.title,
          headerTintColor: blue,
          headerStyle: {
            backgroundColor: lightBlue,
          },
        })}
      />
      <Stack.Screen
        name='AddCard'
        component={AddCard}
        options={{
          title: 'Add Card',
          headerTintColor: blue,
          headerStyle: {
            backgroundColor: lightBlue,
          },
        }}
      />
      <Stack.Screen
        name='Question'
        component={Question}
        options={({ route }) => ({
          headerStyle: {
            backgroundColor: lightBlue,
          },
          title: route.params.isEmpty
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
