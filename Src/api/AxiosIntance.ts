import axios from 'axios';
import { Dimensions, Platform } from 'react-native';
import { showMessage } from 'react-native-flash-message';
const { height, width } = Dimensions.get('window')

const axiosInstance = axios.create({
    baseURL: 'http://localhost:9003',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add interceptors for request and response
axiosInstance.interceptors.request.use(
    (config) => {
        // Add authentication token or other modifications to the request
        // ...
        console.log("[Config]", config)
        return config;
    },
    (error) => {
        // Handle request errors
        console.log("[Error in interceptors]", error)
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        console.log("[Response ]", response)
        return response;
    },
    (error) => {
        const { response } = error;
        console.log("[Error ]", error)
        if (response) {
            switch (response.status) {
                case 401:
                    console.error('Unauthorized: Access token might be invalid or expired.');
                    showMessage({
                        message: error.message,
                        type: "danger",
                        icon: "danger",
                        textStyle: { fontSize: height / 55 },
                        style: {
                            width: Platform.OS === "android" ? width * 0.92 : null,
                            borderRadius: Platform.OS === "android" ? 5 : null,
                            margin: Platform.OS === "android" ? 15 : null,
                            alignItems: Platform.OS === "android" ? "center" : null,
                        },
                    })
                    break;
                case 403:
                    console.error('Forbidden: You do not have permission to access this resource.');
                    showMessage({
                        message: error.message,
                        type: "danger",
                        icon: "danger",
                        textStyle: { fontSize: height / 55 },
                        style: {
                            width: Platform.OS === "android" ? width * 0.92 : null,
                            borderRadius: Platform.OS === "android" ? 5 : null,
                            margin: Platform.OS === "android" ? 15 : null,
                            alignItems: Platform.OS === "android" ? "center" : null,
                        },
                    })
                    break;
                case 404:
                    console.error('Resource not found');
                    showMessage({
                        message: error.message,
                        type: "danger",
                        icon: "danger",
                        textStyle: { fontSize: height / 55 },
                        style: {
                            width: Platform.OS === "android" ? width * 0.92 : null,
                            borderRadius: Platform.OS === "android" ? 5 : null,
                            margin: Platform.OS === "android" ? 15 : null,
                            alignItems: Platform.OS === "android" ? "center" : null,
                        },
                    })
                    break;
                case 500:
                    console.error('Server Error: An unexpected error occurred');
                    showMessage({
                        message: error.message,
                        type: "danger",
                        icon: "danger",
                        textStyle: { fontSize: height / 55 },
                        style: {
                            width: Platform.OS === "android" ? width * 0.92 : null,
                            borderRadius: Platform.OS === "android" ? 5 : null,
                            margin: Platform.OS === "android" ? 15 : null,
                            alignItems: Platform.OS === "android" ? "center" : null,
                        },
                    })
                    break;
                default:
                    console.error('Unexpected error:', error.message);
                    showMessage({
                        message: error.message,
                        type: "danger",
                        icon: "danger",
                        textStyle: { fontSize: height / 55 },
                        style: {
                            width: Platform.OS === "android" ? width * 0.92 : null,
                            borderRadius: Platform.OS === "android" ? 5 : null,
                            margin: Platform.OS === "android" ? 15 : null,
                            alignItems: Platform.OS === "android" ? "center" : null,
                        },
                    })
            }
        } else if (error.request) {
            console.error('No response received from server');
            showMessage({
                message: error.message,
                type: "danger",
                icon: "danger",
                textStyle: { fontSize: height / 55 },
                style: {
                    width: Platform.OS === "android" ? width * 0.92 : null,
                    borderRadius: Platform.OS === "android" ? 5 : null,
                    margin: Platform.OS === "android" ? 15 : null,
                    alignItems: Platform.OS === "android" ? "center" : null,
                },
            })
        } else {
            console.error('Error:', error.message);
            showMessage({
                message: error.message,
                type: "danger",
                icon: "danger",
                textStyle: { fontSize: height / 55 },
                style: {
                    width: Platform.OS === "android" ? width * 0.92 : null,
                    borderRadius: Platform.OS === "android" ? 5 : null,
                    margin: Platform.OS === "android" ? 15 : null,
                    alignItems: Platform.OS === "android" ? "center" : null,
                },
            })
        }
        throw error;
    }
);

export default axiosInstance;