import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, ImageBackground, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { Fonts } from '../styles/customfonts';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    const handleOrderNow = () => {
        navigation.navigate('Options');
    };

    const handleOrderList = () => {
        navigation.navigate('OrderList');
    };

    return (
        <SafeAreaView style={{
            flex: 1,
            fontFamily: 'Poppins',

        }}>
            <ImageBackground
                source={require('../images/brewbg.png')}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <View style={styles.contentContainer}>
                    <LottieView
                        source={require('../images/coffee.json')}
                        autoPlay
                        loop
                        style={{ width: 200, height: 200 }}
                    />
                    <Text style={styles.heading}>Welcome to Brew</Text>
                    <TouchableOpacity
                        style={globalStyles.button}
                        onPress={handleOrderNow}>
                        <Text style={globalStyles.buttonText}>
                            Order Now
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={globalStyles.button}
                        onPress={handleOrderList}>
                        <Text style={globalStyles.buttonText}>
                            View Orders
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        // width: '100%',
        // height: '300px',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '106%',
        objectFit: 'cover',
    },
    scrollViewContainer: {
        flexGrow: 1,
    },
    contentContainer: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
    },
    heading: {
        fontSize: 30,
        marginBottom: 20,
        fontFamily: Fonts.PoppinsLight,
    },
});


export default WelcomeScreen;
