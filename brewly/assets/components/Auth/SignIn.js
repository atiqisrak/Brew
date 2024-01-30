// brewly/src/components/Auth/SignIn.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, Alert } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { globalStyles } from '../../styles/globalStyles';

const SignIn = ({ navigation }) => {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        try {

            if (!username || !password) {
                throw new Error('Please enter a username and password');
            }

            const userData = await login(username, password);


            if (userData.role === 'employee') {
                navigation.navigate('Welcome');
            } else if (userData.role === 'staff') {
                navigation.navigate('OrderList');
            }
        } catch (error) {
            // Handle authentication errors
            console.error('Authentication error:', error.message);
            // Try Again
            Alert.alert(
                'Authentication Error',
                error.message,
                [
                    {
                        text: 'Try Again',
                        onPress: () => {
                            setUsername('');
                            setPassword('');
                        }
                    }
                ],
                { cancelable: false }
            );
        }
    };

    const handleSignIn2 = async () => {
        try {
            if (!username || !password) {
                throw new Error('Please enter a username and password');
            }

            const userData = await login(username, password);

            Alert.alert(
                'Received Credentials',
                'Username: ' + username + '\nPassword: ' + password + '\nToken: ' + userData.token,
                [
                    {
                        text: 'Try Again',
                        onPress: () => {
                            setUsername('');
                            setPassword('');
                        }
                    }
                ],
                { cancelable: false }
            );
        } catch (error) {
            // Handle authentication errors
            console.error('Authentication error:', error.message);
            // Try Again
            Alert.alert(
                'Authentication Error',
                error.message,
                [
                    {
                        text: 'Try Again',
                        onPress: () => {
                            setUsername('');
                            setPassword('');
                        }
                    }
                ],
                { cancelable: false }
            );
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
            } onPress={handleSignIn2}>
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
