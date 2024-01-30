import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    const handleOrderNow = () => {
        navigation.navigate('Options');
    };

    const handleOrderList = () => {
        navigation.navigate('OrderList');
    };
    return (
        <View style={globalStyles.container}>
            <Image
                source={require('../images/brew-v1.png')}
                style={globalStyles.logo}
            />
            <Text style={globalStyles.heading}>Welcome to Brew</Text>
            <TouchableOpacity
                style={globalStyles.button}
                onPress={handleOrderNow}>
                <Text style={globalStyles.buttonText}>
                    Order Now
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={globalStyles.button}
                onPress={handleOrderList}>
                <Text style={globalStyles.buttonText}>
                    View Orders
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default WelcomeScreen;
