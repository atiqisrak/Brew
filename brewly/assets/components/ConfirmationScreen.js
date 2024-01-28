import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const ConfirmationScreen = ({ route }) => {
    const { orderDetails } = route.params;
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.confirmationText}>Order Confirmed!</Text>
            <Text>{`Option: ${orderDetails.option}`}</Text>
            <Text>{`Name: ${orderDetails.name}`}</Text>
        </View>
    );
};

export default ConfirmationScreen;
