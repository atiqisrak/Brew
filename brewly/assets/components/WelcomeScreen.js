import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, ImageBackground, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { useFonts } from 'expo-font';

const WelcomeScreen = () => {
    const [fontsLoaded] = useFonts({
        'Raleway Bold': require('../fonts/Raleway-Bold.ttf'),
        'Cookie Regular': require('../fonts/Cookie-Regular.ttf'),
        'Courgette Regular': require('../fonts/Courgette-Regular.ttf'),
        'LeckerliOne Regular': require('../fonts/LeckerliOne-Regular.ttf'),
        'Pacifico Regular': require('../fonts/Pacifico-Regular.ttf'),
        'Satisfy Regular': require('../fonts/Satisfy-Regular.ttf'),
        'Montserrat Bold': require('../fonts/Montserrat-Bold.ttf'),
    });
    const navigation = useNavigation();

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    const handleOrderNow = () => {
        navigation.navigate('Options');
    };

    const handleOrderList = () => {
        navigation.navigate('OrderList');
    };

    return (
        <SafeAreaView style={styles.scrollViewContainer}>
            {/* <ScrollView> */}
            <ImageBackground
                source={require('../images/brewbg2.png')}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <View style={styles.contentContainer}>
                    <LottieView
                        source={require('../images/coffee.json')}
                        autoPlay
                        loop
                        style={{ width: 350, height: 350 }}
                    />
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={styles.heading}>Welcome to Brew</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleOrderNow}>
                            <Text style={styles.buttonText}>
                                Order Now
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleOrderList}>
                            <Text style={styles.buttonText}>
                                View Orders
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            {/* </ScrollView> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
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
        alignItems: 'center',
        paddingTop: 20,
    },
    heading: {
        fontSize: 38,
        marginBottom: 20,
        fontFamily: 'Pacifico Regular',
        color: '#5c3408',
    },
    button: {
        fontSize: 30,
        fontFamily: 'Pacifico Regular',
        color: '#fff',
        marginBottom: 20,
        backgroundColor: '#5c3408',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 20,
        fontFamily: 'Raleway Bold',
        color: '#fff',
    },
});


export default WelcomeScreen;
