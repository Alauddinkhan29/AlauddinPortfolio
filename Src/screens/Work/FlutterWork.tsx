import { StyleSheet, SafeAreaView, StatusBar, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { COLOR } from '../../utils/Color'
import ProjectApi from '../../api/ProjectApi'
import { horizontalScale, verticalScale } from '../../utils/Scale'
import { FONTS } from '../../utils/fonts'
import LottieView from 'lottie-react-native'

const FlutterWork = (props: any) => {
    const [projectsData, setProjectsData] = useState<Projects[]>([]);
    const [loadingProjects, setLoadingProjects] = useState(false);

    useEffect(() => {
        setLoadingProjects(true)
        const fetchData = async () => {
            try {
                const res = await ProjectApi.getFlutterProjects();
                console.log("==== res", res)
                setProjectsData(res.data); // Assuming the API returns an array of users
                setLoadingProjects(false)
            } catch (err) {
                console.error("Error fetching users:", err);
            }
        };

        fetchData();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.BACKGROUND_COLOR }}>
            <StatusBar backgroundColor={COLOR.BACKGROUND_COLOR} />
            <Header
                onBackPress={() => props.navigation.goBack()}
                title={"Flutter Projects"}
            />
            {
                loadingProjects ?
                    <View style={styles.loadingView}>
                        <LottieView
                            source={require('../../assets/images/wired-lineal-212-arrow-1-rounded-hover-pinch.json')}
                            autoPlay
                            loop
                            style={{ width: horizontalScale(70), height: verticalScale(70) }}
                        />
                        <Text style={{ marginTop: 10, color: "white", fontFamily: FONTS.InterBold, fontSize: horizontalScale(14) }}>Loading, Please wait.....</Text>
                    </View>
                    :
                    <View style={styles.projectIconView}>
                        <FlatList
                            data={projectsData}
                            renderItem={({ item }) => {
                                return (
                                    <View style={styles.projectMainView}>
                                        <TouchableOpacity onPress={() => { props.navigation.navigate('ProjectDetails', { Id: item.projectId }) }} style={styles.projectBtnView}>
                                            <Image source={{ uri: item.projectPicUrl }} style={{ borderRadius: 15, height: verticalScale(150), width: horizontalScale(150) }} />
                                        </TouchableOpacity>
                                        <Text style={styles.txtTheme}>{item.projectName}</Text>
                                    </View>
                                )
                            }}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
            }
        </SafeAreaView>
    )
}

export default FlutterWork

const styles = StyleSheet.create({
    loadingView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    projectMainView: {
        marginTop: 15,
        height: verticalScale(220),
        width: horizontalScale(330),
        // backgroundColor: "red",
        // justifyContent: "space-between",
        alignItems: "center",
    },
    txtTheme: {
        marginTop: 20,
        fontFamily: FONTS.InterBold,
        fontSize: horizontalScale(20),
        color: COLOR.WHITE
    },
    projectIconView: {
        height: verticalScale(650),
        width: horizontalScale(330),
        // backgroundColor: "red",
        alignSelf: "center",
        alignItems: "center"
    },
    projectBtnView: {
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
    }
})