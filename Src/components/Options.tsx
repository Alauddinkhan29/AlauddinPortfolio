import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { ImagePath } from '../utils/ImagePath'
import { horizontalScale, verticalScale } from '../utils/Scale'
import { FONTS } from '../utils/fonts'
import { COLOR } from '../utils/Color'
const options = [
    { title: "About", icon: ImagePath.AboutIcon, route: "About" },
    { title: "Work", icon: ImagePath.WorkIcon, route: "Work" },
    { title: "Contact", icon: ImagePath.ContactIcon, route: "ContactMe" },
];

const Options = (props: any) => {
    const { properties } = props
    return (
        <View>
            <FlatList
                data={options}
                keyExtractor={(item) => item.route}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => properties.navigation.navigate(item.route)
                    } style={styles.optionView}>
                        <LottieView
                            source={item.icon}
                            autoPlay
                            loop
                            useNativeLooping
                            style={{ width: horizontalScale(40), height: verticalScale(40) }}
                        />
                        <View style={styles.optionTxtView}>
                            <Text style={styles.optionTxt}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                horizontal={false}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Options

const styles = StyleSheet.create({
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
    optionTxtView: {
        height: verticalScale(40),
        width: horizontalScale(100),
        justifyContent: "center",
        // backgroundColor: "pink",
    },
})