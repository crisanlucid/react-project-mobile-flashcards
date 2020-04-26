import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import AddDeck from '../components/AddDeck';
import DeckList from '../components/DeckList';

const isIOS = Platform.OS === 'android' ? false : true;

const Tab =
  Platform.OS !== 'android'
    ? createBottomTabNavigator()
    : createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator style={{ flex: 1 }} initialRouteName='Decks'>
      <Tab.Screen
        name='Decks'
        component={DeckList}
        options={{
          tabBarLabel: 'Decks',
          tabBarIcon: ({ color }) => (
            <Ionicons
              name={isIOS ? 'ios-bookmarks' : 'md-bookmarks'}
              size={30}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name='AddDeck'
        component={AddDeck}
        options={{
          tabBarLabel: 'Add Deck',
          tabBarIcon: ({ color }) => (
            <FontAwesome name='plus-square' size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
