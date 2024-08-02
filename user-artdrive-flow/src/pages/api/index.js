import axios from "axios";

export const API_URL =
    "https://artdrivebackend-production.up.railway.app/api/v1/";

export const backendApiInstance = axios.create({
    baseURL: API_URL,
});

backendApiInstance.interceptors.request.use((config) => {
    // config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;

    // return config;
    const token = localStorage.getItem("accessToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

backendApiInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._isRetry) {
            originalRequest._isRetry = true;
            try {
                const response = await axios.post(`${API_URL}token/refresh/`, {
                    refresh: localStorage.getItem("refreshToken"),
                });
                localStorage.setItem("accessToken", response.data.access);
                originalRequest.headers.Authorization = `Bearer ${response.data.access}`;
                return backendApiInstance.request(originalRequest);
            } catch (e) {
                console.log('refreshTime')
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                window.location.replace("/auth/login");
            }
        }
        throw error;
    }
);
