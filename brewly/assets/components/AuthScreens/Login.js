// brewly/src/screens/AuthScreens/Login.js

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useAuth } from '../../context/AuthContext'; // Import useAuth
import { useAppContext } from '../../context/AppContext'; // Import useAppContext for order-related state
import { globalStyles, textInput } from '../../styles/globalStyles';

const Login = () => {
    const { login } = useAuth(); // Use the login function from the AuthContext
    const { setOrder } = useAppContext(); // Use setOrder from the AppContext
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            // Perform authentication, get the token from your server
            const token = 'your_obtained_token'; // Replace with actual token obtained from server

            // Use the login function from AuthContext to set the token
            login(token);

            // Clear order-related state on successful login
            setOrder(null);

            // Additional logic if needed after successful login

        } catch (error) {
            // Handle authentication error
            console.error('Authentication error:', error.message);
        }
    };

    return (
        <View style={globalStyles.container}>
            <TextInput
                style={textInput}
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                style={textInput}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity style={globalStyles.button} onPress={handleLogin}>
                <Text style={globalStyles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;
