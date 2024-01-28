import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider, useAppContext } from '../context/AppContext';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../components/WelcomeScreen';
import OptionsScreen from '../components/OptionsScreen';
import OrderScreen from '../components/OrderScreen';
import ConfirmationScreen from '../components/ConfirmationScreen';


const Stack = createStackNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AppProvider>
                <Stack.Navigator initialRouteName="Welcome">
                    <Stack.Screen name="Welcome" component={WelcomeScreen} />
                    <Stack.Screen name="Options" component={OptionsScreen} />
                    <Stack.Screen name="Order" component={OrderScreen} />
                    <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
                </Stack.Navigator>
            </AppProvider>
        </NavigationContainer>
    );
}

export default AppNavigator;
