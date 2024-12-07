import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLOR } from '../../utils/Color'
import Header from '../../components/Header'
import { horizontalScale, verticalScale } from '../../utils/Scale'
import { FONTS } from '../../utils/fonts'
import LinearGradient from 'react-native-linear-gradient'

const About = (props: any) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.BACKGROUND_COLOR }}>
            <StatusBar backgroundColor={COLOR.BACKGROUND_COLOR} />
            <Header
                onBackPress={() => props.navigation.goBack()}
                title={"About"}
            />
            <ScrollView>
                <LinearGradient
                    start={{ x: 0, y: 0 }} // Start at the left
                    end={{ x: 1, y: 0 }}   // End at the right
                    colors={['#15202C', '#29333E', '#37414A']}
                    style={styles.linearGradient}
                >
                    <View style={styles.aboutTxtView}>
                        <Text style={styles.aboutTxt}>Hi! I'm Alauddin Khan, a dedicated mobile app developer with expertise in React Native and Flutter, and hands-on experience working with various companies over the years.{'\n'} {'\n'} My career spans [4 years] of creating dynamic, cross-platform applications for iOS and Android. I've had the privilege of contributing to a variety of projects, from startups to established tech firms, where I've honed my skills in building user-centric apps that perform seamlessly across devices.{'\n'} {'\n'}In each role, I've focused on transforming ideas into polished, functional mobile experiences, leveraging robust backend integrations like Firebase and REST APIs to create efficient, scalable solutions. Whether I'm diving into UI/UX design or optimizing app performance, my commitment is always to delivering exceptional quality. Let's create something impactful together!</Text>
                    </View>
                </LinearGradient>
                <TouchableOpacity onPress={() => props.navigation.navigate("ContactMe")} style={styles.contactMeBtn}>
                    <Text style={styles.contactMeTxt}>Contact Me &#8594;</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default About

const styles = StyleSheet.create({
    linearGradient: {
        // marginTop: 30,

        // height: verticalScale(250),
        width: horizontalScale(330),
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    contactMeTxt: {
        fontFamily: FONTS.InterDisplayBold,
        fontSize: horizontalScale(18),
        color: COLOR.WHITE
    },
    contactMeBtn: {
        marginVertical: 20,
        height: verticalScale(50),
        width: horizontalScale(330),
        alignSelf: "center",
        borderRadius: 15,
        backgroundColor: COLOR.BACK_COLOR2,
        justifyContent: "center",
        alignItems: "center"
    },
    aboutTxtView: {
        marginVertical: 10,
        width: horizontalScale(330),
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10
    },
    aboutTxt: {
        fontFamily: FONTS.InterDisplayMedium,
        color: COLOR.WHITE,
        textAlign: "center",
        fontSize: horizontalScale(19)
    }
})