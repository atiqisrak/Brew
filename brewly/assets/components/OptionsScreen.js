import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';

const OptionsScreen = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const navigation = useNavigation();

    const handleOptionSelection = (option) => {
        setSelectedOption(option);
        navigation.navigate('Personalize', { option });
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.heading}>Choose an option:</Text>
            <TouchableOpacity
                style={globalStyles.button}
                onPress={() => handleOptionSelection('Water')}
            >
                <Text style={globalStyles.buttonText}>Water</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={globalStyles.button}
                onPress={() => handleOptionSelection('Tea')}
            >
                <Text style={globalStyles.buttonText}>Tea</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={globalStyles.button}
                onPress={() => handleOptionSelection('Coffee')}
            >
                <Text style={globalStyles.buttonText}>Coffee</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={globalStyles.button}
                onPress={() => handleOptionSelection('Biscuit')}
            >
                <Text style={globalStyles.buttonText}>Biscuit</Text>
            </TouchableOpacity>
        </View>
    );
};

export default OptionsScreen;
