import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Habit from './Habit';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HabitsView from './HabitsView';
import { AuthProvider } from './AuthProvider';
import { AppRegistry } from 'react-native';

const stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name="Habits" component={HabitsView} />
        </stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}