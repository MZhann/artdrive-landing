import { backendApiInstance } from "./index";


export const addToFavorites = async (artId) => {
    try {
        const response = await backendApiInstance.post(`/favorites/${artId}/add_to_favorites/`);
        return response.data;
    } catch (error) {
        console.error("Error adding to favorites:", error);
        throw error;
    }
};

export const removeFromFavorites = async (artId) => {
    try {
        const response = await backendApiInstance.post(`/favorites/${artId}/remove_from_favorites/`);
        return response.data;
    } catch (error) {
        console.error("Error removing from favorites:", error);
        throw error;
    }
};


export const fetchFavoriteArtworks = async () => {
    try {
        const response = await backendApiInstance.get('/favorites/list_favorite/');
        return response.data;
    } catch (error) {
        console.error("Error fetching favorite artworks:", error);
        throw error;
    }
};
