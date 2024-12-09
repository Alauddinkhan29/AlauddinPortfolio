import { Dimensions, Image, Linking, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { verticalScale, horizontalScale } from '../../utils/Scale'
import { ImagePath } from '../../utils/ImagePath'
import { FONTS } from '../../utils/fonts'
import { COLOR } from '../../utils/Color'
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient'
import HomeDetails from '../../components/HomeDetails'
import Options from '../../components/Options'
import HomeFooter from '../../components/HomeFooter'
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
                        <HomeDetails />
                        :
                        <Options properties={props} />
                }
            </View>
            <HomeFooter />
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    linearGradient: {
        marginTop: 30,
        height: verticalScale(250),
        width: horizontalScale(320),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    optionTxtView: {
        height: verticalScale(40),
        width: horizontalScale(100),
        justifyContent: "center",
        // backgroundColor: "pink",
    },
    githubBtn: {
        height: verticalScale(70),
        width: horizontalScale(80),
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    },
    aboutTxtView: {
        height: verticalScale(400),
        width: horizontalScale(320),
        // justifyContent: "center",
        // alignItems: "center",
        // backgroundColor: "lightgrey"
    },
    aboutTxt: {
        fontFamily: FONTS.InterBold,
        fontSize: horizontalScale(20),
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
        width: horizontalScale(180),
        flexDirection: "row",
        // backgroundColor: "red",
        justifyContent: "space-around",
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