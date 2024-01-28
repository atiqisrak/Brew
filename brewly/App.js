import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppNavigator from './assets/navigation/AppNavigator';
import { AppProvider } from './assets/context/AppContext';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Welcome to Brewly! Niloy Niil</Text>
    //   <StatusBar style="auto" />
    // </View>
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
