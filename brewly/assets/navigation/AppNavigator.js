import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider, useAppContext } from '../context/AppContext';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../components/WelcomeScreen';
import OptionsScreen from '../components/OptionsScreen';
import OrderScreen from '../components/OrderScreen';
import { useAuth } from '../context/AuthContext';
import OrderList from '../components/OrderList';
import Profile from '../components/Auth/Profile';
import OrderDetails from '../components/OrderDetails';
import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';
import PersonalizeOrder from '../components/PersonalizeOrder';
import ConfirmationOrder from '../components/ConfirmationOrder';
import BottomNav from '../components/BottomNav';

const Stack = createStackNavigator();

const AuthScreens = () => {
    return (
        <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
};

const AppNavigator = () => {

    const { user } = useAuth();

    return (
        <NavigationContainer>
            {/* {
                user ?
                    (
                        <AppProvider>
                            {user.role === 'employee' ?
                                (
                                    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
                                        <Stack.Screen name="Welcome" component={WelcomeScreen} />
                                        <Stack.Screen name="Options" component={OptionsScreen} />
                                        <Stack.Screen name="Order" component={OrderScreen} />
                                        <Stack.Screen name="Order List" component={OrderList} />
                                        <Stack.Screen name="OrderDetails" component={OrderDetails} />
                                        <Stack.Screen name="Profile" component={Profile} />
                                        <Stack.Screen name="Personalize" component={PersonalizeOrder} />
                                        <Stack.Screen name="Confirmation" component={ConfirmationOrder} />
                                    </Stack.Navigator>
                                )
                                :
                                (
                                    <Stack.Navigator initialRouteName="OrderList" screenOptions={{ headerShown: false }}>
                                        <Stack.Screen name="OrderList" component={OrderList} />
                                        <Stack.Screen name="OrderDetails" component={OrderDetails} />
                                        <Stack.Screen name="Profile" component={Profile} />
                                        <Stack.Screen name="Welcome" component={WelcomeScreen} />
                                        <Stack.Screen name="Options" component={OptionsScreen} />
                                        <Stack.Screen name="Order" component={OrderScreen} />
                                        <Stack.Screen name="Personalize" component={PersonalizeOrder} />
                                        <Stack.Screen name="Confirmation" component={ConfirmationOrder} />
                                    </Stack.Navigator>
                                )}
                        </AppProvider>
                    )
                    :
                    (
                        <AuthScreens />
                    )
            } */}
            <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="BottomNav" component={BottomNav} />
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Options" component={OptionsScreen} />
                <Stack.Screen name="Order" component={OrderScreen} />
                <Stack.Screen name="Order List" component={OrderList} />
                <Stack.Screen name="OrderDetails" component={OrderDetails} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Personalize" component={PersonalizeOrder} />
                <Stack.Screen name="Confirmation" component={ConfirmationOrder} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
