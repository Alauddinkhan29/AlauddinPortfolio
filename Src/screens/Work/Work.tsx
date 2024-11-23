import { StatusBar, StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { COLOR } from '../../utils/Color'
import Header from '../../components/Header'
import { ImagePath } from '../../utils/ImagePath'
import { horizontalScale, verticalScale } from '../../utils/Scale'
import { FONTS } from '../../utils/fonts'
import ProjectApi from '../../api/ProjectApi'

const Work = (props: any) => {

    // useEffect(() => {
    //     try {
    //         const res = ProjectApi.getUsers();
    //         console.log("=== res in useEffec6", res)
    //     } catch (err) {

    //     }
    // }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.BACKGROUND_COLOR }}>
            <StatusBar backgroundColor={COLOR.BACKGROUND_COLOR} />
            <Header
                onBackPress={() => props.navigation.goBack()}
                title={"Work"}
            />
            <View style={styles.btnView}>
                <View style={styles.reactNativeBtnView}>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('ReactNativeWork') }} style={styles.reactBtnView}>
                        <Image source={ImagePath.native} style={{ height: verticalScale(100), width: horizontalScale(100) }} />
                    </TouchableOpacity>
                    <Text style={styles.txtTheme}>React Native</Text>
                </View>
                <View style={styles.flutterProBtnView}>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('FlutterWork') }} style={styles.flutterBtnView}>
                        <Image source={ImagePath.flutter} style={{ height: verticalScale(100), width: horizontalScale(100) }} />
                    </TouchableOpacity>
                    <Text style={styles.txtTheme}>Flutter</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Work

const styles = StyleSheet.create({
    reactNativeBtnView: {
        height: verticalScale(220),
        width: horizontalScale(330),
        // backgroundColor: "red",
        // justifyContent: "space-between",
        alignItems: "center"
    },
    flutterProBtnView: {
        // marginTop: 15,
        height: verticalScale(220),
        width: horizontalScale(330),
        // backgroundColor: "red",
        // justifyContent: "space-between",
        alignItems: "center"
    },
    txtTheme: {
        marginTop: 20,
        fontFamily: FONTS.InterBold,
        fontSize: horizontalScale(20),
        color: COLOR.WHITE
    },
    reactBtnView: {
        height: verticalScale(170),
        width: horizontalScale(175),
        backgroundColor: COLOR.TEXT_BACK_VIEW,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        shadowColor: "#FFF",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    flutterBtnView: {
        marginTop: 15,
        height: verticalScale(170),
        width: horizontalScale(175),
        backgroundColor: COLOR.TEXT_BACK_VIEW,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        shadowColor: "#FFF",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    btnView: {
        marginTop: 15,
        // flex: 1,
        height: verticalScale(550),
        width: horizontalScale(330),
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "red",
        alignSelf: "center"
    },
})