import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { horizontalScale, verticalScale } from '../utils/Scale'
import { ImagePath } from '../utils/ImagePath'
import { FONTS } from '../utils/fonts'
import { COLOR } from '../utils/Color'

const Header = (props: any) => {
    const { onBackPress, title } = props
    return (
        <View style={styles.main}>
            <TouchableOpacity onPress={onBackPress} style={styles.backView}>
                <Image source={ImagePath.BackIcon} style={{ height: 25, width: 25, resizeMode: "contain" }} />
            </TouchableOpacity>
            <View style={styles.titleView}>
                <Text style={styles.titletxt}>{title}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    main: {
        height: verticalScale(60),
        width: horizontalScale(350),
        // backgroundColor: "red",
        alignSelf: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    backView: {
        height: verticalScale(50),
        width: verticalScale(40),
        // backgroundColor: "pink",
        justifyContent: "center"
    },
    titleView: {
        height: verticalScale(50),
        width: horizontalScale(270),
        // backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center"
    },
    titletxt: {
        fontFamily: FONTS.InterBold,
        fontSize: horizontalScale(20),
        color: COLOR.WHITE
    },
})