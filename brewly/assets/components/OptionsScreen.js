import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import BottomNav from './BottomNav';

const OptionsScreen = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const navigation = useNavigation();

    const handleOptionSelection = (option) => {
        setSelectedOption(option);
        navigation.navigate('Personalize', { option });
    };

    const options = [
        'Water',
        'Tea',
        'Coffee',
        'Biscuit',
    ];

    return (
        <SafeAreaView style={styles.scrollViewContainer}>
            <ScrollView>
                {/* Profile */}
                <View style={styles.container}>
                    <View>
                        <Image
                            source={require('../images/avatar.png')}
                            style={{
                                width: 150,
                                height: 150,
                                marginBottom: 20,
                                borderRadius: 100,
                            }}
                        />
                    </View>
                </View>
                {/* Options */}
                <View style={styles.container}>
                    <Text style={globalStyles.heading}>Choose an option:</Text>
                    {
                        options.map((option, index) => (
                            <TouchableOpacity
                                key={index}
                                style={globalStyles.button}
                                onPress={() => handleOptionSelection(option)}
                            >
                                <Text style={globalStyles.buttonText}>{option}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <BottomNav />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    scrollViewContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
});

export default OptionsScreen;
