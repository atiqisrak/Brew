import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../components/WelcomeScreen';
import OptionsScreen from '../components/OptionsScreen';
import OrderScreen from '../components/OrderScreen';
import ConfirmationScreen from '../components/ConfirmationScreen';
import Login from '../components/AuthScreens/Login';
import Register from '../components/AuthScreens/Register';
import { AppProvider, useAppContext } from '../context/AppContext';
import { useAuth, AuthProvider } from '../context/AuthContext';

const Stack = createStackNavigator();

const AuthScreens = () => {
    return (
        <AuthProvider>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </AuthProvider>
    );
};

const AppNavigator = () => {
    const { token } = useAuth();
    const { order } = useAppContext();

    return (
        <NavigationContainer>
            {
                token ? (
                    <Stack.Navigator initialRouteName="Welcome">
                        <Stack.Screen name="Welcome" component={WelcomeScreen} />
                        <Stack.Screen name="Options" component={OptionsScreen} />
                        <Stack.Screen name="Order" component={OrderScreen} />
                        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
                    </Stack.Navigator>
                ) : (
                    <AuthScreens />
                )
            }
        </NavigationContainer>
    );
};

export default AppNavigator;
