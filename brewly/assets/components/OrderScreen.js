import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useAppContext } from '../context/AppContext';
import { useNavigation } from '@react-navigation/native';
import * as Notifications from 'expo-notifications';
import { globalStyles } from '../styles/globalStyles';

const OrderScreen = ({ route, navigation }) => {
    const { option } = route.params;
    const { setOrder } = useAppContext();
    const [name, setName] = useState('');

    const submitOrder = async () => {

        const orderDetails = { option, name };
        // Update global state with the order information
        setOrder(orderDetails);

        // Send a notification to the user
        await sendNotification(orderDetails);

        // Trigger notification logic (not implemented in this example)
        // Navigate to a confirmation screen or home screen
        navigation.navigate('Confirmation', { orderDetails });
    };

    const sendNotification = async (orderDetails) => {
        const notificationContent = {
            title: 'Order Received',
            body: `Your order of ${orderDetails.option} has been received.`,
        };

        // Send the notification
        await Notifications.scheduleNotificationAsync({
            content: notificationContent,
            trigger: { seconds: 2 },
        });
    }


    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.heading}>{`You selected: ${option}`}</Text>
            <TextInput
                style={globalStyles.textInput}
                placeholder="Enter your name"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <TouchableOpacity
                style={globalStyles.submitButton}
                onPress={submitOrder}>
                <Text>Submit Order</Text>
            </TouchableOpacity>
        </View>
    );
};

export default OrderScreen;
