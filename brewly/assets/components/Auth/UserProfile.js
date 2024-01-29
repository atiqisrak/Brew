// brewly/src/components/Auth/UserProfile.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../../context/AuthContext';

const UserProfile = () => {
    const { user, logout } = useAuth();

    return (
        <View>
            <Text>Hello, {user?.name || 'User'}!</Text>
            <TouchableOpacity onPress={logout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

export default UserProfile;
