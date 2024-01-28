import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.heading}>Welcome to Brew</Text>
            <TouchableOpacity
                style={globalStyles.button}
                onPress={() => navigation.navigate('Options')}>
                <Text style={globalStyles.buttonText}>
                    Order Now
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default WelcomeScreen;
