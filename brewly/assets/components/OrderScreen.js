// OrderScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useAppContext } from '../context/AppContext';
import { useNavigation } from '@react-navigation/native';
import * as Notifications from 'expo-notifications';
import { globalStyles } from '../styles/globalStyles';
import instance from '../api/instance';

const OrderScreen = ({ route, navigation }) => {
    const { option, customization } = route.params;
    const { setOrder } = useAppContext();
    const [loading, setLoading] = React.useState(false);

    const getOrderSummary = () => {
        switch (option) {
            case 'Coffee':
                return (
                    <>
                        <Text>{`Spoon: ${customization.spoon}`}</Text>
                        <Text>{`Milk: ${customization.milk}`}</Text>
                        <Text>{`Amount: ${customization.amount}`}</Text>
                    </>
                );
            case 'Tea':
                return (
                    <>
                        <Text>{`Sugar Spoon: ${customization.sugarSpoon}`}</Text>
                        <Text>{`Amount: ${customization.amount}`}</Text>
                    </>
                );
            case 'Water':
                return (
                    <>
                        <Text>{`Temperature: ${customization.temperature}`}</Text>
                    </>
                );
            case 'Biscuit':
                return (
                    <>
                        <Text>{`Biscuit: ${customization.biscuit}`}</Text>
                    </>
                )
            default:
                return null; // Handle any other options here
        }
    };

    const submitOrder = async () => {
        try {
            setLoading(true);

            // Create an order object with option and customization details
            const orderDetails = {
                option,
                customization,
            };

            console.log('Order details:', orderDetails);
            // Post the order to the backend
            const response = await instance.post('/orders', orderDetails);

            // Update global state with the order information
            setOrder(response.data);

            // Show a success message
            Alert.alert('Success', 'Your order has been placed successfully.');

            // Navigate to the confirmation screen
            navigation.navigate('ConfirmationOrder', { orderDetails: response.data });
        } catch (error) {
            console.error('Error submitting order:', error.message);
            Alert.alert('Error', 'Failed to submit your order. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.heading}>{`You selected: ${option}`}</Text>

            <Text style={globalStyles.heading}>Order Summary:</Text>
            {getOrderSummary()}

            <TouchableOpacity
                style={globalStyles.submitButton}
                onPress={submitOrder}>
                <Text>Submit Order</Text>
            </TouchableOpacity>
        </View>
    );
};

export default OrderScreen;
