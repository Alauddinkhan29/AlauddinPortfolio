import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR } from '../../utils/Color'
import Header from '../../components/Header'

const Service = (props: any) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.BACKGROUND_COLOR }}>
            <StatusBar backgroundColor={COLOR.BACKGROUND_COLOR} />
            <Header
                onBackPress={() => props.navigation.goBack()}
                title={"Service"}
            />
        </SafeAreaView>
    )
}

export default Service

const styles = StyleSheet.create({})