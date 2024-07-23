import React, { useEffect } from "react";
import { useState } from "react";

export default function useTournamentState() {
    const [tournamentState, setTournamentState] = useState(null);
    useEffect(() => {
        if (!window) return;
        const state = localStorage.getItem("tournamentState");
        if (!state) {
            console.log('tournament state is not defined: from useTournamentState hook');
            return;
        }
        setTournamentState(state);
    }, []);

    const changeTournamentState = (newState) => {
        if(window){
            localStorage.setItem('tournamentState', newState);
            setTournamentState(newState);
            console.log('tournamentState changed to: ', newState);
        }
    }
    

    return {tournamentState, changeTournamentState}
}
