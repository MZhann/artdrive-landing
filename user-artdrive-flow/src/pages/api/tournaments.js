// import { backendApiInstance } from "./index";

// export const getMyTournaments = async () => {
//     const response = await backendApiInstance.get("tournaments/user_tournaments/");
//     return response.data;
// };

// export const getLiveTournaments = async () => {
//     const response = await backendApiInstance.get("tournaments/live/");
//     return response.data;
// };

// export const getUpcomingTournaments = async () => {
//     const response = await backendApiInstance.get("tournaments/upcoming/");
//     return response.data;
// };

import { backendApiInstance } from "./index";

export const getTournamentInfo = async (id) => {
    try{
        const response = await backendApiInstance.get(`/tournaments/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching tournament info:", error);
        throw error;
    }
}

export const registerJudge = async (id, formData) => {
    try{
        const response = await backendApiInstance.post(`/tournaments/${id}/register_judge/`, formData);
        return response.data;
    } catch (error) {
        console.error("Error registering Judge:", error);
        throw error;
    }
}

export const registerContestant = async (id, formData) => {
    try{
        const response = await backendApiInstance.post(`/tournaments/${id}/register_participant/`, formData);
        return response.data;
    } catch (error) {
        console.error("Error registering Contestant:", error);
        
        throw error;
    }
}


export const checkUserRole = async (id) => {
    try{
        const response = await backendApiInstance.get(`/tournaments/${id}/check_user_role/`);
        return response.data;
    }catch{
        console.error("Error fetching user role in tournament:", error);
        throw error;
    }
}

export const getMyTournaments = async () => {
    try {
        const response = await backendApiInstance.get("tournaments/user_tournaments/");
        return response.data;
    } catch (error) {
        console.error("Error fetching user tournaments:", error);
        throw error;
    }
};


export const getLiveTournaments = async () => {
    try {
        const response = await backendApiInstance.get("tournaments/live/");
        return response.data;
    } catch (error) {
        console.error("Error fetching live tournaments:", error);
        throw error;
    }
};

export const getUpcomingTournaments = async () => {
    try {
        const response = await backendApiInstance.get("tournaments/upcoming/");
        return response.data;
    } catch (error) {
        console.error("Error fetching upcoming tournaments:", error);
        throw error;
    }
};



// BELOW WILL BE TOURNAMENT FLOW REQUESTS
//
//
//
//


export const fetchArtworks = async (tournamentId) => {
    try {
        const response = await backendApiInstance.get(`tournaments/${tournamentId}/judge_artworks/`);
        return response.data;
    }catch(error){
        console.error("Error fetching judge_artworks in tournament flow:", error);
        throw error;
    }
} 


export const fetchCurrentRound = async (tournamentId) => {
    try {
        const response = await backendApiInstance.get(`tournaments/${tournamentId}/current_round/`);
        return response.data;
    }catch(error){
        console.error("Error fetching current_round in tournament flow:", error);
        throw error;
    }
} 


export const fetchUserImage = async (tournamentId) => {
    try {
        const response = await backendApiInstance.get(`tournaments/${tournamentId}/user_artwork/`);
        return response.data;
    }catch(error){
        console.error("Error fetching user_artwork in tournament flow:", error);
        throw error;
    }
} 



// export const fetchRanking = async (tournamentId) => {
//     try {
//         const response = await backendApiInstance.get(`tournaments/${tournamentId}/top_10_participants/`);
//         return response.data;
//     }catch(error){
//         console.error("Error fetching ranking in tournament flow:", error);
//         throw error;
//     }
// } 

export const fetchRanking = async (tournamentId, page = 1, username = "") => {
    try {
        const url = `tournaments/${tournamentId}/top_participants/`;
        const params = { page };
        if (username) {
            params.username = username;
        }
        const response = await backendApiInstance.get(url, { params });
        return response.data;
    } catch (error) {
        console.error("Error fetching ranking in tournament flow:", error);
        throw error;
    }
};