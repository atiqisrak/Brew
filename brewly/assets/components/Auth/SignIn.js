// brewly/src/components/Auth/SignIn.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { globalStyles } from '../../styles/globalStyles';

const SignIn = ({ navigation }) => {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        // Implement authentication logic here (e.g., call API)
        // Upon successful authentication, call login(userData);
        try {
            const userData = { username, password, role: 'employee' }; // Replace with actual user data
            login(userData);

            if (userData.role === 'employee') {
                navigation.navigate('Welcome');
            } else if (userData.role === 'staff') {
                navigation.navigate('OrderList');
            }
        } catch (error) {
            // Handle authentication errors
            console.error('Authentication error:', error.message);
        }
    };

    return (
        <View
            style={globalStyles.container}
        >
            {/* Logo Image */}
            <Image
                source={require('../../images/brew-v1.png')}
                style={globalStyles.logo}
            />
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
            <TouchableOpacity style={
                globalStyles.button
            } onPress={handleSignIn}>
                <Text
                    style={globalStyles.buttonText}
                >Sign In</Text>
            </TouchableOpacity>

            <Text style={globalStyles.link}>
                Don't have an account?{' '}
                <Text
                    style={globalStyles.linkText}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    Sign Up
                </Text>
            </Text>
        </View>
    );
};

export default SignIn;
