import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const OptionsScreen = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.heading}>Choose an option:</Text>
            <TouchableOpacity
                style={globalStyles.button} onPress={() => navigation.navigate('Order', { option: 'Water' })}>
                <Text style={globalStyles.buttonText}>Water</Text>
            </TouchableOpacity>
            <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('Order', { option: 'Tea' })}>
                <Text style={globalStyles.buttonText}>Tea</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={globalStyles.button} onPress={() => navigation.navigate('Order', { option: 'Coffee' })}>
                <Text style={globalStyles.buttonText}>Coffee</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={globalStyles.button} onPress={() => navigation.navigate('Order', { option: 'Biscuit' })}>
                <Text style={globalStyles.buttonText}>Biscuit</Text>
            </TouchableOpacity>
        </View>
    );
};

export default OptionsScreen;
