import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import instance from '../api/instance';

const OrderList = ({ route }) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchOrders = async () => {
        try {
            const response = await instance.get('/orders');
            setOrders(response.data);
            setLoading(false);
        } catch (error) {
            console.log('Error fetching orders: ', error);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    if (loading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    const renderOrderItem = ({ item }) => (
        <View>
            <Text>Order ID: {item.id}</Text>
            <Text>Option: {item.option}</Text>
            <Text>Status: {item.status}</Text>
            <View style={{ height: 1, backgroundColor: 'black', marginVertical: 10 }} />
        </View>
    );

    return (
        <View>
            <Text>Order List</Text>
            <FlatList
                data={orders}
                keyExtractor={(item) => item.id}
                renderItem={renderOrderItem}
            />
        </View>
    );
};

export default OrderList;
