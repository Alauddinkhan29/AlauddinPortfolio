import axiosInstance from "./AxiosIntance";
import { projectDetailConstant, projectDetailsConstant } from '../api/ApiConstant';


const ProjectApi = {
    getReactNativeProjects: async () => {
        try {
            const response = await axiosInstance.get(projectDetailsConstant + "ReactNative");
            console.log("==== res in API", response)
            return response.data;
        } catch (error) {
            console.log("==== error in API call", error.response)
            // Handle errors using error handling utilities
            throw error;
        }
    },

    getFlutterProjects: async () => {
        try {
            const response = await axiosInstance.get(projectDetailsConstant + "Flutter");
            console.log("==== res in API", response)
            return response.data;
        } catch (error) {
            console.log("==== error in API call", error)
            // Handle errors using error handling utilities
            throw error;
        }
    },

    getProjectDetails: async (id: String) => {
        try {
            const response = await axiosInstance.get(projectDetailConstant + id);
            console.log("==== res in API", response)
            return response.data;
        } catch (error) {
            console.log("==== error in API call", error)
            // Handle errors using error handling utilities
            throw error;
        }
    },

};

export default ProjectApi;