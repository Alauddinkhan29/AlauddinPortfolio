import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, StatusBar, Linking, Alert, TextInput, ScrollView, Platform, Dimensions } from 'react-native';
import { COLOR } from '../../utils/Color';
import Header from '../../components/Header';
import { horizontalScale, verticalScale } from '../../utils/Scale';
import { FONTS } from '../../utils/fonts';
import LottieView from 'lottie-react-native';
import { ImagePath } from '../../utils/ImagePath';
import ProjectApi from '../../api/ProjectApi';
import { showMessage } from 'react-native-flash-message';
import DeviceInfo from 'react-native-device-info';
import * as RNLocalize from 'react-native-localize';
const { height, width } = Dimensions.get('window')
// import Icon from 'react-native-vector-icons/MaterialIcons';

const ContactMeScreen = (props: any) => {
    const [isLoading, setIsLoading] = useState(false)
    const [userData, setUserData] = useState({
        fullname: '',
        email: '',
        subject: '',
        message: ''
    })

    useEffect(() => {
        const fetchDetails = async () => {
            // Device Information
            const deviceModel = DeviceInfo.getModel();
            const osVersion = DeviceInfo.getSystemVersion();
            const appVersion = DeviceInfo.getVersion();
            const locale = RNLocalize.getLocales()[0];
            const language = locale.languageTag;
            const region = locale.countryCode;

            // Network Information
            const ipAddress = await DeviceInfo.getIpAddress();

            // Metadata
            const installTime = await DeviceInfo.getFirstInstallTime();
            const lastUpdateTime = await DeviceInfo.getLastUpdateTime();


            console.log({
                deviceModel,
                osVersion,
                appVersion,
                language,
                region,
                ipAddress,
                installTime,
                lastUpdateTime,
            });
        };

        fetchDetails();
    }, []);






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

    const sendMail = async () => {
        setIsLoading(true)
        try {
            const res = await ProjectApi.contactMe(userData);
            console.log("==== res", res)
            setIsLoading(false)
            showMessage({
                message: res.message,
                type: 'success',
                icon: 'success',
                textStyle: { fontSize: height / 55 },
                style: {
                    width: Platform.OS === "android" ? width * 0.92 : null,
                    borderRadius: Platform.OS === "android" ? 5 : null,
                    margin: Platform.OS === "android" ? 15 : null,
                    alignItems: Platform.OS === "android" ? "center" : null,
                },
            })
            props.navigation.goBack();
        } catch (err) {
            console.error("Error fetching users:", err);
            setIsLoading(false)
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLOR.BACKGROUND_COLOR} />
            <Header
                onBackPress={() => props.navigation.goBack()}
                title={"Contact Me"}
            />

            {/* Contact Section */}
            {
                isLoading ?
                    <View style={styles.loadingView}>
                        <LottieView
                            source={ImagePath.sendMail}
                            autoPlay
                            loop
                            style={{ width: horizontalScale(80), height: verticalScale(80) }}
                        />
                    </View>
                    :
                    <ScrollView style={styles.contactContainer}>
                        <View style={styles.labelView}>
                            <Text style={styles.labelTxt}>Full Name</Text>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.inputStyles}
                                onChangeText={(txt) => setUserData({ ...userData, fullname: txt })}
                            />
                        </View>
                        <View style={[styles.labelView, { marginTop: 20 }]}>
                            <Text style={styles.labelTxt}>Email</Text>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.inputStyles}
                                onChangeText={(txt) => setUserData({ ...userData, email: txt })}
                            />
                        </View>
                        <View style={[styles.labelView, { marginTop: 20 }]}>
                            <Text style={styles.labelTxt}>Subject</Text>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.inputStyles}
                                onChangeText={(txt) => setUserData({ ...userData, subject: txt })}
                            />
                        </View>
                        <View style={[styles.labelView, { marginTop: 20 }]}>
                            <Text style={styles.labelTxt}>Message</Text>
                        </View>
                        <View style={styles.messageInputView}>
                            <TextInput
                                style={styles.messageInputStyle}
                                onChangeText={(txt) => setUserData({ ...userData, message: txt })}
                                multiline={true}
                            />
                        </View>
                        <TouchableOpacity onPress={() => { sendMail() }} style={styles.sendMailBtn}>
                            <Text style={styles.labelTxt}>Send</Text>
                        </TouchableOpacity>
                    </ScrollView>
            }
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    loadingView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    sendMailBtn: {
        height: verticalScale(45),
        width: horizontalScale(350),
        borderRadius: 10,
        backgroundColor: COLOR.BACK_COLOR2,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    inputStyles: {
        height: verticalScale(40),
        width: horizontalScale(315),
        // backgroundColor: "red",
        fontSize: horizontalScale(15),
        fontFamily: FONTS.InterDisplayBold,
        color: COLOR.WHITE
    },
    messageInputStyle: {
        paddingVertical: 18,
        // height: verticalScale(40),
        width: horizontalScale(315),
        // backgroundColor: "red",
        fontSize: horizontalScale(18),
        fontFamily: FONTS.InterDisplayBold,
        color: COLOR.WHITE
    },
    inputView: {
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        height: verticalScale(50),
        width: horizontalScale(350),
        // backgroundColor: "pink",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLOR.BACK_COLOR
    },
    messageInputView: {
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        // height: verticalScale(50),
        width: horizontalScale(350),
        // backgroundColor: "pink",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLOR.BACK_COLOR
    },
    labelTxt: {
        fontFamily: FONTS.InterDisplayExtraBold,
        fontSize: horizontalScale(16),
        color: COLOR.WHITE
    },
    labelView: {
        height: verticalScale(30),
        width: horizontalScale(330),
        alignSelf: "center",
        // backgroundColor: "red",
        justifyContent: "center"
    },
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
        // backgroundColor: "red"
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
