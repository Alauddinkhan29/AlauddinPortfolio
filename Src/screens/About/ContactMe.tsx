import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, StatusBar, Linking, Alert } from 'react-native';
import { COLOR } from '../../utils/Color';
import Header from '../../components/Header';
// import Icon from 'react-native-vector-icons/MaterialIcons';

const ContactMeScreen = (props: any) => {


    const handlePressPhone = () => {
        const phoneNumber = '+919584937352';
        Linking.openURL(`tel:${phoneNumber}`).catch(() =>
            Alert.alert('Error', 'Unable to open the phone dialer.')
        );
    };

    const handlePressEmail = () => {
        const email = 'alauddinkhan29@gmail.com';
        Linking.openURL(`mailto:${email}`).catch(() =>
            Alert.alert('Error', 'Unable to open the email app.')
        );
    };


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLOR.BACKGROUND_COLOR} />
            <Header
                onBackPress={() => props.navigation.goBack()}
                title={"Contact Me"}
            />

            {/* Contact Section */}
            <View style={styles.contactContainer}>

                {/* Phone Number */}
                <TouchableOpacity style={styles.contactRow} onPress={handlePressPhone}>
                    {/* <Icon name="phone" size={24} color="#007AFF" /> */}
                    <Text style={styles.contactText}> +91 9584937352</Text>
                </TouchableOpacity>

                {/* Email */}
                <TouchableOpacity style={styles.contactRow} onPress={handlePressEmail}>
                    {/* <Icon name="email" size={24} color="#007AFF" /> */}
                    <Text style={styles.contactText}> alauddinkhan29@gmail.com</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.BACKGROUND_COLOR,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    contactContainer: {
        paddingHorizontal: 16,
        marginVertical: 16,
    },
    contactRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        backgroundColor: '#f3f3f3',
    },
    contactText: {
        fontSize: 18,
        marginLeft: 12,
        color: '#333333',
    },
});

export default ContactMeScreen;
