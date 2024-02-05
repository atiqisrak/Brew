import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { AppProvider } from './assets/context/AppContext';
import AppNavigator from './assets/navigation/AppNavigator';
import { AuthProvider } from './assets/context/AuthContext';

export default function App() {
  return (

    <ImageBackground
      source={require('./assets/images/optionbg.png')}
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
      }}
    >
      <AuthProvider>
        <AppProvider>
          <AppNavigator />
        </AppProvider>
      </AuthProvider>
    </ImageBackground>
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
