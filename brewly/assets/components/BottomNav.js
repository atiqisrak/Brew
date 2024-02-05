import React, { useLayoutEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import WelcomeScreen from './WelcomeScreen';
import OptionsScreen from './OptionsScreen';
import OrderList from './OrderList';
import Profile from './Auth/Profile';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { Icon, MD3Colors } from 'react-native-paper';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);


    const tabs = [
        {
            title: 'Home',
            icon: <Icon source="camera" size={24} />,
        },
        {
            title: 'Options',
            icon: <Icon source="camera" size={24} />,
            component: OptionsScreen,
        },
        {
            title: 'Shop',
            icon: <Icon source="camera" size={24} />,
            component: OrderList,
        },
        {
            title: 'Profile',
            icon: <Icon source="camera" size={24} />,
            component: Profile,
        },
    ];

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tab.Navigator
                initialRouteName="Home"
                tabBarOptions={{
                    showLabel: false,
                    style: {
                        position: 'absolute',
                        bottom: 25,
                        left: 20,
                        right: 20,
                        elevation: 0,
                        backgroundColor: '#ffffff',
                        borderRadius: 15,
                        height: 90,
                        ...styles.shadow,
                    },
                }}
            >
                {tabs.map((tab, index) => (
                    <Tab.Screen
                        key={index}
                        name={tab.title}
                        component={tab.component}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                                    {tab.icon}
                                </View>
                            ),
                        }}
                    />
                ))}
            </Tab.Navigator>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    tabButton: {
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default BottomNav;
