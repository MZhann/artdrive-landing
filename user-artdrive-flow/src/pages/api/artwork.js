
import { backendApiInstance } from "./index";

export const sendLike = async (artId) => {
    try {
        const response = await backendApiInstance.post(`artwork/${artId}/like/`);
        return response.data;
    }catch (error) {
        console.error("Error posting like in tournament flow:", error);
        throw error;
    }
};
