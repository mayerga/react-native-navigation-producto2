import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import Firebase from './utils/firebase';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
      <StatusBar style="dark"/>
    </NavigationContainer>

    
  );
}


