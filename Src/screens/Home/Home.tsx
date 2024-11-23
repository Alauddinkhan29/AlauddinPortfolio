import { Dimensions, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { verticalScale, horizontalScale } from '../../utils/Scale'
import { ImagePath } from '../../utils/ImagePath'
import { FONTS } from '../../utils/fonts'
import { COLOR } from '../../utils/Color'
import LottieView from 'lottie-react-native';
const { height, width } = Dimensions.get('window');

const Home = (props: any) => {
    const [showOption, setShowOption] = useState(false)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.BACKGROUND_COLOR }}>
            <StatusBar backgroundColor={COLOR.BACKGROUND_COLOR} />
            <View style={styles.topView}>
                <Image source={ImagePath.Aicon} style={{ height: verticalScale(45), width: horizontalScale(45), resizeMode: "contain" }} />
                <TouchableOpacity onPress={() => { setShowOption(!showOption) }} style={styles.optionBtn}>
                    <Image source={showOption === false ? ImagePath.Option : ImagePath.closeIcon} style={{ height: showOption === false ? verticalScale(25) : verticalScale(20), width: showOption === false ? horizontalScale(25) : horizontalScale(20), resizeMode: "contain" }} />
                </TouchableOpacity>
            </View>

            <View style={styles.middleView}>
                {
                    showOption === false ?
                        <View style={styles.aboutTxtView}>
                            <View style={{ height: verticalScale(120), width: horizontalScale(300), justifyContent: "center", alignItems: "center" }}>
                                <View style={{ height: 120, width: 120, borderRadius: 60, backgroundColor: "red", justifyContent: "center", alignItems: "center" }}>
                                    <Image source={ImagePath.profilePic} style={{ height: 120, width: 120, resizeMode: "cover" }} />
                                </View>
                            </View>
                            <View style={{ height: verticalScale(280), width: horizontalScale(300), justifyContent: "center", alignItems: "center" }}>
                                <Text style={[styles.aboutTxt, { marginTop: 20 }]}>Hello, My name is Alauddin Khan. {'\n'}An Skilled Mobile App Developer with an expertise in Flutter and React Native.
                                    {/* Proven ability to design, develop, and deploy high-performance mobile applications for iOS and Android platforms. */}
                                </Text>
                            </View>
                            <View style={{ flexDirection: "row", height: verticalScale(80), width: horizontalScale(300), justifyContent: "space-around", alignItems: "center" }}>
                                <TouchableOpacity style={styles.githubBtn}>
                                    <Image source={ImagePath.github} style={{ height: verticalScale(55), width: horizontalScale(55), resizeMode: "contain" }} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.githubBtn}>
                                    <Image source={ImagePath.linkedin} style={{ height: verticalScale(55), width: horizontalScale(55), resizeMode: "contain" }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        :
                        <>
                            <TouchableOpacity onPress={() => props.navigation.navigate('About')} style={styles.optionView}>
                                <Text style={styles.optionTxt}>About</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Work')} style={styles.optionView}>
                                <Text style={styles.optionTxt}>Work</Text>
                            </TouchableOpacity>
                            {/* <TouchableOpacity onPress={() => props.navigation.navigate('Service')} style={styles.optionView}>
                                <Text style={styles.optionTxt}>Service</Text>
                            </TouchableOpacity> */}
                            <TouchableOpacity onPress={() => props.navigation.navigate('ContactMe')} style={styles.optionView}>
                                <Text style={styles.optionTxt}>Contact</Text>
                            </TouchableOpacity>
                        </>
                }
            </View>
            <View style={styles.bottomView}>
                <Image source={ImagePath.bottomIconfinal} style={{ height: verticalScale(180), width: horizontalScale(450), resizeMode: "stretch" }} />
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    githubBtn: {
        height: verticalScale(70),
        width: horizontalScale(80),
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    },
    aboutTxtView: {
        height: verticalScale(400),
        width: horizontalScale(300),
        // justifyContent: "center",
        // alignItems: "center",
        // backgroundColor: "lightgrey"
    },
    aboutTxt: {
        fontFamily: FONTS.InterBold,
        fontSize: horizontalScale(22),
        color: COLOR.WHITE,
        textAlign: "center"
    },
    optionTxt: {
        fontFamily: FONTS.InterBold,
        fontSize: horizontalScale(20),
        color: COLOR.WHITE
    },
    optionView: {
        height: verticalScale(80),
        width: horizontalScale(300),
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    },
    middleView: {
        height: verticalScale(400),
        width: horizontalScale(330),
        // backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    bottomView: {
        height: verticalScale(170),
        width: horizontalScale(330),
        position: "absolute",
        bottom: 0,
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    topView: {
        height: verticalScale(80),
        width: horizontalScale(330),
        // backgroundColor: "red",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    optionBtn: {
        height: verticalScale(50),
        width: horizontalScale(30),
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "flex-end"
    },
})