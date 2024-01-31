// brewly/src/components/Auth/SignIn.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, Alert, ScrollView } from 'react-native';
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
            console.log('User Data:', userData);

            // if (userData.role === "staff") {
            //     console.log('Staff User');
            //     navigation.navigate('OrderList');
            // }
            // else {
            //     navigation.navigate('Welcome');
            // }
            navigation.navigate('Welcome');
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
        <ScrollView>
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
        </ScrollView>
    );
};

export default SignIn;
