import { Image, StatusBar, StyleSheet, Text, View, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { COLOR } from '../../utils/Color';
import { ImagePath } from '../../utils/ImagePath';
import { horizontalScale } from '../../utils/Scale';
import { FONTS } from '../../utils/fonts';
import DeviceInfo from 'react-native-device-info';
import * as RNLocalize from 'react-native-localize';

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

    useEffect(() => {
        const fetchDetails = async () => {
            // Device Information
            const deviceModel = DeviceInfo.getModel();
            const osVersion = DeviceInfo.getSystemVersion();
            const appVersion = DeviceInfo.getVersion();
            const locale = RNLocalize.getLocales()[0];
            const language = locale.languageTag;
            const region = locale.countryCode;

            // Network Information
            const ipAddress = await DeviceInfo.getIpAddress();

            // Metadata
            const installTime = await DeviceInfo.getFirstInstallTime();
            const lastUpdateTime = await DeviceInfo.getLastUpdateTime();


            console.log("==== splash", {
                deviceModel,
                osVersion,
                appVersion,
                language,
                region,
                ipAddress,
                installTime,
                lastUpdateTime,
            });
        };

        fetchDetails();
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: COLOR.BACKGROUND_COLOR, justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar backgroundColor={COLOR.BACKGROUND_COLOR} />
            <Image source={ImagePath.Aicon} style={{ height: 200, width: 200, resizeMode: 'contain' }} />
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