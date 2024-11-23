import { Image, Linking, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { COLOR } from '../../utils/Color'
import { ImagePath } from '../../utils/ImagePath'
import { verticalScale } from '../../utils/Scale'
import { Video } from 'react-native-video';
import ProjectApi from '../../api/ProjectApi'

const ProjectDetailsScreen = (props: any) => {
    const [projectData, setProjectData] = useState<Project>();

    useEffect(() => {
        console.log("=== props", props.route.params.Id)
        fetchProjectDetail(props.route.params.Id);
    }, [])

    const fetchProjectDetail = async (id: String) => {
        try {
            const res = await ProjectApi.getProjectDetails(id);
            console.log("==== res in project details", res)
            setProjectData(res.data); // Assuming the API returns an array of users
        } catch (err) {
            console.error("Error fetching users:", err);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.BACKGROUND_COLOR }}>
            <StatusBar backgroundColor={COLOR.BACKGROUND_COLOR} />
            <Header
                onBackPress={() => props.navigation.goBack()}
                title={projectData?.name}
            />
            <View style={styles.content}>
                {/* <Text style={styles.title}>Shopmatic</Text> */}
                <Image source={{ uri: projectData?.picUrl }} style={styles.image} />
                <Video
                    source={{ uri: projectData?.videoUrl }} // Set the video source URL
                    style={styles.video}
                    controls // Enable controls for playback
                    onError={(error) => console.error('Video error:', error)}
                />
                <Text style={styles.description}>{projectData?.description}</Text>
                <Text style={styles.technologies}>Technologies Used: {projectData?.framework}, {projectData?.programmingLanguage}, {projectData?.stateManagementSystem}</Text>

                <Text style={styles.link} onPress={() => Linking.openURL(projectData?.videoUrl)}>
                    Live Demo
                </Text>



            </View>
        </SafeAreaView>
    )
}

export default ProjectDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.BACKGROUND_COLOR, // Use your desired background color
    },
    content: {
        padding: 20, // Add padding for better spacing
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLOR.WHITE,
        marginBottom: 16,
    },
    image: {
        width: '100%', // Make the image responsive
        height: verticalScale(200), // Adjust image height as needed
        marginBottom: 16,
        borderRadius: 10,
        resizeMode: "contain"
    },
    description: {
        fontSize: 16,
        marginBottom: 16,
        color: COLOR.WHITE,
    },
    technologies: {
        fontSize: 14,
        marginBottom: 8,
        color: COLOR.WHITE,
    },
    link: {
        fontSize: 16,
        color: 'blue', // Use a link color
        textDecorationLine: 'underline', // Add underline for link styling
    },
    video: {
        width: '100%', // Make the video responsive
        height: 200, // Adjust video height as needed
        marginBottom: 16,
        backgroundColor: "red"
    },
})