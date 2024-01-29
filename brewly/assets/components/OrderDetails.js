import React from 'react';
import { View, Text } from 'react-native';

const OrderDetails = ({ route }) => {
    const { orderDetails } = route.params;

    return (
        <View>
            <Text>Order Details:</Text>
            <Text>Option: {orderDetails.option}</Text>
            <Text>Name: {orderDetails.name}</Text>
            {/* Add other order details as needed */}
        </View>
    );
};

export default OrderDetails;
