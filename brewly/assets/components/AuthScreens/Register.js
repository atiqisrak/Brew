import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';

const Register = () => {
    const { register } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleRegister = async () => {
        try {
            // Perform registration, get the token from your server
            const token = 'your_obtained_token'; // Replace with actual token obtained from server

            // Use the register function from the context to set the token
            register(token);

            // Additional logic if needed after successful registration
        } catch (error) {
            // Handle registration error
            console.error('Registration error:', error.message);
        }
    };

    return (
        <View style={globalStyles.container}>
            <TextInput
                style={globalStyles.textInput}
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                style={globalStyles.textInput}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TextInput
                style={globalStyles.textInput}
                placeholder="Confirm Password"
                secureTextEntry
                value={passwordConfirmation}
                onChangeText={(text) => setPasswordConfirmation(text)}
            />
            <TouchableOpacity style={globalStyles.button} onPress={handleRegister}>
                <Text style={globalStyles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Register;