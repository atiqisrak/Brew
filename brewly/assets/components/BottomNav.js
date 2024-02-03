import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { HomeTwo, Shop } from '@icon-park/react';
import WelcomeScreen from './WelcomeScreen';
import OptionsScreen from './OptionsScreen';
import OrderList from './OrderList';
import Profile from './Auth/Profile';


const BottomNav = () => {
    const Tab = createBottomTabNavigator();
    // const [activeKey, setActiveKey] = useState('Home');

    const tabs = [
        {
            key: 'Home',
            title: 'Home',
            icon: <HomeTwo theme="two-tone" size="24" fill={['#333', '#2F88FF']} strokeLinejoin="bevel" />,
            component: WelcomeScreen,
        },
        {
            key: 'Options',
            title: 'Options',
            icon: <Shop theme="two-tone" size="24" fill={['#333', '#2F88FF']} strokeLinejoin="bevel" />,
            component: OptionsScreen,
        },
        {
            key: 'Shop',
            title: 'Shop',
            icon: <Shop theme="two-tone" size="24" fill={['#333', '#2F88FF']} strokeLinejoin="bevel" />,
            component: OrderList,
        },
        {
            key: 'Profile',
            title: 'Profile',
            icon: <Shop theme="two-tone" size="24" fill={['#333', '#2F88FF']} strokeLinejoin="bevel" />,
            component: Profile,
        },
    ];


    return (
        <SafeAreaView>

            <Tab.Navigator
            // tabBarOptions={{
            //     style: {
            //         position: 'absolute',
            //         bottom: 0,
            //         left: 0,
            //         right: 0,
            //         backgroundColor: '#411530',
            //         borderTopLeftRadius: 30,
            //         borderTopRightRadius: 30,
            //         overflow: 'hidden',
            //         paddingBottom: 10,
            //         height: 70,
            //     },
            //     tabStyle: {
            //         width: 100,
            //         height: 70,
            //         alignItems: 'center',
            //         justifyContent: 'center',
            //     },
            //     iconStyle: {
            //         width: 40,
            //         height: 40,
            //         borderRadius: 20,
            //     },
            //     labelStyle: {
            //         display: 'none',
            //     },
            // }}
            >
                {tabs.map((tab, index) => (
                    <Tab.Screen
                        key={index}
                        name={tab.key}
                        component={tab.component}
                        options={{
                            tabBarIcon: () => (
                                <TouchableOpacity
                                    style={styles.tabButton}
                                    // onPress={() => setActiveKey(tab.key)}
                                    onPress={() => console.log(tab.key)}
                                >
                                    {tab.icon}
                                </TouchableOpacity>
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#411530',
        borderRadius: 20,
        width: '100%',
        height: '100%',
        opacity: 0.8,
    },
});

export default BottomNav;
