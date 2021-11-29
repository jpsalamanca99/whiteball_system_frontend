import React, { useEffect, useState } from 'react';

import Table from '../components/Table';
import Button from '../components/Button';
import Modal from '../components/Modal';
import RegisterTournament from './RegisterTournament';

import { getTournaments } from '../services/tournaments';

const DashboardTournaments = () => {

    const [tournamentList, setTournamentList] = useState([]);
    const [registerModal, setRegisterModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getTournaments();
            setTournamentList(res.data);
        }

        fetchData();
    }, []);

    const headers = [{ label: 'Fecha' }, { label: 'Inscritos' }, { label: 'Accion' }];

    const modalHandler = () => {
        setRegisterModal(!registerModal);
    }

    return (
        <>
            <Table headers={headers} rows={tournamentList} />
            <Button text='Crear nuevo torneo' handler={modalHandler} />
            <Modal modalOpen={registerModal}>
                <RegisterTournament closeModal={modalHandler} />
            </Modal>
        </>
    )
}

export default DashboardTournaments
