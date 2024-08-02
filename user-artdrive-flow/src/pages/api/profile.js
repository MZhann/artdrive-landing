
import { backendApiInstance } from "./index";

export const getUserData = async () => {
    try {
        const response = await backendApiInstance.get("profile/");
        return response.data;
    }catch (error) {
        console.error("Error fetching user profile data:", error);
        throw error;
    }
};


export const checkAuthorization = async () => {
    try {
        const response = await backendApiInstance.get("profile/");
        return response.data;
    }catch (error) {
        console.error("Error fetching user authorization status:", error);
        throw error;
    }
};

export const updateProfile = async (formData) => {
    try {
        const response = await backendApiInstance.put("profile/update/", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error updating profile:", error);
        throw error;
    }
};

export const changePassword = async (formData) => {
    try {
        const response = await backendApiInstance.put("profile/change-password/", formData);
        return response.data;
    } catch (error) {
        console.error("Error changing password:", error);
        throw error;
    }
};

