import axios from 'axios';

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
                    break;
                case 403:
                    console.error('Forbidden: You do not have permission to access this resource.');
                    break;
                case 404:
                    console.error('Resource not found');
                    break;
                case 500:
                    console.error('Server Error: An unexpected error occurred');
                    break;
                default:
                    console.error('Unexpected error:', error.message);
            }
        } else if (error.request) {
            console.error('No response received from server');
        } else {
            console.error('Error:', error.message);
        }
        throw error;
    }
);

export default axiosInstance;