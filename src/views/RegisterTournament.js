import React, { useState } from 'react'
import Input from '../components/Input';
import Button from '../components/Button';
import Form from '../components/Form';

import { postTournaments } from '../services/tournaments';


const RegisterTournament = ({ closeModal }) => {
    const [tournamentDate, setTournamentDate] = useState('')

    const createTournament = () => {
        if (tournamentDate === ''){
            console.log('Ingresar una fecha valida');
        } else {
            postTournaments({date: tournamentDate})
            closeModal();
        }
    }

    return (
        <Form handler={createTournament}>
            <Input label='Fecha del torneo' type='date' value={tournamentDate} setValue={setTournamentDate} />
            <Button text='Crear' type='submit' />
            <Button text='Cancelar' type='button' handler={closeModal} />
        </Form>
    )
}

export default RegisterTournament
