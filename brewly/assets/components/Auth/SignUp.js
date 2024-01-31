// brewly/src/components/Auth/SignUp.js
import React, { useState } from 'react';
import { View, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { globalStyles } from '../../styles/globalStyles';
import { TextInput, RadioButton, Button, Text } from 'react-native-paper';

const SignUp = ({ navigation }) => {
    // const { login } = useAuth();
    const { signUp, } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('employee');
    const [error, setError] = useState(null);

    const handleSignUp = async () => {
        try {
            if (!name || !email || !phone || !username || !password) {
                throw new Error('Please fill out all fields');
            }
            const userData = { name, email, phone, username, password, role };

            await signUp(userData);
            Alert.alert(
                'You have successfully signed up!',
                'Please sign in to continue',
                [
                    {
                        text: 'Sign In',
                        onPress: () => navigation.navigate('SignIn')
                    }
                ],
                { cancelable: false }
            );
        }
        catch (err) {
            console.log("Error signing up: ", err);
        }
    };

    return (
        <ScrollView>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 20,
            }}>
                <TextInput
                    label={'Name'}
                    style={{
                        marginBottom: 10,
                        width: 300,
                        borderRadius: 10,
                    }}
                    placeholder="Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    label={'Email'}
                    style={{
                        marginBottom: 10,
                        width: 300,
                        borderRadius: 10,
                    }}
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    label={'Phone'}
                    style={{
                        marginBottom: 10,
                        width: 300,
                        borderRadius: 10,
                    }}
                    placeholder="Phone"
                    value={phone}
                    onChangeText={(text) => setPhone(text)}
                />
                {/* Role Radio Button */}
                <View style={{
                    flexDirection: 'row', alignItems: 'center',
                    justifyContent: 'space-between', width: 300, marginBottom: 10
                }}>
                    <Text>Select Role:</Text>
                    {/* <RadioButton.Group onValueChange={(value) => setRole(value)} value={role}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton value="employee" />
                        <Text>Employee</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton value="staff" />
                        <Text>Staff</Text>
                    </View>
                </RadioButton.Group> */}
                    <Button
                        mode={role === 'employee' ? 'contained' : 'outlined'}
                        onPress={() => setRole('employee')}
                        style={{ marginRight: 10 }}
                    >
                        Employee
                    </Button>
                    <Button
                        mode={role === 'staff' ? 'contained' : 'outlined'}
                        onPress={() => setRole('staff')}
                    >
                        Staff
                    </Button>
                </View>


                <TextInput
                    label={'Username'}
                    style={{
                        marginBottom: 10,
                        width: 300,
                        borderRadius: 10,
                    }}
                    placeholder="Username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
                <TextInput
                    label={'Password'}
                    style={{
                        marginBottom: 10,
                        width: 300,
                        borderRadius: 10,
                    }}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                {
                    error && <Text style={{ color: 'red' }}>{error}</Text>
                }
                <Button
                    style={globalStyles.button}
                    mode="contained"
                    onPress={handleSignUp}>
                    Sign Up
                </Button>
            </View>
        </ScrollView>
    );
};

export default SignUp;
