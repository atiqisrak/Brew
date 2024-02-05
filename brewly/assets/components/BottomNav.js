import React, { useLayoutEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, StyleSheet, SafeAreaView, Text } from 'react-native';
import WelcomeScreen from './WelcomeScreen';
import OptionsScreen from './OptionsScreen';
import OrderList from './OrderList';
import Profile from './Auth/Profile';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { HomeIcon, ListBulletIcon, BuildingStorefrontIcon, UserIcon } from "react-native-heroicons/outline";
import PersonalizeOrder from './PersonalizeOrder';

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
            title: 'Options',
            component: OptionsScreen,
        },
        {
            title: 'Shop',
            component: OrderList,
        },
        {
            title: 'Home',
            component: WelcomeScreen,
        },
        {
            title: 'Personalize',
            component: PersonalizeOrder,
        },
        {
            title: 'Profile',
            component: Profile,
        },
    ];

    const renderTabIcon = (tabTitle, focused) => {
        switch (tabTitle) {
            case 'Home 1':
                return <HomeIcon width={24} height={24} color={focused ? "#fff" : "#5c3408"} />;
            case 'Options':
                return <ListBulletIcon width={24} height={24} color={focused ? "#fff" : "#5c3408"} />;
            case 'Shop':
                return <BuildingStorefrontIcon width={24} height={24} color={focused ? "#fff" : "#5c3408"} />;
            case 'Home':
                return <HomeIcon width={24} height={24} color={focused ? "#fff" : "#5c3408"} />;
            case 'Profile':
                return <UserIcon width={24} height={24} color={focused ? "#fff" : "#5c3408"} />;
            default:
                return null;
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={({ route }) => ({
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        height: 60,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderRadius: 12,
                        marginTop: -50,
                    },
                    tabBarIcon: ({ focused }) => {
                        const tabBackgroundColor = focused ? "#5c3408" : "transparent";
                        return (
                            <TouchableOpacity
                                style={[styles.tabButton,
                                { backgroundColor: tabBackgroundColor },
                                { color: focused ? "#fff" : "#5c3408" }
                                ]}
                                onPress={() => navigation.navigate(route.name)}
                            >
                                {renderTabIcon(route.name, focused)}
                            </TouchableOpacity>
                        );
                    }
                })}
            >
                {tabs.map((tab, index) => (
                    <Tab.Screen
                        key={index}
                        name={tab.title}
                        component={tab.component}
                    />
                ))}
            </Tab.Navigator>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    tabButton: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        paddingHorizontal: 10,
    },
});
export default BottomNav;
