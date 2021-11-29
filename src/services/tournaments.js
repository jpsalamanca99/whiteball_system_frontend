import axios from 'axios';


export const getTournaments = () =>
    axios.get('http://127.0.0.1:8000/tournaments/tournaments/');

export const postTournaments = (body) =>
    axios.post('http://127.0.0.1:8000/tournaments/tournaments/', body);


const tournaments = {
    getTournaments
}

export default tournaments;
