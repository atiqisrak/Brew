import React from 'react';
import { View, Text } from 'react-native';
import { useAuth } from '../../context/AuthContext';

const Profile = () => {
    const { user } = useAuth();

    return (
        <View>
            <Text>Name: {user.name}</Text>
            <Text>Username: {user.username}</Text>
            <Text>Email: {user.email}</Text>
            <Text>Phone: {user.phone}</Text>
        </View>
    );
};

export default Profile;
