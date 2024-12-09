import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImagePath } from '../utils/ImagePath'
import { horizontalScale, verticalScale } from '../utils/Scale'

const HomeFooter = React.memo(() => {
    console.log("==== home footer render")
    return (
        <View style={styles.bottomView}>
            <Image source={ImagePath.bottomIconfinal} style={{ height: verticalScale(180), width: horizontalScale(450), resizeMode: "stretch" }} />
        </View>
    )
})

export default HomeFooter

const styles = StyleSheet.create({
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
})