import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Image, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import BottomNav from './BottomNav';
import WelcomeScreen from './WelcomeScreen';
import OrderList from './OrderList';
import Profile from './Auth/Profile';
import { HomeIcon, ListBulletIcon, BuildingStorefrontIcon, UserIcon } from "react-native-heroicons/solid";

const OptionsScreen = ({ route }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const navigation = useNavigation();

    const handleOptionSelection = (item) => {
        setSelectedOption(item);
        navigation.navigate('Personalize', { item });
    };

    const items = [
        'Water',
        'Tea',
        'Coffee',
        'Biscuit',
    ];

    const tabs = [{
        name: 'Welcome',
        icon: <HomeIcon size={24} />
    }, {
        name: 'Options',
        icon: <BuildingStorefrontIcon size={24} />
    }, {
        name: 'OrderList',
        icon: <ListBulletIcon size={24} />
    }, {
        name: 'Profile',
        icon: <UserIcon size={24} />
    }, {
        name: 'OrderList 2',
        icon: <ListBulletIcon size={24} />
    }];

    const renderTabIcon = (tabTitle) => {
        switch (tabTitle) {
            case 'Home 1':
                return <HomeIcon width={24} height={24} color="#fff" />;
            case 'Options':
                return <ListBulletIcon width={24} height={24} color="#fff" />;
            case 'Shop':
                return <BuildingStorefrontIcon width={24} height={24} color="#fff" />;
            case 'Home':
                return <HomeIcon width={24} height={24} color="#fff" />;
            case 'Profile':
                return <UserIcon width={24} height={24} color="#fff" />;

            default:
                return null;
        }
    };

    return (
        <ImageBackground
            source={require('../images/optionbg.png')}
            style={{
                flex: 1,
                width: '100%',
                resizeMode: 'cover',
                justifyContent: 'center',
            }}
        >
            <ScrollView style={{
                height: '100%',
            }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 20,
                }}>
                    <Text style={globalStyles.heading}>Select an option:</Text>

                    {items.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                globalStyles.button,
                                selectedOption === item && globalStyles.selectedButton,
                            ]}
                            onPress={() => handleOptionSelection(item)}
                        >
                            <Text style={globalStyles.buttonText}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 20,
                }}>
                    <Text style={globalStyles.heading}>Select an option:</Text>

                    {items.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                globalStyles.button,
                                selectedOption === item && globalStyles.selectedButton,
                            ]}
                            onPress={() => handleOptionSelection(item)}
                        >
                            <Text style={globalStyles.buttonText}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            {/* Bottom nav */}
            <View style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'flex-end',
                paddingBottom: 40,
            }}>
                {tabs.map((tab, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.tabButton,
                            { backgroundColor: tab.name === 'Options' ? "#5c3408" : "transparent" },
                        ]}
                        onPress={() => navigation.navigate(tab.name)}
                    >
                        {renderTabIcon(tab.name, false)}
                    </TouchableOpacity>
                ))}
            </View>
        </ImageBackground >
    );
};

const styles = StyleSheet.create({
    scrollViewContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    tabButton: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        paddingHorizontal: 10,
    },
});


export default OptionsScreen;
