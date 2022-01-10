import axios from 'axios';


export const getTournaments = () =>
    axios.get('http://127.0.0.1:8000/tournaments/tournaments/');

export const postTournaments = (body) =>
    axios.post('http://127.0.0.1:8000/tournaments/tournaments/', body);

export const getTournamentInfo = (tournamentId) =>
    axios.get(`http://127.0.0.1:8000/tournaments/tournaments/${tournamentId}/`);

const tournaments = {
    getTournaments,
    postTournaments,
    getTournamentInfo
}

export default tournaments;
