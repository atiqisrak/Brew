import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, ImageBackground, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

// expo-font
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

    const handleOrderNow = () => {
        navigation.navigate('Options');
    };

    const handleOrderList = () => {
        navigation.navigate('OrderList');
    };

    return (
        <SafeAreaView style={styles.scrollViewContainer}>
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
                        style={{ width: 400, height: 400 }}
                    />
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            fontFamily: 'LeckerliOne Regular',
                            fontSize: 40,
                            marginBottom: 20,
                            color: '#5c3408',
                            textAlign: 'center',
                        }}>Welcome to Brew</Text>
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#5c3408',
                                paddingVertical: 30,
                                paddingHorizontal: 20,
                                borderRadius: 5,
                                alignItems: 'center',
                                marginBottom: 20,
                                width: 300,
                            }}
                            onPress={handleOrderNow}>
                            <Text style={{
                                fontFamily: 'LeckerliOne Regular',
                                fontSize: 29,
                                color: '#fff',
                            }}>
                                Order Now
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#5c3408',
                                paddingVertical: 30,
                                paddingHorizontal: 20,
                                borderRadius: 5,
                                alignItems: 'center',
                                marginBottom: 20,
                                width: 300,
                            }}
                            onPress={handleOrderList}>
                            <Text style={{
                                fontFamily: 'LeckerliOne Regular',
                                fontSize: 29,
                                color: '#fff',
                            }}>
                                View Orders
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
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
        fontSize: 30,
        marginBottom: 20,
    },
});


export default WelcomeScreen;
