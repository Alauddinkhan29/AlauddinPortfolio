import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, StatusBar, Linking, Alert, TextInput, ScrollView, Platform, Dimensions, KeyboardAvoidingView } from 'react-native';
import { COLOR } from '../../utils/Color';
import Header from '../../components/Header';
import { horizontalScale, verticalScale } from '../../utils/Scale';
import { FONTS } from '../../utils/fonts';
import LottieView from 'lottie-react-native';
import { ImagePath } from '../../utils/ImagePath';
import ProjectApi from '../../api/ProjectApi';
import { showMessage } from 'react-native-flash-message';
const { height, width } = Dimensions.get('window')
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const ContactMeScreen = (props: any) => {
    const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const [isLoading, setIsLoading] = useState(false)
    const [buttonDisable, setButtonDisable] = useState(true)
    const [error, setError] = useState<any>({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [userData, setUserData] = useState({
        fullname: '',
        email: '',
        subject: '',
        message: ''
    })

    const validate = () => {

        let flag = true;

        if (userData.fullname === "") {
            setError((prevState: any) => ({ ...prevState, name: "*Please enter full name." }));
            flag = false;
        }
        if (userData.fullname.length < 4) {
            setError((prevState: any) => ({ ...prevState, name: "*Please Enter Valid Name" }));
            flag = false;
        }

        if (userData.email === "") {
            setError((prevState: any) => ({ ...prevState, email: "*Please enter email." }));
            flag = false;
        }
        if (!emailRegex.test(userData.email)) {
            setError((prevState: any) => ({ ...prevState, email: "*Please Enter Valid Email" }));
            flag = false;
        }

        if (userData.subject === "") {
            setError((prevState: any) => ({ ...prevState, subject: "*Please Enter Subject" }));
            flag = false;
        }
        if (userData.subject.length < 10) {
            setError((prevState: any) => ({ ...prevState, subject: "*Please Enter Valid Subject" }));
            flag = false;
        }

        if (userData.message === "") {
            setError((prevState: any) => ({ ...prevState, message: "*Please Enter Message" }));
            flag = false;
        }
        if (userData.message.length < 10) {
            setError((prevState: any) => ({ ...prevState, message: "*Please Enter Valid Message" }));
            flag = false;
        }

        return flag;
    };

    const sendMail = async () => {

        const isFieldValid = validate()
        if (!isFieldValid) {
            return showMessage({
                message: "Oops! Some required fields are empty or have invalid data in it. Please check and try again.",
                type: 'danger',
                icon: 'danger',
                textStyle: { fontSize: height / 55 },
                style: {
                    width: Platform.OS === "android" ? width * 0.92 : null,
                    borderRadius: Platform.OS === "android" ? 5 : null,
                    margin: Platform.OS === "android" ? 15 : null,
                    alignItems: Platform.OS === "android" ? "center" : null,
                },
            })
        }
        setIsLoading(true)
        try {
            const res = await ProjectApi.contactMe(userData);
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

    const checkName = (name: string) => {
        if (name === '') {
            setError({ ...error, name: "*Please Enter Name" });
        } else if (name.length < 4) {
            setError({ ...error, name: "*Please Enter Valid Name" });
        } else {
            setError({ ...error, name: "" });
        }
    }

    const checkEmail = (email: string) => {
        if (email === '') {
            setError({ ...error, email: "*Please Enter Email" });
        } else if (!emailRegex.test(email)) {
            setError({ ...error, email: "*Please Enter Valid Email" });
        } else {
            setError({ ...error, email: "" });
        }
    }

    const checkSubject = (subject: string) => {
        if (subject === '') {
            setError({ ...error, subject: "*Please Enter Subject" });
        } else if (subject.length < 10) {
            setError({ ...error, subject: "*Please Enter Valid Subject" });
        } else {
            setError({ ...error, subject: "" });
        }
    }

    const checkMessage = (message: string) => {
        if (message === '') {
            setError({ ...error, message: "*Please Enter Message" });
        } else if (message.length < 10) {
            setError({ ...error, message: "*Please Enter Valid Message" });
        } else {
            setError({ ...error, message: "" });
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLOR.BACKGROUND_COLOR} />
            <Header
                onBackPress={() => props.navigation.goBack()}
                title={"Contact Me"}
            />
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
                    <KeyboardAwareScrollView
                        enableOnAndroid={true}
                        extraScrollHeight={Platform.OS === 'ios' ? 20 : 10}
                        keyboardShouldPersistTaps="handled"
                        style={styles.contactContainer}
                        contentContainerStyle={{ marginBottom: 20 }}
                    >
                        <View style={styles.labelView}>
                            <Text style={styles.labelTxt}>Full Name</Text>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.inputStyles}
                                placeholder='Enter full name'
                                placeholderTextColor={COLOR.SUBTXT}
                                onChangeText={(txt) => { checkName(txt), setUserData((prevState: any) => ({ ...prevState, fullname: txt })) }}
                            />
                        </View>
                        {
                            error.name !== "" ?
                                <View style={styles.errorContainer}>
                                    <Text style={styles.errorTxt}>{error.name}</Text>
                                </View>
                                : null
                        }
                        <View style={[styles.labelView, { marginTop: 15 }]}>
                            <Text style={styles.labelTxt}>Email</Text>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.inputStyles}
                                placeholder='Enter Email'
                                placeholderTextColor={COLOR.SUBTXT}
                                onChangeText={(txt) => { checkEmail(txt), setUserData((prevState: any) => ({ ...prevState, email: txt })) }}
                            />
                        </View>
                        {
                            error.email !== "" ?
                                <View style={styles.errorContainer}>
                                    <Text style={styles.errorTxt}>{error.email}</Text>
                                </View>
                                : null
                        }
                        <View style={[styles.labelView, { marginTop: 15 }]}>
                            <Text style={styles.labelTxt}>Subject</Text>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.inputStyles}
                                placeholder='Enter Subject'
                                placeholderTextColor={COLOR.SUBTXT}
                                onChangeText={(txt) => { checkSubject(txt), setUserData((prevState: any) => ({ ...prevState, subject: txt })) }}
                            />
                        </View>
                        {
                            error.subject !== "" ?
                                <View style={styles.errorContainer}>
                                    <Text style={styles.errorTxt}>{error.subject}</Text>
                                </View>
                                : null
                        }
                        <View style={[styles.labelView, { marginTop: 15 }]}>
                            <Text style={styles.labelTxt}>Message</Text>
                        </View>
                        <View style={styles.messageInputView}>
                            <TextInput
                                style={styles.messageInputStyle}
                                placeholder='Enter Message'
                                placeholderTextColor={COLOR.SUBTXT}
                                onChangeText={(txt) => { checkMessage(txt), setUserData((prevState: any) => ({ ...prevState, message: txt })) }}
                                multiline={true}
                            />
                        </View>
                        {
                            error.message !== "" ?
                                <View style={styles.errorContainer}>
                                    <Text style={styles.errorTxt}>{error.message}</Text>
                                </View>
                                : null
                        }
                        <TouchableOpacity onPress={() => { sendMail() }} style={styles.sendMailBtn}>
                            <Text style={styles.labelTxt}>Send</Text>
                        </TouchableOpacity>
                    </KeyboardAwareScrollView>
            }
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    errorTxt: {
        fontFamily: FONTS.InterBold,
        color: COLOR.TXT_COLOR,
        fontSize: horizontalScale(13)
    },
    errorContainer: {
        height: verticalScale(30),
        width: horizontalScale(330),
        // backgroundColor: "red",
        alignSelf: "center",
        justifyContent: "center"
    },
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
        width: horizontalScale(330),
        // backgroundColor: "red",
        fontSize: horizontalScale(15),
        fontFamily: FONTS.InterDisplayBold,
        color: COLOR.WHITE
    },
    messageInputStyle: {
        paddingVertical: 18,
        // height: verticalScale(40),
        width: horizontalScale(330),
        // backgroundColor: "red",
        fontSize: horizontalScale(15),
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
        flex: 1,
        // paddingHorizontal: 16,
        alignSelf: "center"
        // marginVertical: 16,
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
