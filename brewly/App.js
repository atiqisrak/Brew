import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { AppProvider } from './assets/context/AppContext';
import AppNavigator from './assets/navigation/AppNavigator';
import { AuthProvider } from './assets/context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <AppNavigator />
      </AppProvider>
    </AuthProvider>
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
