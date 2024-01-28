// brewly/src/screens/AuthScreens/Login.js

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { globalStyles, textInput } from '../../styles/globalStyles';
import { useAuth } from '../../context/AuthContext';
import { useAppContext } from '../../context/AppContext';

const Login = () => {
    const { login } = useAuth();
    const { setOrder } = useAppContext();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (data.success) {
                login(data.token);
                setOrder(null);
            }
        }
        catch (err) {
            console.log(err);
        }
    }



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
