// ConfirmationOrder.js

import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../styles/globalStyles';

const ConfirmationOrder = ({ route }) => {
    const { orderDetails } = route.params;
    const navigation = useNavigation();

    return (
        <View style={globalStyles.container}>
            <Image
                source={require('../images/checkmark.png')}
                style={globalStyles.checkmark}
            />

            <Text style={globalStyles.heading}>Order Placed Successfully!</Text>

            <View style={globalStyles.orderDetailsContainer}>
                {/* Display order details based on the selected option */}
                <Text>{`Option: ${orderDetails.option}`}</Text>
                {orderDetails.customization && (
                    <>
                        {/* Display customization details based on the selected option */}
                        {Object.entries(orderDetails.customization).map(([key, value]) => (
                            <Text key={key}>{`${key}: ${value}`}</Text>
                        ))}
                    </>
                )}
            </View>

            <TouchableOpacity
                style={globalStyles.button}
                onPress={() => navigation.navigate('OrderList')}>
                <Text style={globalStyles.buttonText}>Go to Order List</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ConfirmationOrder;
