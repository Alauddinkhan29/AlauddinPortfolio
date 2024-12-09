import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { horizontalScale, verticalScale } from '../utils/Scale'
import { ImagePath } from '../utils/ImagePath'
import LottieView from 'lottie-react-native'
import { FONTS } from '../utils/fonts'
import { COLOR } from '../utils/Color'

const HomeDetails = () => {
    return (
        <View style={styles.aboutTxtView}>
            <View style={{ height: verticalScale(120), width: horizontalScale(300), justifyContent: "center", alignItems: "center" }}>
                <View style={{ height: 120, width: 120, borderRadius: 60, backgroundColor: "red", justifyContent: "center", alignItems: "center" }}>
                    <Image source={ImagePath.profilePic} style={{ height: 120, width: 120, resizeMode: "cover" }} />
                </View>
            </View>
            <LinearGradient
                start={{ x: 0, y: 0 }} // Start at the left
                end={{ x: 1, y: 0 }}   // End at the right
                colors={['#15202C', '#29333E', '#37414A']}
                style={styles.linearGradient}
            >
                <View style={{ height: verticalScale(280), width: horizontalScale(300), justifyContent: "center", alignItems: "center" }}>
                    <Text style={[styles.aboutTxt, { marginTop: 20 }]}>Hello, My name is Alauddin Khan. {'\n'}An Skilled Mobile App Developer with an expertise in Flutter and React Native.</Text>
                </View>
            </LinearGradient>
            <View style={{ marginTop: 30, flexDirection: "row", height: verticalScale(80), width: horizontalScale(300), justifyContent: "space-around", alignItems: "center" }}>
                <TouchableOpacity onPress={() => { Linking.openURL('https://github.com/Alauddinkhan29') }} style={styles.githubBtn}>
                    {/* <Image source={ImagePath.github} style={{ height: verticalScale(55), width: horizontalScale(55), resizeMode: "contain" }} /> */}
                    <LottieView
                        source={ImagePath.github}
                        autoPlay
                        useNativeLooping
                        loop
                        style={{ width: horizontalScale(70), height: verticalScale(70) }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { Linking.openURL('https://www.linkedin.com/in/alauddin-khan-a018b3243') }} style={styles.githubBtn}>
                    {/* <Image source={ImagePath.linkedin} style={{ height: verticalScale(55), width: horizontalScale(55), resizeMode: "contain" }} /> */}
                    <LottieView
                        source={ImagePath.linkedin}
                        autoPlay
                        useNativeLooping
                        loop
                        style={{ width: horizontalScale(70), height: verticalScale(70) }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeDetails

const styles = StyleSheet.create({
    aboutTxtView: {
        height: verticalScale(400),
        width: horizontalScale(320),
        // justifyContent: "center",
        // alignItems: "center",
        // backgroundColor: "lightgrey"
    },
    linearGradient: {
        marginTop: 30,
        height: verticalScale(250),
        width: horizontalScale(320),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    aboutTxt: {
        fontFamily: FONTS.InterBold,
        fontSize: horizontalScale(20),
        color: COLOR.WHITE,
        textAlign: "center"
    },
    githubBtn: {
        height: verticalScale(70),
        width: horizontalScale(80),
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    },
})