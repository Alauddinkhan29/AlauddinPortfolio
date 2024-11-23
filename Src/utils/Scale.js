import { Dimensions } from "react-native";

const { height, width } = Dimensions.get('window')
const designHeight = 812
const designWidth = 375

export const horizontalScale = val => {
    return (width / designWidth) * val
}

export const verticalScale = val => {
    return (height / designHeight) * val
}