import { Image, StatusBar, StyleSheet, Text, View, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { COLOR } from '../../utils/Color';
import { ImagePath } from '../../utils/ImagePath';
import { horizontalScale } from '../../utils/Scale';
import { FONTS } from '../../utils/fonts';

const Splash = (props: any) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
        }).start(() => {
            props.navigation.navigate('Home');
        });
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: COLOR.BACKGROUND_COLOR, justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar backgroundColor={COLOR.BACKGROUND_COLOR} />
            <Animated.View style={{ opacity: fadeAnim, transform: [{ translateX: fadeAnim.interpolate({ inputRange: [0, 12], outputRange: [0, -100] }) }], }}>
                <Image source={ImagePath.Aicon} style={{ height: 200, width: 200, resizeMode: 'contain' }} />
            </Animated.View>
            <Animated.View style={{
                opacity: fadeAnim,
                transform: [{ translateX: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [-100, 0] }) }],
            }}>
                <Text style={{ marginTop: 20, color: COLOR.WHITE, fontSize: horizontalScale(20), textAlign: 'center', fontFamily: FONTS.InterBold }}>Welcome</Text>
            </Animated.View>
        </View>
    );
};

export default Splash;

const styles = StyleSheet.create({});