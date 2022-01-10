import React, { useEffect, useState } from 'react'

import Table from '../components/Table';
import Button from '../components/Button';

import { getTournamentInfo } from '../services/tournaments';

const TournamentDetails = ({ tournametId }) => {

    const headers = [{ label: 'Codigo' }, { label: 'Nombre' }, { label: 'Ventaja' }];
    const [playerList, setPlayerList] = useState([]);
    const [date, setDate] = useState('');
    const [registered, setRegistered] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getTournamentInfo(tournametId);
            setDate(res.data.date);
            setRegistered(res.data.total_players);
            setPlayerList(res.data.players);
        }

        fetchData();
    }, [tournametId]);

    const modalHandler = () => {

    }

    return (
        <>
            <h2>Detalles</h2>
            <h4>Fecha: {date}</h4>
            <h4>Numero de inscritos: {registered}</h4>
            <h3>Lista de jugadores</h3>
            <Table headers={headers} rows={playerList} />
            <Button text='Inscribir jugador' handler={modalHandler} />
        </>
    )
}


export default TournamentDetails;
